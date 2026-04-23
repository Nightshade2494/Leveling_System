export default function LeaderboardPodium({ users }) {
  const topThree = users.slice(0, 3);
  return (
    <div className="grid grid-cols-3 gap-3">
      {topThree.map((u, idx) => (
        <div key={u._id || u.username} className="card text-center">
          <p className="text-xs text-slate-400">#{idx + 1}</p>
          <p className="font-semibold">{u.username}</p>
          <p className="text-neon">{u.points} XP</p>
        </div>
      ))}
    </div>
  );
}
