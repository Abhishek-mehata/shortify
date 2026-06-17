import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <header className="w-full border-b border-[var(--border)] bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <div
                    onClick={() => navigate("/dashboard")}
                    className="text-[var(--text-heading)] font-bold text-lg cursor-pointer"
                >
                    SHORT<span className="text-[var(--accent)]">IFY</span>
                </div>

                {/* NAV LINKS */}
                <nav className="hidden md:flex gap-8 text-sm text-[var(--text)]">
                    <Link
                        to="/dashboard"
                        className="hover:text-[var(--text-heading)] transition"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/shorten"
                        className="hover:text-[var(--text-heading)] transition"
                    >
                        Shorten
                    </Link>

                    {/* <Link
                        to="/analytics"
                        className="hover:text-[var(--text-heading)] transition"
                    >
                        Analytics
                    </Link> */}
                </nav>

                {/* CTA BUTTON */}
                <button
                    onClick={() => navigate("/shorten")}
                    className="px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--text-heading)] text-sm font-medium hover:opacity-90 transition"
                >
                    New Link
                </button>

            </div>
        </header>
    );
}

export default Navbar;

