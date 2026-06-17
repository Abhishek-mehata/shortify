import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnalytics } from "../api/api";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function AnalyticsPage() {
    const { shortId } = useParams();

    const [data, setData] = useState(null);
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    const groupByHour = (analytics) => {
        const map = {};

        analytics.forEach((item) => {
            const date = new Date(item.timeStamp);
            const hour = date.getHours();

            map[hour] = (map[hour] || 0) + 1;
        });

        return Object.keys(map).map((hour) => ({
            hour: `${hour}:00`,
            clicks: map[hour]
        }));
    };

    const fetchAnalytics = async () => {
        try {
            setLoading(true);

            const res = await getAnalytics(shortId);
            setData(res);

            const formatted = groupByHour(res.analytics);
            setChartData(formatted);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnalytics();
    }, [shortId]);

    if (loading) {
        return (
            <div className="text-center mt-10 text-[var(--text-muted)]">
                Loading analytics...
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">

            <h1 className="text-3xl font-bold">
                Analytics
            </h1>

            <p className="text-sm text-[var(--text-muted)] mt-1">
                Short ID: {shortId}
            </p>

            {/* TOTAL */}
            <div className="mt-6 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <h2>Total Clicks</h2>
                <p className="text-2xl text-[var(--accent)]">
                    {data.totalClicks}
                </p>
            </div>

            {/* LINE CHART */}
            <div className="mt-6 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <h2 className="mb-4 font-medium">
                    Clicks Over Time (Hourly)
                </h2>

                <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <LineChart data={chartData}>

                            {/* light grid (clean SaaS look) */}
                            <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

                            <XAxis
                                dataKey="hour"
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                            />

                            <YAxis
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                            />

                            <Tooltip />

                            {/* MAIN LINE (SaaS STYLE) */}
                            <Line
                                type="monotone"
                                dataKey="clicks"
                                stroke="var(--accent)"
                                strokeWidth={2}
                                strokeDasharray="6 6"
                                dot={{
                                    r: 4,
                                    fill: "var(--accent)",
                                    stroke: "#fff",
                                    strokeWidth: 2
                                }}
                                activeDot={{
                                    r: 6
                                }}
                            />

                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* RAW LIST */}
            <div className="mt-6 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <h2 className="mb-2 font-medium">
                    Visit History
                </h2>

                <div className="space-y-2 text-sm text-[var(--text-muted)]">
                    {data.analytics.map((item, i) => (
                        <div key={i} className="flex justify-between">
                            <span>Visit #{i + 1}</span>
                            <span>
                                {new Date(item.timeStamp).toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default AnalyticsPage;