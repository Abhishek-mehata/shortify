
# ⚡ SHORTIFY – URL Shortener SaaS (Bitly Clone)

A full-stack **URL Shortener SaaS application** built with the MERN stack. It allows users to shorten URLs, track click analytics, and manage links through a modern dashboard UI.

---

## 🚀 Live Concept

A simple idea with SaaS-level execution:

> 🔗 Paste long URL → Get short link → Track analytics → Manage everything in a dashboard

---

## 📁 Project Structure

```text id="structure1"
root/
│
├── backend/   → Node.js + Express + MongoDB API
├── frontend/  → React (Vite) SaaS UI
└── package.json (root config optional)
```

---

## 🧠 Architecture Overview

```text id="arch1"
Frontend (React)
      ↓ Axios API Calls
Backend (Express API)
      ↓
Controllers (Business Logic)
      ↓
MongoDB (Database)
```

---

## 🚀 Features

### 🔗 URL Shortening System

* Convert long URLs into short links
* Unique short ID generation
* Instant redirect system

### 📊 Analytics Dashboard

* Track total clicks per link
* Store visit timestamps
* Visualize data using charts (Recharts)

### 🧭 Link Management

* View all shortened URLs
* Copy short links instantly
* Delete unwanted links

### 🎨 SaaS UI Experience

* Clean dashboard UI
* Expandable analytics cards
* Responsive layout

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios
* Recharts
* CSS / Tailwind (optional)

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Nanoid
* CORS
* dotenv

---

## ⚙️ Environment Variables

### Backend `.env`

```env id="env1"
DATABASE_URL=your_mongodb_connection_string
PORT=8001
```

---

### Frontend `.env`

```env id="env2"
VITE_API_URL=http://localhost:8001
```

---

## 🚀 Getting Started

### 1. Clone Repository

```bash id="clone"
git clone https://github.com/Abhishek-mehata/shortify.git
cd shortify
```

---

### 2. Backend Setup

```bash id="backend"
cd backend
npm install
npm run dev
```

Backend runs at:

```text id="be"
http://localhost:8001
```

---

### 3. Frontend Setup

```bash id="frontend"
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text id="fe"
http://localhost:5173
```

---

## 📡 API Overview

| Method | Endpoint                       | Description              |
| ------ | ------------------------------ | ------------------------ |
| POST   | `/shortify`                    | Create short URL         |
| GET    | `/shortify/:shortId`           | Redirect to original URL |
| GET    | `/shortify/analytics/:shortId` | Get analytics            |
| DELETE | `/shortify/:shortId`           | Delete URL               |

---

## 🔄 How It Works

```text id="flow1"
1. User enters long URL
2. Frontend sends request to backend
3. Backend generates shortId
4. Stores in MongoDB
5. Returns short link
6. User opens link → redirect + analytics tracking
```

---

## 📊 Analytics System

Each click is stored as:

```js id="analytics"
{
  timestamp: Date.now()
}
```

Used for:

* Total clicks
* Visit history
* Graph visualization

---

## 🧩 Folder Highlights

### Backend

* `routes/` → API endpoints
* `controllers/` → Logic layer
* `model/` → MongoDB schema
* `connection.js` → DB connection

### Frontend

* `pages/` → UI screens
* `components/` → Reusable UI
* `hooks/` → Custom logic
* `services/` → API abstraction
* `api/` → Axios instance

---

## ⚡ Key Design Principles

* 🧱 Clean separation of frontend & backend
* 🔄 REST API architecture
* 📦 Reusable frontend components
* ⚡ Centralized API handling
* 📊 Analytics-driven design
* 🎯 SaaS UI mindset

---

## 📌 Future Improvements

* 🔐 JWT authentication system
* 👤 User-specific dashboards
* 🌐 Custom domains for short links
* ⚡ Redis caching for faster redirects
* 🔔 Toast notifications
* 📱 Mobile-first optimization
* 🚀 Deployment (Vercel + Render)

---

## 🌍 Deployment Plan

| Layer    | Platform         |
| -------- | ---------------- |
| Frontend | Vercel           |
| Backend  | Render / Railway |
| Database | MongoDB Atlas    |

---

## 🧠 What This Project Demonstrates

This project shows:

* Full-stack MERN development
* REST API design
* Database modeling (MongoDB)
* Frontend architecture (React)
* SaaS UI thinking
* Real-world product structure

---

## 👨‍💻 Author

Built as a **full-stack SaaS learning project** focused on production-level architecture and scalable frontend/backend design.

---

## ⭐ Project Status

> 🚧 MVP Completed
> 🚀 SaaS Enhancements In Progress
> 🧠 Scalable Architecture Ready
