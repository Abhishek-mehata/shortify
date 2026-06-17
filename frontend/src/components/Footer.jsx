
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-full border-t border-[var(--border)] bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* LEFT - BRAND */}
                <div className="text-sm text-[var(--text-muted)]">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-[var(--text-heading)] font-medium">
                        URLShort
                    </span>
                    . All rights reserved.
                </div>

                {/* CENTER - LINKS (minimal) */}
                <div className="flex gap-6 text-sm text-[var(--text-muted)]">
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
                </div>

                {/* RIGHT - SMALL NOTE */}
                <div className="text-xs text-[var(--text-muted)]">
                    Built with React + Node
                </div>

            </div>
        </footer>
    );
}

export default Footer;

