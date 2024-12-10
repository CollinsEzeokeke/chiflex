import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import UserProfile, { UserRole, UserStatus } from './dashboard/UserProfile';
import NotificationsBar from './dashboard/NotificationsBar';
import NavigationMenu from './dashboard/NavigationMenu';

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const [notifications] = useState([
    { id: 1, message: "Your order #123 is out for delivery", isNew: true },
    { id: 2, message: "New items in your wishlist are on sale", isNew: true },
  ]);
  
  // Mock user data - in real app, this would come from auth context
  const userRole: UserRole = 'admin';
  const userStatus: UserStatus = 'verified';
  const userAvatar = "https://github.com/shadcn.png";

  const menuItems = {
    basic: [
      { title: 'Overview', icon: Home, path: '/dashboard' },
      { title: 'Purchase History', icon: ShoppingBag, path: '/dashboard/purchases' },
      { title: 'Rewards', icon: Award, path: '/dashboard/rewards' },
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

  const currentMenuItems = menuItems[userRole];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <div className="h-full flex flex-col bg-background">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Menu</h2>
              </div>
              <div className="flex-1 overflow-auto">
                {currentMenuItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                    }}
                    className="w-full flex items-center px-4 py-2 hover:bg-accent"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </button>
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
              <h1 className="text-xl font-bold text-primary">E-Commerce</h1>
              
              {/* Desktop Navigation Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {currentMenuItems.map((item) => (
                    <DropdownMenuItem
                      key={item.path}
                      onClick={() => navigate(item.path)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <UserProfile 
              userStatus={userStatus}
              userRole={userRole}
              userAvatar={userAvatar}
            />

            <NotificationsBar notifications={notifications} />

            <NavigationMenu menuItems={currentMenuItems} userRole={userRole} />

            <div className="mt-auto p-4">
              <button
                onClick={() => navigate('/login')}
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Logout</span>
              </button>
            </div>
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  );
};

export default DashboardSidebar;