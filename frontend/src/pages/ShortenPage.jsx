



// import { useState } from "react";
// import { createShortUrl } from "../api/api";

// function ShortenPage() {
//     const [url, setUrl] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [shortUrl, setShortUrl] = useState("");
//     const [error, setError] = useState("");

//     const handleShorten = async () => {
//         try {
//             const res = await createShortUrl(url);
//             console.log(res)

//             // ALWAYS use backend-generated URL
//             setShortUrl(res.shortUrl);

//         } catch (err) {
//             console.log(err);
//         }
//     };
// // {shortId: '4MvBKYHZ', shortUrl: 'http://localhost:8001/shortify/4MvBKYHZ'}
//     return (
//         <div className="max-w-2xl mx-auto">
//             <h1 className="text-3xl font-bold text-[var(--text-heading)]">
//                 Shorten URL
//             </h1>

//             <input
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 placeholder="Enter URL"
//                 className="mt-6 w-full p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
//             />

//             <button
//                 onClick={handleShorten}
//                 disabled={loading}
//                 className="mt-4 w-full p-3 rounded-xl bg-[var(--accent)] text-[var(--text-heading)]"
//             >
//                 {loading ? "Loading..." : "Shorten"}
//             </button>

//             {error && <p className="text-red-400 mt-3">{error}</p>}

//             {shortUrl && (
//                 <div className="mt-6 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
//                     <a href={shortUrl} target="_blank">
//                         {shortUrl}
//                     </a>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ShortenPage;



import { useState } from "react";
import { createShortUrl } from "../api/api";

function ShortenPage() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [links, setLinks] = useState([]);
    const [error, setError] = useState("");

    const handleShorten = async () => {
        if (!url.trim()) {
            setError("URL is required");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const res = await createShortUrl(url);

            // ADD NEW LINK TO LIST (not replace)
            setLinks((prev) => [res, ...prev]);

            setUrl(""); // clear input

        } catch (err) {
            setError("Failed to shorten URL");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="max-w-2xl mx-auto">

            <h1 className="text-3xl font-bold text-[var(--text-heading)]">
                Shorten URL
            </h1>

            {/* INPUT */}
            <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
                className="mt-6 w-full p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
            />

            {/* BUTTON */}
            <button
                onClick={handleShorten}
                disabled={loading}
                className="mt-4 w-full p-3 rounded-xl bg-[var(--accent)] text-[var(--text-heading)]"
            >
                {loading ? "Loading..." : "Shorten"}
            </button>

            {/* ERROR */}
            {error && (
                <p className="text-red-400 mt-3">
                    {error}
                </p>
            )}

            {/* LIST OF LINKS */}
            <div className="mt-6 space-y-4">

                {links.map((item) => (
                    <div
                        key={item.shortId}
                        className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
                    >

                        {/* SHORT URL */}
                        <div className="flex justify-between items-center">
                            <a
                                href={item.shortUrl}
                                target="_blank"
                                className="text-[var(--accent)] font-medium"
                            >
                                {item.shortUrl}
                            </a>
                        </div>

                        {/* SHORT ID */}
                        <p className="text-sm text-[var(--text-muted)] mt-2">
                            ID: {item.shortId}
                        </p>

                        {/* ACTIONS */}
                        <div className="mt-3 flex gap-3 flex-wrap">

                            <button
                                onClick={() =>
                                    copyToClipboard(item.shortUrl)
                                }
                                className="px-3 py-1.5 text-sm rounded-lg bg-[var(--accent-bg)] text-[var(--accent)]"
                            >
                                Copy URL
                            </button>

                            <button
                                onClick={() =>
                                    copyToClipboard(item.shortId)
                                }
                                className="px-3 py-1.5 text-sm rounded-lg bg-[var(--surface)] border border-[var(--border)]"
                            >
                                Copy ID
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default ShortenPage;