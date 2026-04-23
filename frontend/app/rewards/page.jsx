'use client';

import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import RewardModal from '../../components/RewardModal';
import api from '../../lib/api';

export default function RewardsPage() {
  const [rewards, setRewards] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => { api.get('/rewards').then((res) => setRewards(res.data)).catch(() => null); }, []);

  const claim = async (id) => {
    const { data } = await api.post(`/rewards/${id}/claim`);
    toast.success(data.message);
    setSelected(null);
  };

  return (
    <div className="space-y-4">
      <Toaster />
      <h1 className="text-2xl font-bold">Rewards Center</h1>
      <div className="grid md:grid-cols-2 gap-3">
        {rewards.map((reward) => (
          <button key={reward._id} className="card text-left" onClick={() => setSelected(reward)}>
            <p className="font-semibold">{reward.name}</p>
            <p className="text-sm text-slate-300">{reward.description}</p>
            <p className="text-neon mt-2">{reward.cost} XP</p>
          </button>
        ))}
      </div>
      <RewardModal reward={selected} onClose={() => setSelected(null)} onClaim={claim} />
    </div>
  );
}
