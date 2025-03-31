import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { Center, Image, Text } from '@chakra-ui/react';
import { auth, firestore } from '@/firebase/firebase';
import useAuthStore from '@/store/authStore';
import { saveToLocalStorage } from '@/utils';

import { toaster } from '../toaster';
import { setDoc, doc, getDoc } from 'firebase/firestore';

const onErrorCallback = (errMsg) => {
  toaster.create({
    description: errMsg,
    type: 'error',
  });
};

const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  // @ts-ignore 'state' needs a type
  const loginUser = useAuthStore((state) => state.login);
  const canUseLocalStorage = typeof window !== 'undefined';

  const handleGoogleAuth = async () => {
    try {
      const u = await signInWithGoogle();
      if (!u && error) {
        onErrorCallback(error.message);
        return;
      }

      if (!!u) {
        const userRef = doc(firestore, 'users', u.user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const userDoc = userSnap.data();
          saveToLocalStorage('antsigarm_user', userDoc);
          loginUser(userDoc);
        } else if (!!u.user.email) {
          const userDoc = {
            uid: u.user.uid,
            email: u.user.email,
            username: u.user.email.split('@')[0],
            fullName: u.user.displayName,
            bio: '',
            profilePicUrl: u.user.photoURL,
            followers: [],
            following: [],
            posts: [],
            createdAt: Date.now(),
          };
          await setDoc(doc(firestore, 'users', u.user.uid), userDoc);
          saveToLocalStorage('antsigarm_user', userDoc);
          loginUser(userDoc);
        }
      }
    } catch (error) {
      onErrorCallback(error.message);
    }
  };

  return (
    <Center cursor='pointer' onClick={handleGoogleAuth}>
      <Image src='/google.png' w={5} alt='Google logo' />
      <Text mx='2'>{prefix} with Google</Text>
    </Center>
  );
};

export default GoogleAuth;
