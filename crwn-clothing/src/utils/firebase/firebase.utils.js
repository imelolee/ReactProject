import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASdWFBC8T5rGoLLwbrTnk4tehG8CRnXN0",
  authDomain: "crwn-clothing-c987c.firebaseapp.com",
  projectId: "crwn-clothing-c987c",
  storageBucket: "crwn-clothing-c987c.appspot.com",
  messagingSenderId: "648434092174",
  appId: "1:648434092174:web:c3fbc0150f1eb4bd35e1df",
  measurementId: "G-5XQY117WSJ",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log("userSnapshot", userSnapshot.exists())}
