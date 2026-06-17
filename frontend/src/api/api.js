
import api from "../services/axios";

// get all URLs
export const getAllUrls = async () => {
    const res = await api.get("/");
    return res.data;
};

// create short URL
export const createShortUrl = async (url) => {
    const res = await api.post("/", { url });
    return res.data
}

// Get analytics
export const getAnalytics = async (shortId) => {
    const res = await api.get(`/analytics/${shortId}`);
    return res.data;
};

// delete url
export const deleteUrl = async (shortId) => {
    const res = await api.delete(`/${shortId}`);
    return res.data;
};