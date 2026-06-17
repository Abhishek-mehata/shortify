
import { useNavigate } from "react-router-dom";

function IntroPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-[var(--bg)] text-[var(--text)]">

            {/* HERO SECTION */}
            <div className="text-center max-w-2xl">

                <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-heading)] leading-tight">
                    Shorten URLs.
                    <br />
                    Track Everything.
                </h1>

                <p className="mt-6 text-[var(--text-muted)] text-lg">
                    A clean, fast and minimal URL shortener with analytics.
                    Built for speed, simplicity and control.
                </p>

                {/* CTA */}
                <div className="mt-8 flex gap-4 justify-center">
                    <button
                        onClick={() => navigate("/shorten")}
                        className="px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--text-heading)] font-medium hover:opacity-90 transition"
                    >
                        Get Started
                    </button>

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)] transition"
                    >
                        Dashboard
                    </button>
                </div>
            </div>

            {/* FEATURE SECTION */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                    <h3 className="text-[var(--text-heading)] font-semibold text-lg">
                        Fast Shortening
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                        Generate short links instantly with a single request.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                    <h3 className="text-[var(--text-heading)] font-semibold text-lg">
                        Click Analytics
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                        Track every visit with timestamps and insights.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                    <h3 className="text-[var(--text-heading)] font-semibold text-lg">
                        Clean Dashboard
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                        Manage all your links in one simple interface.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default IntroPage;

