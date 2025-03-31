'use client';

import { useSignOut } from 'react-firebase-hooks/auth';

import useAuthStore from '@/store/authStore';

import { auth } from '../firebase/firebase';
import { removeFromLocalStorage } from '@/utils';

export const useLogout = (onErrorCallback) => {
  const [signOut, loading, error] = useSignOut(auth);
  // @ts-ignore 'state' needs a type
  const logoutUser = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await signOut();
      removeFromLocalStorage('antsigarm_user');
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
