import { redirect } from 'next/navigation'
import { authClient } from '@/lib/auth-Client'

export default async function DashboardLayout({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  return (
    <div>
      {children}
    </div>
  )
}