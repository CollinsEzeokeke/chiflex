import { redirect } from 'next/navigation'
import { authClient } from '@/lib/auth-Client'

export default async function DashboardLayout({ children }: {children: React.ReactNode}) {
  const session = await authClient.getSession()
  
  if (!session) {
    redirect('/sign-in')
  }
  
  return <div>{children}</div>
}