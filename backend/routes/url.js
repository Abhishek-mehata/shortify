const express = require("express")
const router = express.Router()
const URL = require("../model/url")

// controller imports
const {
    createShortUrl,
    redirectShortUrl,
    urlAnalytics,
    getAllUrl,
    deleteUrl
} = require("../controllers/url")


router.get("/", getAllUrl);

router.post("/", createShortUrl)

router.get("/analytics/:shortId", urlAnalytics)
router.get("/:shortId", redirectShortUrl)

router.delete("/:shortId", deleteUrl);

module.exports = router