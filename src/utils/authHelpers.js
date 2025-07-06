// src/utils/authHelpers.js
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "firebase/firestore";
import { auth, provider, db } from "../firebase";

// 🔽 Save user to Firestore if not exists
const saveUserToFirestore = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || user.name || "No Name",
      email: user.email,
      photoURL: user.photoURL || "",
      createdAt: serverTimestamp(),
      role: "user"
    });
  }
};

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  await saveUserToFirestore(result.user); // Save user to Firestore
  return result.user;
};

export const registerWithEmail = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await saveUserToFirestore(result.user);
  return result.user;
};

export const loginWithEmail = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  await saveUserToFirestore(result.user); // Optional: ensure saved
  return result.user;
};

export const logout = () => signOut(auth);
