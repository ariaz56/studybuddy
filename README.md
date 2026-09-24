# StudyBuddy

StudyBuddy is a full-stack learning workspace for organizing study materials, tasks, quizzes, AI assistance, and progress.

## Repository layout

- `client/` — React + Vite frontend
- `server/` — Express + MongoDB backend

## Local setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

In another terminal:

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

The client runs on `http://localhost:5173` and the API runs on `http://localhost:5000`.

## Required services

Configure MongoDB Atlas, Cloudinary, JWT, and an AI provider in `server/.env`. Never commit real credentials.

## Development phases

1. Foundation and authentication
2. Materials, subjects, and file uploads
3. Tasks and planner
4. AI assistant and quiz generation
5. Progress analytics and production hardening
