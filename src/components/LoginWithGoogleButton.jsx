import React from "react";
import { loginWithGoogle } from "../utils/authHelpers";

export default function LoginWithGoogleButton() {
  const handleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      console.log("Logged in:", user);
    } catch (err) {
      console.error("Google Login Failed:", err.message);
    }
  };

  return <button onClick={handleLogin}>Login with Google</button>;
}
