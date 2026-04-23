'use client';

import { useEffect, useState } from 'react';
import BadgeGrid from '../../components/BadgeGrid';
import api from '../../lib/api';
import AuthGuard from '../../components/AuthGuard';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => { api.get('/profile').then((res) => setProfile(res.data)).catch(() => null); }, []);

  return (
    <AuthGuard>
      <div className="space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="card">
        <p className="text-4xl">🧑‍🚀</p>
        <p className="font-semibold mt-2">{profile?.user?.username || 'Player One'}</p>
        <p className="text-sm text-slate-400">Level {profile?.user?.level || 1} • {profile?.user?.points || 0} XP</p>
      </div>
      <div>
        <p className="font-semibold mb-2">Achievements</p>
        <BadgeGrid badges={profile?.user?.badges} />
      </div>
      <div className="card">
        <p className="font-semibold mb-2">Task History</p>
        <ul className="space-y-2 text-sm text-slate-300">
          {profile?.history?.map((h) => <li key={h._id}>{h.title} • {new Date(h.completedAt).toLocaleDateString()}</li>)}
        </ul>
      </div>
      </div>
    </AuthGuard>
  );
}
