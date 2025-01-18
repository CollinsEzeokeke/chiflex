'use client';

import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/sidebar";
import Overview from "@/components/overview";
import RecentOrders from "@/components/recentOrders";
import ActivityFeed from "@/components/activityFeed";
import UserRank from "@/components/userRank";
import Stats from "@/components/stats";
import { useStoreNav } from "@/hooks/store/store";
import DetailedOrders from "./allOrders";
import WishlistPage from "./wishlist";
import ProductsPage from "./productsPage";

export default function Dashboard() {
  const { navigation } = useStoreNav()
  const ContentRender = () => {
    switch (navigation) {
      case 'overview': {
        return (
          <>
            <main className="flex-1 p-6 lg:p-8 pt-6 overflow-y-auto">
              <div className="max-w-7xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <Stats />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Overview />
                  <UserRank />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <RecentOrders />
                  </div>
                  <ActivityFeed />
                </div>
              </div>
            </main>
          </>
        )
      }

      case 'orders' : {
        return(
          <>
          <DetailedOrders />
          </>
        )
      }

      case 'wishlist' : {
        return(
          <>
          <WishlistPage />
          </>
        )
      }
      case 'products' : {
        return(
          <>
          <ProductsPage />
          </>
        )
      }

      // wehre i stoppped

      default: {
        return (
          <main className="flex-1 p-6 lg:p-8 pt-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-6">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <Stats />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Overview />
                <UserRank />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <RecentOrders />
                </div>
                <ActivityFeed />
              </div>
            </div>
          </main>
        )
      }
    }
  }
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <ContentRender/>
      </div>
    </SidebarProvider>
  );
}
