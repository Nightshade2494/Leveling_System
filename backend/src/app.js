import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import leaderboardRoutes from './routes/leaderboardRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import rewardRoutes from './routes/rewardRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import { authMiddleware } from './middleware/auth.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/auth', authRoutes);
app.use('/tasks', authMiddleware, taskRoutes);
app.use('/leaderboard', authMiddleware, leaderboardRoutes);
app.use('/rewards', authMiddleware, rewardRoutes);
app.use('/profile', authMiddleware, profileRoutes);

app.use(errorHandler);

export default app;
