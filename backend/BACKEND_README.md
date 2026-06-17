
# ⚙️ SHORTIFY Backend (Express + MongoDB)

A RESTful backend API for a URL Shortener SaaS application built with Node.js, Express, and MongoDB. It handles URL creation, redirection, analytics tracking, and deletion.

---

## 📁 Project Structure

```
connection.js        → MongoDB connection setup
index.js             → Server entry point
routes/url.js        → API route definitions
controllers/url.js   → Business logic (core functions)
model/url.js         → Mongoose schema/model
views/               → (optional / unused or future UI templates)
```

---

## 🚀 Features

* 🔗 Create short URLs from long URLs
* 🔁 Redirect using short ID
* 📊 Track visit history (analytics)
* 📈 Get click analytics per URL
* 🗑️ Delete shortened URLs
* 🧠 Clean MVC architecture

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Nanoid (for short ID generation)
* dotenv (environment variables)
* CORS

---

## ⚙️ Environment Variables

Create a `.env` file in the backend root:

```
DATABASE_URL=your_mongodb_connection_string
PORT=8001
```

---

## 🚀 Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run development server

```
npm run dev
```

Server will start at:

```
http://localhost:8001
```

---

## 📡 API Endpoints

### 🔗 Create Short URL

```
POST /shortify
```

**Request Body:**

```json
{
  "url": "https://example.com"
}
```

**Response:**

```json
{
  "shortId": "abc123",
  "redirectUrl": "https://example.com"
}
```

---

### 🔁 Redirect to Original URL

```
GET /shortify/:shortId
```

➡️ Redirects user to original URL and logs visit timestamp.

---

### 📊 Get Analytics

```
GET /shortify/analytics/:shortId
```

**Response:**

```json
{
  "totalClicks": 5,
  "visitHistory": [
    { "timestamp": "2026-06-17T10:00:00.000Z" }
  ]
}
```

---

### 🗑️ Delete Short URL

```
DELETE /shortify/:shortId
```

---

## 🧠 Data Model (MongoDB Schema)

```js
{
  shortId: String,
  redirectUrl: String,
  visitHistory: [
    {
      timestamp: Date
    }
  ]
}
```

---

## 🔄 Architecture Flow

```
Client Request
     ↓
Routes (routes/url.js)
     ↓
Controller (controllers/url.js)
     ↓
Model (model/url.js)
     ↓
MongoDB Database
```

---

## ⚠️ Important Notes

* Make sure MongoDB is running or connected via Atlas
* Enable CORS for frontend integration
* All analytics are stored in `visitHistory`
* `shortId` is generated using Nanoid

---

## 📌 Future Improvements

* 🔐 JWT authentication (user-based URLs)
* ⚡ Rate limiting (prevent abuse)
* 📊 Advanced analytics (daily/weekly charts)
* 🌐 Custom domains for short links
* ⚡ Redis caching for faster redirects

---

## 👨‍💻 Author

Built as a full-stack learning project focused on backend architecture, API design, and real-world SaaS patterns.

---
