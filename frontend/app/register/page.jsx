'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import api from '../../lib/api';

export default function RegisterPage() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post('/auth/register', form);
      toast.success('Account created! Please sign in.');
      router.push('/login');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto card space-y-3 mt-12">
      <Toaster />
      <h1 className="text-xl font-bold">Register</h1>
      <input className="w-full bg-slate-900 p-2 rounded" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input className="w-full bg-slate-900 p-2 rounded" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full bg-slate-900 p-2 rounded" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button disabled={loading} className="w-full py-2 rounded bg-neon/20 disabled:opacity-60">{loading ? 'Creating...' : 'Create account'}</button>
    </form>
  );
}
