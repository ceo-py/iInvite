"use client";

import React from "react";
import { ModeToggle } from "@/components/theme-mode-toggle";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();
  // console.log(session);
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex gap-5">
        <img src="/logo.png" alt="Logo" className="h-6 mr-3" />
        <Link
          className="self-center text-xl font-semibold whitespace-nowrap"
          href="/"
        >
          iInvite
        </Link>
        <Link
          className="self-center text-xl font-semibold whitespace-nowrap"
          href="/users"
        >
          Users
        </Link>
      </div>

      <div className="flex items-center gap-5">
        {!session?.data ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signIn("google")}
          >
            Log In
          </button>
        ) : (
          <div className="flex gap-2">
            <span>{session.data.user.name}</span>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          </div>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}
