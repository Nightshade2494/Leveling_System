'use client';

import { create } from 'zustand';
import api from '../lib/api';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  setAuth: (token, user) => {
    if (typeof window !== 'undefined') localStorage.setItem('token', token);
    set({ token, user });
  },
  logout: () => {
    if (typeof window !== 'undefined') localStorage.removeItem('token');
    set({ token: null, user: null });
  },
  fetchProfile: async () => {
    const { data } = await api.get('/profile');
    set({ user: data.user });
    return data;
  }
}));
