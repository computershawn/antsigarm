'use client';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import useAuthStore from '@/store/authStore';

export const useSignupWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // @ts-ignore 'state' needs a type
  const loginUser = useAuthStore((state) => state.login);

  const signUp = async (inputs, onErrorCallback) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      console.log('Please fill all fields');
    }

    const usersRef = collection(firestore, 'users');
    const q = query(usersRef, where('username', '==', inputs.username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      onErrorCallback('Username already exists');
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        onErrorCallback(error.message);

        return;
      }
      if (!!newUser) {
        const newUserDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: '',
          profilePicUrl: '',
          followers: [],
          following: [],
          posts: [],
          createdAt: new Date().toISOString(),
        };

        await setDoc(doc(firestore, 'users', newUser.user.uid), newUserDoc);
        const canUseLocalStorage = typeof window !== 'undefined';
        canUseLocalStorage &&
          localStorage.setItem('antsigarm_user', JSON.stringify(newUserDoc));
        loginUser(newUserDoc);
      }
    } catch (error) {
      onErrorCallback(error.message);
    }
  };

  return {
    loading,
    error,
    signUp,
  };
};
