import 'dotenv/config';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Badge from '../src/models/Badge.js';
import Reward from '../src/models/Reward.js';
import Task from '../src/models/Task.js';
import User from '../src/models/User.js';

await mongoose.connect(process.env.MONGODB_URI);

await Promise.all([Badge.deleteMany({}), Reward.deleteMany({}), Task.deleteMany({}), User.deleteMany({})]);

const badges = await Badge.insertMany([
  { name: 'Bronze Grinder', icon: '🥉', criteria: 'points', threshold: 100 },
  { name: 'Consistency King', icon: '🔥', criteria: 'streak', threshold: 5 },
  { name: 'Task Tactician', icon: '✅', criteria: 'tasks', threshold: 10 }
]);

const pass = await bcrypt.hash('password123', 10);

const users = await User.insertMany([
  { username: 'Nova', email: 'nova@example.com', password: pass, points: 280, level: 3, streak: 4, badges: [badges[0]._id] },
  { username: 'Blaze', email: 'blaze@example.com', password: pass, points: 430, level: 3, streak: 6, badges: [badges[0]._id, badges[1]._id] },
  { username: 'Echo', email: 'echo@example.com', password: pass, points: 150, level: 2, streak: 2 }
]);

await Task.insertMany([
  { title: 'Morning workout', type: 'daily', points: 20, userId: users[0]._id },
  { title: 'Read for 30 mins', type: 'daily', points: 10, userId: users[1]._id },
  { title: 'Complete side project ticket', type: 'weekly', points: 40, userId: users[2]._id }
]);

await Reward.insertMany([
  { name: 'Mystery Loot Box', description: 'A mock reward chest', cost: 120, type: 'bonus' },
  { name: 'Double XP Boost', description: 'Doubles XP for the next task (mock)', cost: 200, type: 'redeem' }
]);

console.log('Seed completed. Demo login: nova@example.com / password123');
await mongoose.connection.close();
