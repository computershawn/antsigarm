'use client';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '@/store/authStore';
import { saveToLocalStorage } from '@/utils';

export const useLogin = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // @ts-ignore 'state' needs a type
  const loginUser = useAuthStore((state) => state.login);

  const login = async (inputs, onErrorCallback) => {
    if (!inputs.email || !inputs.password) {
      console.log('Please fill all fields');
    }

    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!!userCred) {
        const docRef = doc(firestore, 'users', userCred.user.uid);
        const docSnap = await getDoc(docRef);
        saveToLocalStorage('antsigarm_user', docSnap.data());
        loginUser(docSnap.data());
      }
    } catch (error) {
      onErrorCallback(error.message);
    }
  };

  return {
    loading,
    error,
    login,
  };
};
