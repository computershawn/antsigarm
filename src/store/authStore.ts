'use client'

import { create } from 'zustand';

const useAuthStore = create((set) => {
  const canUseLocalStorage = typeof window !== 'undefined';
  const u =
    canUseLocalStorage
      ? JSON.parse(localStorage.getItem('antsigarm_user') as string)
      : null;
  return {
    user: u,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user) => set({ user }),
  };
});

export default useAuthStore;
