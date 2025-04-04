import { getFromLocalStorage } from '@/utils';
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: getFromLocalStorage('antsigarm_user'),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
