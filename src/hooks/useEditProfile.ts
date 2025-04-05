import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

import { firestore, storage } from '@/firebase/firebase';
import useAuthStore from '@/store/authStore';
import useUserProfileStore from '@/store/userProfileStore';
import { saveToLocalStorage } from '@/utils';

const useEditProfile = (onErrorCallback) => {
  const [isUpdating, setIsUpdating] = useState(false);

  // @ts-ignore
  const authUser = useAuthStore((state) => state.user);
  // @ts-ignore
  const setAuthUser = useAuthStore((state) => state.setUser);
  // @ts-ignore
  const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) {
      return;
    }
    setIsUpdating(true);

    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, 'users', authUser.uid);
    let uri = '';
    try {
      if (!!selectedFile) {
        await uploadString(storageRef, selectedFile, 'data_url');
        uri = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }
      const updatedUser = {
        ...authUser,
        fullName: inputs.fullName || authUser.fullName,
        bio: inputs.bio || authUser.bio,
        profilePicUrl: uri || authUser.profilePicUrl,
      };

      await updateDoc(userDocRef, updatedUser);
      saveToLocalStorage('antsigarm_user', JSON.stringify(updatedUser));
      setAuthUser(updatedUser);
      setUserProfile(updatedUser);
    } catch (e) {
      onErrorCallback(e.message);
    }
  };

  return { editProfile, isUpdating };
};

export default useEditProfile;
