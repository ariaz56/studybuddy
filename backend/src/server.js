import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'studybuddy-api', timestamp: new Date().toISOString() });
});

app.get('/api/dashboard/summary', (_req, res) => {
  res.json({
    success: true,
    data: {
      materialsCount: 0,
      tasksToday: 0,
      completedTasks: 0,
      weeklyProgress: 0
    }
  });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

async function start() {
  if (process.env.MONGODB_URI) {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } else {
    console.warn('MONGODB_URI is not configured; starting without a database connection');
  }

  app.listen(port, () => console.log(`StudyBuddy API listening on port ${port}`));
}

start().catch((error) => {
  console.error('Unable to start StudyBuddy API', error);
  process.exit(1);
});
