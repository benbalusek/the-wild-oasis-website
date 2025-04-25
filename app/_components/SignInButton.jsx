"use client";

import { signInAction } from "@/app/_lib/actions";
import { useState } from "react";
import toast from "react-hot-toast";
import SpinnerMini from "./SpinnerMini";

function SignInButton() {
  const [isSigningIn, setIsSigningIn] = useState(false);

  async function handleSignIn() {
    try {
      setIsSigningIn(true);
      toast.loading("Redirecting to Google...");
      await signInAction();
    } catch (err) {
      console.error("Unable to sign in", err);
      toast.error("Something went wrong signing in. Please try again.");
    } finally {
      setIsSigningIn(false);
    }
  }

  return (
    <button
      onClick={handleSignIn}
      disabled={isSigningIn}
      className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium cursor-pointer"
    >
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
      />
      <span>
        {isSigningIn ? <SpinnerMini /> : <span>Continue with Google</span>}
      </span>
    </button>
  );
}

export default SignInButton;
