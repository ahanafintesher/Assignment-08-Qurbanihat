"use client";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
const handleGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
const SocialLogin = () => {
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-green-800 hover:bg-green-900 text-white border-none"
      >
        <FaGoogle className="text-xl" />
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
