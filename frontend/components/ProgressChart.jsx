'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function ProgressChart({ points }) {
  const data = [
    { name: 'Mon', xp: Math.max(0, points - 80) },
    { name: 'Tue', xp: Math.max(0, points - 50) },
    { name: 'Wed', xp: Math.max(0, points - 35) },
    { name: 'Thu', xp: Math.max(0, points - 20) },
    { name: 'Fri', xp: points }
  ];

  return (
    <div className="card h-64">
      <p className="mb-2 font-semibold">XP Progress</p>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="xp" stroke="#22d3ee" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
