// app/auth/verify-request/page.tsx

import Link from 'next/link';

export default function VerifyRequest() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Check your email</h1>
      <p className="text-xl mb-4">A sign in link has been sent to your email address.</p>
      <p className="mb-4">Please check your email and click on the link to verify your account.</p>
      <p className="text-sm text-gray-500">
        If you don&apos;t see the email, check other places it might be, like your junk, spam, social, or other folders.
      </p>
      <Link href="/auth/login" className="mt-8 text-blue-500 hover:text-blue-600">
        Return to sign in
      </Link>
    </div>
  );
}