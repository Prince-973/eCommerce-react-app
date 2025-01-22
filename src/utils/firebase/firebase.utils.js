import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyADiFja_ICamVCBdB3G1v5EOTSgMPdGO3k",
  authDomain: "crwn-cloathing-db-cf4e7.firebaseapp.com",
  projectId: "crwn-cloathing-db-cf4e7",
  storageBucket: "crwn-cloathing-db-cf4e7.firebasestorage.app",
  messagingSenderId: "526830082451",
  appId: "1:526830082451:web:f09aba172b21a24caff066",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const craeteUserDocumnetFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user document", error);
    }
  }
  return userDocRef;
};
