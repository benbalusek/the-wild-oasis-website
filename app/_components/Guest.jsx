"use client";

import { useAuth } from "@/app/_contexts/AuthContext";
import Link from "next/link";

export default function User() {
  const session = useAuth();

  return (
    <>
      {session?.user?.image ? (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors flex items-center gap-4"
        >
          <img
            className="h-8 rounded-full hidden md:block"
            src={session.user.image}
            alt={session.user.name}
            referrerPolicy="no-referrer"
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors"
        >
          Guest area
        </Link>
      )}
    </>
  );
}
