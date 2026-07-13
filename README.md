# I AM CODER 🚀

> **Learn Coding Completely FREE. Become Industry Ready.**

A world-class, fully responsive, highly animated, enterprise-grade **Full Stack E-Learning Platform**.
Students register, get approved by admin, log in to a modern dashboard and learn everything for free:
Programming, Full Stack, Data Analytics, AI, Machine Learning, Deep Learning, Generative AI,
Agentic AI, Interview Prep, Soft Skills and Industrial Projects — from Beginner to Advanced.

Built for **production**, **security**, **scalability** and **smooth performance for 100+ concurrent users**.

---

## ✨ Highlights

- **Animated landing page** — 3D Hero (Three.js), GSAP + Framer Motion, glassmorphism, neon UI, cursor glow, scroll reveal, typing animation, particles.
- **Multi-step animated Apply form** — fully validated with **Zod**, captcha, document uploads.
- **Role-based auth** — JWT access + refresh tokens, OTP login, bcrypt, secure admin approval flow that auto-generates Student ID & username and emails credentials.
- **Student dashboard** — profile, progress, XP, badges, quiz results, attendance, notifications.
- **Admin dashboard** — analytics, application review (approve/reject), student/course management, broadcast notifications, queries, uploads, reports export.
- **Modules** — Courses, Videos, Notes, Projects (40+), Quiz (MCQ/OMR, timer, negative marking, leaderboard), Attendance (QR/manual/admin), Notifications, Uploads (Cloudinary), **Queries (student → admin reply)**, **Bookmarks**, **Reports export (CSV/XLSX)**.
- **Dual database** — **MongoDB** (document store) + **MySQL** (applications, records, audit) via **Prisma**.
- **Security** — Helmet, CORS, rate limiting, Zod validation, bcrypt, JWT, RBAC, refresh-token revocation, best-effort anti-cheat for quizzes.
- **Production-ready** — Docker, docker-compose, CI/CD (GitHub Actions), Vercel + Render deploy configs, OpenAPI docs, ESLint/Prettier/Husky.

---

## 🧱 Tech Stack

| Layer | Tech |
| --- | --- |
| Frontend | Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion, GSAP, Three.js, React Query, React Hook Form, Zod, Redux Toolkit, React Icons |
| Backend | Node.js, Express.js, TypeScript |
| Databases | MongoDB Atlas, MySQL |
| ORM | Prisma (Mongo + MySQL) |
| Auth | JWT, Refresh Token, OTP, bcrypt |
| Storage | Cloudinary |
| Mail | Resend (API, preferred) + Brevo (SMTP fallback), Nodemailer |
| Deploy | Vercel (FE) · Render (BE) · Docker |

---

## 📁 Monorepo Structure

```
iamcoder/
├── client/                 # Next.js 15 frontend
│   ├── src/
│   │   ├── app/            # App Router (landing, (auth), (dashboard))
│   │   ├── components/     # UI library, layout, sections, apply, auth
│   │   └── lib/            # api client, redux store, hooks, utils
│   ├── Dockerfile · vercel.json · tailwind.config.ts
├── server/                 # Express + TS backend
│   ├── src/
│   │   ├── config/         # env, db (prisma), logger
│   │   ├── middleware/     # auth, validate, rateLimiter, errorHandler
│   │   ├── modules/        # auth, application, admin, courses, quiz, attendance, projects, notifications, upload, student
│   │   ├── routes/         # API aggregator
│   │   ├── utils/          # jwt, password, otp, email, cloudinary, apiResponse, errors
│   │   └── types/          # express augmentation
│   ├── prisma/             # MongoDB schema + MySQL schema
│   ├── Dockerfile · docs/openapi.yaml
├── docker-compose.yml
├── render.yaml             # Render (backend) config
├── vercel.json             # Vercel (frontend) config
├── .github/workflows/ci.yml
└── README.md
```

Architecture follows **Clean Architecture / SOLID**, feature-based modules, a service/repository
mindset, centralized validation, error handling, logging and config management.

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 20
- MongoDB Atlas (or local) + MySQL (or Docker)
- Cloudinary account (optional, falls back to mock)
- SMTP credentials (optional)

### Option A — Docker (recommended)
```bash
cp .env.example .env                 # edit values
docker-compose up -d --build
# client  → http://localhost:3000
# server  → http://localhost:4000/api/v1
```

### Option B — Local dev
```bash
# 1. Install workspace deps
npm install

# 2. Backend
cd server
cp .env.example .env                # fill DATABASE_URL, MYSQL_URL, secrets
npx prisma generate
npx prisma generate --schema prisma/mysql.prisma
npx prisma migrate dev              # mongo
npx prisma db push --schema prisma/mysql.prisma
npm run db:seed                     # seed the full curriculum (20+ courses)
npm run dev                         # tsx watch on :4000

# 3. Frontend (new terminal)
cd client
cp .env.local.example .env.local
npm run dev                         # next dev on :3000
```

---

## 🔐 Environment Variables

See **`.env.example`** (root) and **`server/.env.example`** / **`client/.env.local.example`**.
Key vars: `JWT_SECRET`, `JWT_REFRESH_SECRET`, `DATABASE_URL` (Mongo), `MYSQL_URL`, `REDIS_URL`,
`CLOUDINARY_*`, `MAIL_*`, `CLIENT_URL`, `NEXT_PUBLIC_API_URL`.

---

## 🔌 API Overview

Base: `/api/v1`

| Group | Endpoints |
| --- | --- |
| Auth | `POST /auth/login`, `/auth/refresh`, `/auth/otp/request`, `/auth/otp/verify`, `/auth/change-password`, `/auth/logout` |
| Application | `POST /application/apply`, `GET /application/status` |
| Courses | `GET /courses`, `/courses/:id`, `POST/PUT/DELETE /courses` (admin/faculty) |
| Quiz | `GET /quiz`, `/quiz/leaderboard`, `POST /quiz/submit`, `POST /quiz` (admin) |
| Attendance | `POST /attendance/mark`, `GET /attendance/me`, `/report`, `/admin` |
| Projects | `GET /projects`, `/:id`, `POST/DELETE` (admin) |
| Notifications | `GET /notifications`, `/announcements`, `POST /send` (admin) |
| Upload | `POST /upload` (auth, multipart) |
| Admin | `/admin/stats`, `/admin/applications`, `/admin/students`, `/admin/application/review` |
| Student | `/student/me`, `/student/dashboard`, `/student/achievements` |

Full spec: **`server/docs/openapi.yaml`**.

---

## 🧪 Application Flow

1. Student submits the multi-step **Apply** form → `PENDING` in MySQL `ApplicationForm`.
2. Admin reviews documents in the **Admin Dashboard** → Approve / Reject.
3. On approval: system generates **Student ID** + **username**, creates the `User`, sends login
   credentials by email, and forces a password change on first login.
4. Student logs in → redirected to the **Student Dashboard**.

**Admin login** uses predefined-emails + OTP (no password). Set `ADMIN_EMAILS` (comma-separated) in
`server/.env`; the admin requests an OTP (`POST /auth/admin/otp/request`), receives it by email, and
verifies (`POST /auth/admin/otp/verify`) to receive admin-scoped tokens. An admin account is auto-created
on first successful OTP verification.

---

## 🛡️ Security

JWT auth + refresh-token rotation, OTP login, bcrypt hashing, RBAC, Helmet, CORS, rate limiting,
Zod validation, Prisma (NoSQL/SQL injection safe), refresh-token revocation, audit-ready logging.
Quiz anti-cheat: fullscreen prompt, tab-switch monitoring hooks (client) and server-side audit.
Screenshots/screen-recording cannot be fully prevented in browsers — best-effort only.

## ⚡ Performance (100+ concurrent)

Lazy loading, code splitting, image optimization, API pagination, Redis-ready rate limiting/cache,
compression, DB indexing, lean JSON responses. Swap in-memory rate limiter for Redis in prod.

---

## 📦 Scripts

```bash
npm run dev:client      # front-end dev
npm run dev:server      # back-end dev
npm run build           # build both
npm run lint            # lint both
npm run typecheck       # typecheck both
npm run docker:up       # docker-compose up
```

---

## 🌐 Deployment

- **Frontend → Vercel**: import repo, root dir `client`, build `next build`, set
  `NEXT_PUBLIC_API_URL`. Config in `vercel.json`.
- **Backend → Render**: blueprint `render.yaml` (Docker). Set env secrets in dashboard.
- Set `NODE_ENV=production`, strong `JWT_*`, real `DATABASE_URL` / `MYSQL_URL`.

---

## 🧭 Roadmap / Extend

AI chatbot, course recommendation, resume analyzer, roadmap generator, AI quiz/interviewer/code
reviewer, doubt solver, PWA/offline, community forum, live classes, coding playground/compiler,
GitHub/LinkedIn integration, full admin CRUD for every entity, WebSocket real-time notifications.

---

## 📄 License

MIT © I AM CODER
