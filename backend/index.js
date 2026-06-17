
require("dotenv").config();

const express = require("express");
const cors = require("cors")
const PORT = process.env.PORT
const app = express();

// custom module imports
const { connectDB } = require("./connection")
const shortifyRouter = require("./routes/url")



// database connection
const DB_URL = process.env.DATABASE_URL
connectDB(DB_URL)


// middleware layer
app.use(express.json());


// CORS Layer
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use("/shortify", shortifyRouter)

app.listen(PORT, (err, res) => {
    console.log(`Server running on port ${PORT}`);
})
