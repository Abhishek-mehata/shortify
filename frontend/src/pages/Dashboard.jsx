import { useEffect, useState } from "react";
import { getAllUrls, deleteUrl } from "../api/api";

function Dashboard() {
    const [urls, setUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchUrls = async () => {
        try {
            setLoading(true);
            const data = await getAllUrls();
            setUrls(data);
        } catch (err) {
            setError("Failed to load URLs");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUrls();
    }, []);

    const handleDelete = async (shortId) => {
        const confirmDelete = confirm("Are you sure you want to delete this URL?");
        if (!confirmDelete) return;

        try {
            await deleteUrl(shortId);

            // update UI instantly (no refetch needed)
            setUrls((prev) =>
                prev.filter((item) => item.shortId !== shortId)
            );

        } catch (err) {
            alert("Failed to delete URL");
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied!");
    };

    if (loading) {
        return (
            <div className="text-center mt-10 text-[var(--text-muted)]">
                Loading dashboard...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-400 text-center mt-10">
                {error}
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto">

            {/* HEADER */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[var(--text-heading)]">
                    Dashboard
                </h1>
                <p className="mt-2 text-[var(--text-muted)]">
                    Manage your shortened URLs
                </p>
            </div>

            {/* LIST */}
            <div className="space-y-4">

                {urls.length === 0 && (
                    <p className="text-[var(--text-muted)]">
                        No URLs created yet
                    </p>
                )}

                {urls.map((item) => (
                    <div
                        key={item.shortId}
                        className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
                    >

                        {/* TOP ROW */}
                        <div className="flex justify-between items-center">

                            {/* SHORT URL */}
                            <a
                                href={`http://localhost:8001/shortify/${item.shortId}`}
                                target="_blank"
                                className="text-[var(--accent)] font-medium"
                            >
                                /shortify/{item.shortId}
                            </a>

                            {/* CLICKS */}
                            <span className="text-sm text-[var(--text-muted)]">
                                {item.visitHistory.length} clicks
                            </span>
                        </div>

                        {/* ORIGINAL URL */}
                        <p className="mt-2 text-sm text-[var(--text-muted)] break-all">
                            {item.redirectUrl}
                        </p>

                        {/* ACTIONS */}
                        <div className="mt-3 flex gap-3 flex-wrap">

                            <button
                                onClick={() =>
                                    copyToClipboard(
                                        `http://localhost:8001/shortify/${item.shortId}`
                                    )
                                }
                                className="px-3 py-1.5 text-sm rounded-lg bg-[var(--accent-bg)] text-[var(--accent)]"
                            >
                                Copy
                            </button>

                            <a
                                href={`/analytics/${item.shortId}`}
                                className="px-3 py-1.5 text-sm rounded-lg bg-[var(--surface)] border border-[var(--border)]"
                            >
                                Analytics
                            </a>

                            <button
                                onClick={() => handleDelete(item.shortId)}
                                className="px-3 py-1.5 text-sm rounded-lg bg-red-500/10 text-red-400"
                            >
                                Delete
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;