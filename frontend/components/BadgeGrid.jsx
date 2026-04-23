export default function BadgeGrid({ badges = [] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {badges.map((b) => (
        <div key={b._id} className="card text-center">
          <div className="text-2xl">{b.icon}</div>
          <p className="text-sm mt-2">{b.name}</p>
        </div>
      ))}
      {!badges.length && <div className="text-slate-400">No badges yet. Keep grinding!</div>}
    </div>
  );
}
