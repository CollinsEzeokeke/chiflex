"use client"
import { Suspense, lazy } from 'react';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";
import {
  Home,
  ShoppingBag,
  Award,
  BarChart2,
  Users,
  Settings,
  LogOut,
  Package, 
  ChevronDown,
  Menu
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserProfile, { UserRole, UserStatus } from './UserProfile';
import NotificationsBar from './NotificationsBar';
import NavigationMenu from './NavigationMenu';
import PurchaseHistory from '@/components/purchaseHistory';
import BasicDashboard from '@/components/BasicDashboard';
import Header from './landingPageComponent/header';

type ComponentReference = {
    component: React.ComponentType;
    loading?: React.ComponentType;
  };

  type MenuItem = {
    title: string;
    icon: LucideIcon;
    path: string;
    component: ComponentReference;
  }

  type Company = {
    title: string;
    icon: LucideIcon;
    path: string;
  }

  type MenuItems = {
    basic: MenuItem[];
    company: Company[];
    admin: Company[];
  }

const DashboardSidebar = () => {
  const router = useRouter();
  // const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, message: "Your order #123 is out for delivery", isNew: true },
    { id: 2, message: "New items in your wishlist are on sale", isNew: true },
  ]);
  
//   const ContentWrapper = ({ path }: { path: string }) => {
//     const renderContent = () => {
//       switch (path) {
//         case '/dashboard':
//           return <BasicDashboard />;
//         case '/dashboard/purchases':
//           return <PurchaseHistory />;
//         // case '/dashboard/rewards':
//         //   return <Rewards />;
//         // case '/dashboard/company':
//         //   return <CompanyOverview />;
//         // case '/dashboard/products':
//         //   return <Products />;
//         // case '/dashboard/analytics':
//         //   return <Analytics />;
//         // case '/dashboard/users':
//         //   return <Users />;
//         // case '/dashboard/settings':
//         //   return <Settings />;
//         default:
//           return <div>Page not found</div>;
//       }

//       return (
//         <Suspense fallback={<div>Loading...</div>}>
//           {renderContent()}
//         </Suspense>
//       );
//     };
// }

  // Mock user data - in real app, this would come from auth context
  const userRole: UserRole = 'basic';
  const userStatus: UserStatus = 'verified';
  const userAvatar = "https://github.com/shadcn.png";

  const menuItems: MenuItems = {
    basic: [
        { 
            title: 'Overview', 
            icon: Home, 
            path: '/dashboard',
            component: { component: lazy(() => import('@/components/BasicDashboard')) }
          },
          { 
            title: 'Purchase History', 
            icon: ShoppingBag, 
            path: '/dashboard/purchases',
            component: { component: lazy(() => import('@/components/purchaseHistory')) }
          },
          { 
            title: 'Rewards', 
            icon: Award, 
            path: '/dashboard/rewards',
            component: { component: lazy(() => import('@/components/purchaseHistory')) }
          },
    ],
    company: [
      { title: 'Overview', icon: Home, path: '/dashboard/company' },
      { title: 'Products', icon: Package, path: '/dashboard/products' },
      { title: 'Analytics', icon: BarChart2, path: '/dashboard/analytics' },
    ],
    admin: [
      { title: 'Overview', icon: Home, path: '/dashboard/admin' },
      { title: 'Users', icon: Users, path: '/dashboard/users' },
      { title: 'Products', icon: Package, path: '/dashboard/products' },
      { title: 'Analytics', icon: BarChart2, path: '/dashboard/analytics' },
      { title: 'Settings', icon: Settings, path: '/dashboard/settings' },
    ],
  };

  // Type-safe way to access menu items
  const getCurrentMenuItems = (role: UserRole) => {
    const validRoles: Record<UserRole, keyof MenuItems> = {
      'admin': 'admin',
      'basic': 'basic',
      'company': 'company'
    };

    return menuItems[validRoles[role]] || menuItems.basic; // Fallback to basic if role is invalid
  };

  const currentMenuItems = getCurrentMenuItems(userRole);

  // const handleNavigation = (path: string) => {
  //   // setCurrentPath(path); // Add state for current path
  //   setIsOpen(false);
  // };

  const handleLogout = async () => {
    // Add your logout logic here
    router.push('/sign-in');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="hover:bg-accent transition-colors duration-300 ease-in-out">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0">
            <div className="h-full flex flex-col bg-background">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Menu</h2>
              </div>
              <div className="flex-1 overflow-auto">
                {currentMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="w-full flex items-center px-4 py-2 hover:bg-accent transition-colors duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span className="transform transition-transform duration-300 ease-in-out hover:translate-x-1">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar>
          <SidebarContent>
            <div className="p-4 flex items-center justify-between">
              {/* <h1 className="text-xl font-bold text-primary">E-Commerce</h1> */}
            </div>

            <UserProfile 
              userStatus={userStatus}
              userRole={userRole}
              userAvatar={userAvatar}
            />


            <NotificationsBar notifications={notifications} />

            <NavigationMenu menuItems={currentMenuItems} userRole={userRole} />

            <div className="mt-auto p-4">
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="flex items-center w-full text-gray-600 hover:text-primary transition-colors duration-300 ease-in-out"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Logout</span>
              </Button>
            </div>
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  );
};

export default DashboardSidebar;