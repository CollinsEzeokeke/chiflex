// /components/SignOutButton.tsx
// Purpose: Provides a button to sign out the user

"use client";


import { signOut } from 'next-auth/react'; 

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
    >
      Sign out
    </button>
  );
}