
---

# 🎯 SHORTIFY Frontend (React + Vite)

A modern **SaaS-style URL Shortener frontend** built with React and Vite. It provides a fast, responsive dashboard for creating short links, tracking analytics, and managing URLs.

---

## 📁 Project Structure

```text id="structure1"
src/
│
├── api/          → Axios base instance (HTTP client)
├── assets/       → Images, icons, static files
├── components/   → Reusable UI components (Navbar, Footer, Cards)
├── hooks/        → Custom React hooks (e.g. useShortenUrl)
├── layouts/      → Layout wrapper for pages
├── pages/        → Application screens (routes UI)
├── routes/       → React Router configuration
├── services/     → API service layer (business logic for API calls)
├── App.jsx       → Root component
└── main.jsx      → Entry point
```

---

## 🚀 Features

* 🔗 Generate short URLs instantly from long links
* 📋 One-click copy to clipboard
* 📊 Real-time analytics dashboard
* 📈 Click tracking with charts (Recharts)
* 🗑️ Delete and manage URLs
* 🧭 Multi-page routing (React Router)
* 🎨 Clean SaaS-style UI/UX design
* ⚡ Fast Vite-powered frontend

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🧭 React Router DOM
* 📡 Axios (API handling)
* 📊 Recharts (analytics visualization)
* 🪝 Custom Hooks (state + logic abstraction)
* 🎨 CSS / Tailwind (optional styling)

---

## ⚙️ Environment Variables

Create a `.env` file in the frontend root:

```env id="env1"
VITE_API_URL=http://localhost:8001
```

> This is the base URL used for all backend API requests.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash id="install"
npm install
```

---

### 2. Start development server

```bash id="run"
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 📡 API Architecture

All API calls are centralized using Axios.

```text id="api-flow"
React Components
      ↓
Custom Hooks / Services
      ↓
Axios Instance (api.js)
      ↓
Backend API (/shortify routes)
```

---

## 📄 Pages Overview

### 🏠 Intro Page

* Landing page explaining the product
* Simple SaaS-style introduction

---

### ✂️ Shorten Page

* Input long URL
* Generate short link instantly
* Copy link with one click

---

### 📊 Dashboard

* Displays all created short URLs
* Expandable analytics cards
* Quick actions (copy/delete)
* Click analytics preview

---

### 📈 Analytics View

* Detailed statistics per URL
* Visit history visualization
* Chart-based insights using Recharts

---

## 🧠 Core Workflows

### 🔗 URL Shortening Flow

```text id="flow1"
User enters URL
   ↓
Frontend sends POST request
   ↓
Backend returns shortId
   ↓
UI displays short link
```

---

### 📊 Analytics Flow

```text id="flow2"
User opens dashboard
   ↓
Frontend fetches analytics data
   ↓
Backend returns visit history
   ↓
Recharts renders visualization
```

---

### 📋 Copy-to-Clipboard

* Uses native browser Clipboard API
* Improves sharing experience
* Instant feedback UX

---

## 🧩 Frontend Architecture

```text id="arch1"
Pages
  ↓
Layouts
  ↓
Components
  ↓
Hooks / Services
  ↓
Axios Instance
  ↓
Backend API
```

---

## ⚡ Key Design Principles

* 🧱 Component-based architecture
* 🔄 Separation of concerns (UI / logic / API)
* 📦 Centralized API handling
* 🚀 Scalable folder structure
* 🎯 SaaS-first UI design approach

---

## 📌 Future Improvements

* 🔐 Authentication (JWT login/signup)
* 👤 User-based dashboards
* 🔔 Toast notifications system
* ⚡ Global state management (Zustand / Redux)
* 🌐 Production deployment (Vercel)
* 📱 Fully mobile-optimized UI
* 🔄 Real-time analytics updates (WebSockets)

---

## ⚠️ Important Notes

* Backend must be running before frontend
* Ensure CORS is enabled in backend
* `.env` must contain correct API base URL
* Charts require valid numeric analytics data

---

## 👨‍💻 Author

Built as a **full-stack SaaS learning project** focused on frontend architecture, API integration, and real-world production patterns.

---
