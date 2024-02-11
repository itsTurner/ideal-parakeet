import { auth } from "../../config/firebase";
import { signUpFunc } from "./authFunctions";
import { useState } from "react";

export const SignUp = () => {
  /*
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });
    */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="pass..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => signUpFunc(email, password)}>Sign Up</button>
    </div>
  );
};
