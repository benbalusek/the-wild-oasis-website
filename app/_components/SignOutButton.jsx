import SpinnerMini from "@/app/_components/SpinnerMini";
import { useAuth } from "@/app/_contexts/AuthContext";
import { signOutAction } from "@/app/_lib/actions";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

function SignOutButton() {
  const { resetAuthState } = useAuth();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleSignOut() {
    try {
      setIsSigningOut(true);
      await signOutAction();
      resetAuthState();
      toast.success("Signed out successfully");
      router.push("/");
    } catch (err) {
      console.error("Unable to sign out", err);
      toast.error("Something went wrong signing out. Please try again.");
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <button
      onClick={handleSignOut}
      disabled={isSigningOut}
      className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full"
    >
      <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-primary-600" />
      <span>{isSigningOut ? <SpinnerMini /> : "Sign out"}</span>
    </button>
  );
}

export default SignOutButton;
