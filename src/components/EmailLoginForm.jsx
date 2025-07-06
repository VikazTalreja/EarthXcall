import React, { useState } from "react";
import { loginWithEmail } from "../utils/authHelpers";

export default function EmailLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginWithEmail(email, password);
      console.log("Logged in:", user);
    } catch (err) {
      console.error("Login failed:", err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
