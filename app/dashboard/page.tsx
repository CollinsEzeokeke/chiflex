// /app/dashboard/page.tsx

import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { SignOutButton } from '@/components/SignOutButton';

export default async function DashboardPage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Welcome to your Dashboard, {session.user.name}</h1>
      <p>Your email: {session.user.email}</p>
      <p>Your role: {session.user.role}</p>
      <SignOutButton />
    </div>
  );
}