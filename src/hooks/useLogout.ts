'use client'

import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useAuthStore from '@/store/authStore';

export const useLogout = ({ onErrorCallback }) => {
  const [signOut, loading, error] = useSignOut(auth);
  // @ts-ignore 'state' needs a type
  const logoutUser = useAuthStore((state) => state.logout);
  const canUseLocalStorage = typeof window !== 'undefined';

  const handleLogout = async () => {
    try {
      await signOut();
      canUseLocalStorage && localStorage.removeItem('antsigarm_user');
      logoutUser();
    } catch (error) {
      onErrorCallback(error.message);
    }
  };

  return {
    isLoggingOut: loading,
    handleLogout,
    error,
  };
};
