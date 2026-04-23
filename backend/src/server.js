import 'dotenv/config';
import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import { connectDB } from './config/db.js';

const port = process.env.PORT || 5000;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: process.env.CLIENT_URL }
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

io.on('connection', (socket) => {
  socket.emit('connected', { message: 'Connected to leaderboard updates' });
});

connectDB().then(() => {
  httpServer.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
  });
});
