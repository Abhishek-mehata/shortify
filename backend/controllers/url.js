const { nanoid } = require("nanoid")
const URL = require("../model/url")


// create short url - POST shortify/
async function createShortUrl(req, res) {
    try {

        const body = req.body;
        if (!body || !body.url) {
            return res.status(400).json({
                msg: "all fields required"
            })
        }

        const uniqueId = nanoid(8);

        await URL.create({
            shortId: uniqueId,
            redirectUrl: body.url,
            visitHistory: []
        });

        return res.status(201).json({
            shortId: uniqueId,
            shortUrl: `http://localhost:8001/shortify/${uniqueId}`
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Internal Server Error, try after few moments",
            details: error
        })
    }


}

// redirect url - GET shortify/:id
async function redirectShortUrl(req, res) {

    try {

        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            { shortId: shortId }, // finding parameter
            { $push: { visitHistory: { timeStamp: new Date() } } }, // update parameter
            { returnDocument: "after" } // returns the updated document
        );

        if (!entry) {
            return res.status(404).json({
                msg: "Short URL not found"
            })
        }

        res.redirect(entry.redirectUrl);
    } catch (error) {
        return res.status(500).json({
            msg: "Internal Server Error, try after few moments",
            details: error
        })
    }
}

// view url analytics - GET shortify/analytics/:id
async function urlAnalytics(req, res) {
    try {

        const shortId = req.params.shortId;

        const result = await URL.findOne({ shortId: shortId })

        if (!result) {
            return res.status(404).json({
                error: "No data found"
            })
        }

        return res.status(200).json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Internal Server Error, try after few moments",
            details: error
        })
    }
}


// get all url info
async function getAllUrl(req, res) {
    try {
        const urls = await URL.find({}).sort({ createdAt: -1 })

        return res.status(200).json(urls);
    } catch (error) {
        return res.status(500).json({
            msg: "Failed to fetch URLs",
            details: error
        });
    }
}

async function deleteUrl(req, res) {
    try {
        const shortId = req.params.shortId;

        const response = await URL.findOneAndDelete({ shortId });

        if (!response) {
            return res.status(404).json({
                msg: "URL not found"
            });
        }

        return res.status(200).json({
            msg: "Deleted successfully",
            deleted: response
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Internal Server Error Occurred!",
            details: error
        });
    }
}

module.exports = {
    createShortUrl,
    redirectShortUrl,
    urlAnalytics,
    getAllUrl,
    deleteUrl
}