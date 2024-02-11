// Auth is imported from local file where firebase app is initialized and authentication service is exported
import { auth } from "../config/firebase";
// firebase authentication for creating a new user account with email and password
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signUpFunc = async (email, password) => {
  // add something that checks email isn't signed up already?
  // add something that checks no one is logged in currently
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created and signed in");
  } catch (err) {
    // add functionality to display message
    // if error (email in use or password to weak), and exception is thrown
    // if error it won't be caught or displayed to user
    console.error("Error signing up: ", err);
  }
};

export const loginFunc = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("Logged in user: ", userCredential.user);
  } catch (err) {
    // add functionality to display message
    console.error("Error logging in: ", err);
  }
};

export const logoutFunc = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (err) {
    // add functionality to display message
    console.error("Error signing out: ", err);
  }
};

// export default { signUp, login, logout };
