'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import api from '../../lib/api';
import { useAuthStore } from '../../store/useAuthStore';

export default function LoginPage() {
  const [email, setEmail] = useState('nova@example.com');
  const [password, setPassword] = useState('password123');
  const setAuth = useAuthStore((s) => s.setAuth);
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/auth/login', { email, password });
    setAuth(data.token, data.user);
    router.push('/dashboard');
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto card space-y-3 mt-12">
      <h1 className="text-xl font-bold">Login</h1>
      <input className="w-full bg-slate-900 p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full bg-slate-900 p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      <button className="w-full py-2 rounded bg-neon/20">Sign in</button>
    </form>
  );
}
