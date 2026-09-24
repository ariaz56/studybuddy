# StudyBuddy

StudyBuddy is an AI-powered student learning management system built around the cycle:

**Store → Understand → Practice → Track → Improve**

## Foundation stack

- Frontend: React, Vite, React Router, Axios, Tailwind CSS
- Backend: Node.js, Express, Mongoose
- Authentication: JWT and bcrypt
- Database: MongoDB Atlas
- Storage and AI integrations: Cloudinary and an OpenAI-compatible API

## Local setup

```bash
npm install
npm run install:all
cp .env.example .env
npm run dev
```

The frontend runs on `http://localhost:5173` and the API runs on `http://localhost:5000`.

See `backend/.env.example` for required server secrets. Never commit real credentials.

## Current foundation

The initial foundation includes a Vite React shell, Express health endpoint, environment configuration, and a starter dashboard route. Authentication, materials, planner, quizzes, progress, and AI modules are designed to be added incrementally behind protected API routes.
