'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import LeaderboardPodium from '../../components/LeaderboardPodium';
import api from '../../lib/api';
import AuthGuard from '../../components/AuthGuard';

export default function LeaderboardPage() {
  const [users, setUsers] = useState([]);

  const fetchLeaderboard = () => api.get('/leaderboard?limit=20').then((res) => setUsers(res.data.users));

  useEffect(() => {
    fetchLeaderboard().catch(() => null);
    const socket = io(process.env.NEXT_PUBLIC_API_URL);
    socket.on('leaderboard:refresh', fetchLeaderboard);
    return () => socket.disconnect();
  }, []);

  return (
    <AuthGuard>
      <div className="space-y-4">
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      <LeaderboardPodium users={users} />
      <div className="card">
        <ul className="space-y-2">
          {users.map((u, idx) => (
            <li key={u._id} className="flex justify-between text-sm">
              <span>#{idx + 1} {u.username}</span>
              <span className="text-neon">{u.points} XP</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </AuthGuard>
  );
}
