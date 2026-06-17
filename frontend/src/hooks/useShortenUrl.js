
// import { useState } from "react";
// import { createShortUrl } from "../api/api";

// export const useShortenUrl = () => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [data, setData] = useState(null);

//     const shorten = async (url) => {
//         setLoading(true);
//         setError("");
//         setData(null);

//         try {
//             const response = await createShortUrl(url);
//             setData(response);
//             return response;
//         } catch (err) {
//             setError(
//                 err?.response?.data?.msg || "Failed to shorten URL"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return {
//         shorten,
//         loading,
//         error,
//         data,
//     };
// };

