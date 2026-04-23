'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthGuard({ children }) {
  const [allowed, setAllowed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
      return;
    }

    setAllowed(true);
  }, [router]);

  if (!allowed) {
    return <p className="text-slate-400">Checking session...</p>;
  }

  return children;
}
