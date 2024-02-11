import { auth } from "../config/firebase";
import { loginFunc } from "./authFunctions";
import { useState } from "react";

export const Login = () => {
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
      <button onClick={() => loginFunc(email, password)}>Sign Up</button>
    </div>
  );
};
