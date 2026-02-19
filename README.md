# Smart Bookmark App

A modern full-stack bookmark management application built with Next.js 14 and Supabase.

## 🚀 Live Demo
https://smart-bookmark-app-zeta-seven.vercel.app

## 📂 GitHub Repository
https://github.com/vasanthvk138/smart-bookmark-app

---

## 🛠 Tech Stack

- Next.js 14 (App Router)
- Supabase (Auth + Database + Realtime)
- Tailwind CSS
- Vercel (Deployment)
- Google OAuth

---

## ✨ Features

- Secure Google Authentication
- User-specific bookmark storage
- Real-time updates using Supabase Realtime
- Modern responsive UI
- Protected dashboard routes
- Logout functionality

---

## 🔐 Authentication & Security

- Google OAuth handled via Supabase Auth
- Session validation before dashboard access
- Row-Level Security (RLS) enabled
- Each bookmark linked to authenticated user via `user_id`
- Environment variables securely configured in Vercel

---

## ⚡ Real-Time Updates

The app subscribes to Supabase Realtime channels.

Whenever a bookmark is:
- Added
- Deleted

The UI updates instantly without refreshing the page.

---

## 🚧 Challenges Faced

- Configuring Google OAuth across Google Cloud, Supabase, and Vercel
- Handling redirect URLs for local and production environments
- Debugging environment variable issues during deployment
- Ensuring Row-Level Security policies worked correctly

---

## 🧠 What I Learned

- Proper OAuth flow setup
- Managing environment variables securely
- Implementing real-time subscriptions
- Debugging production deployment issues
- Writing cleaner and more maintainable UI code

---

## 📦 Installation (For Local Development)

```bash
git clone https://github.com/vasanthvk138/smart-bookmark-app.git
cd smart-bookmark-app
npm install
npm run dev
```

---

## 👨‍💻 Author

Vasanth Kumar
