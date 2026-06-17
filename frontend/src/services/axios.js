

import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    // baseURL: "http://localhost:8001/shortify",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;

