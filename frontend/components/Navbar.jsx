'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['Dashboard', '/dashboard'],
  ['Tasks', '/tasks'],
  ['Leaderboard', '/leaderboard'],
  ['Rewards', '/rewards'],
  ['Profile', '/profile']
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-card/90 backdrop-blur border-t md:border-b md:border-t-0 border-slate-700 z-20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between gap-2 overflow-auto">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className={`px-3 py-2 rounded-lg text-sm ${pathname === href ? 'bg-neon/20 text-neon' : 'text-slate-300'}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
