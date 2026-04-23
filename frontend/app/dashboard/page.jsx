'use client';

import { useEffect, useState } from 'react';
import ProgressChart from '../../components/ProgressChart';
import api from '../../lib/api';
import { useAuthStore } from '../../store/useAuthStore';

export default function DashboardPage() {
  const { user, fetchProfile } = useAuthStore();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchProfile().catch(() => null);
    api.get('/tasks').then((res) => setTasks(res.data.slice(0, 4))).catch(() => null);
  }, [fetchProfile]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="card"><p>Points</p><p className="text-neon text-2xl">{user?.points ?? 0}</p></div>
        <div className="card"><p>Level</p><p className="text-pink text-2xl">{user?.level ?? 1}</p></div>
        <div className="card"><p>Streak</p><p className="text-amber-400 text-2xl">🔥 {user?.streak ?? 0}</p></div>
      </div>
      <ProgressChart points={user?.points ?? 0} />
      <div className="card">
        <p className="font-semibold mb-2">Daily Tasks Preview</p>
        <ul className="space-y-2 text-sm text-slate-300">
          {tasks.map((t) => <li key={t._id}>• {t.title}</li>)}
        </ul>
      </div>
    </div>
  );
}
