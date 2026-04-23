'use client';

export default function RewardModal({ reward, onClose, onClaim }) {
  if (!reward) return null;
  return (
    <div className="fixed inset-0 bg-black/50 grid place-items-center z-30 p-4">
      <div className="card w-full max-w-sm">
        <h3 className="text-lg font-semibold">{reward.name}</h3>
        <p className="text-sm text-slate-300 mt-2">{reward.description}</p>
        <p className="text-neon mt-4">Cost: {reward.cost} XP</p>
        <div className="mt-5 flex gap-2 justify-end">
          <button className="px-3 py-2 rounded bg-slate-700" onClick={onClose}>Cancel</button>
          <button className="px-3 py-2 rounded bg-neon/20" onClick={() => onClaim(reward._id)}>Claim</button>
        </div>
      </div>
    </div>
  );
}
