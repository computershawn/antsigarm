import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { firestore } from '@/firebase/firebase';
import useUserProfileStore from '@/store/userProfileStore';

const useGetUserProfileByUsername = (username, onErrorCallback) => {
  const [isLoading, setIsLoading] = useState(true);
  // @ts-ignore
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        setIsLoading(true);
        const q = query(
          collection(firestore, 'users'),
          where('username', '==', username)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          return setUserProfile(null);
        }
        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
      } catch (error) {
        onErrorCallback(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [onErrorCallback, setUserProfile, username]);

  return {
    userProfile,
    isLoading,
  };
};

export default useGetUserProfileByUsername;
