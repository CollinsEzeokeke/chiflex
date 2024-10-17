// app/dashboard/layout.tsx

// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(auth);

  // if (!session) {
  //   redirect("/auth/signin");
  // }

  return <div>{children}</div>;
}
