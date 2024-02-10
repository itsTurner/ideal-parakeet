// useState is a React Hook to manage component state
import { useState } from "react";
// Auth is imported from local file where firebase app is initialized and authentication service is exported
import { auth } from "../config/firebase";
// firebase authentication for creating a new user account with email and password
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

// define component Auth that uses the useState hook to manage email and password inputs
export const Auth = () => {
  // declare two pieces of state initialized with empty strings
  // these states are updated whenever the user types into the corresponding input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // following line can be to see on the console (inspect) if user is logged in
  // ?. is optional chaining which avoids throwing an error if auth or auth.current user is null or undefined
  if (auth?.currentUser?.email) {
    console.log(auth.currentUser.uid, auth.currentUser.email);
  } else {
    console.log("No user logged in");
  }

  // asynchronous function that creates a new user account in firebase authentication (w/error handling)
  // calls createuser... with the auth firebase instance and the current values of email and password state
  const signUp = async () => {
    // error handling not implemented.
    // if account creation (/login?) is successful,firebase automatically signs in the user with the new account
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      // if error (email in use or password to weak), and exception is thrown
      // if error it won't be caught or displayed to user
      console.error(err);
    }
  };

  const login = async () => {
    // error handling not implemented.
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log("Logged in user: ", user);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    // error handling not implemented.
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  // rendering. component renders two input fields and a button
  // input fields update email and pass state on every change by calling setEmail and setPAssword
  return (
    <div>
      <input
        placeholder="email..."
        // onChange is a React prop that allows you to listen for changes to the input's value
        // Whenever the user types something into the input field, the onChange event is triggered
        // arrow function event handler for the onChange event
        // e is the event object passed to the event handler that contains info about the event
        // e.target property refers to teh element that triggered the event (<input>)
        // e.target.value accesses the current falue of the input element. as the user types this value changes
        // setEmail is a setter function provided by the useState hook that sets the email state to the input field value
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="pass..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}> Login</button>

      <button onClick={logout}> Logout </button>

      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};
