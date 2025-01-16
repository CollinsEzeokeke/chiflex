'use client'

import BasicDashboard from "@/components/BasicDashboard";
import Header from "@/components/landingPageComponent/header";
import DashboardLayout from "./layout";

export default function Dashboard() {
  return (
    <>
    <Header />
    <DashboardLayout>
      <BasicDashboard />
    </DashboardLayout>
    {/* <>HELLO WORLD THIS IS THE DASHBOARD</> */}
    </>
  );
}
