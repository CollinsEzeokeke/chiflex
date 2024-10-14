// /app/signup/page.tsx
// Purpose: Renders the sign-up page with fields for new user registration

import { SignUpForm } from '@/components/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}