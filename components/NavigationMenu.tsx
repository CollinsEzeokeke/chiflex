"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { UserRole } from './UserProfile';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  title: string;
  icon: LucideIcon;
  path: string;
}

interface NavigationMenuProps {
  menuItems: MenuItem[];
  userRole: UserRole;
}

const NavigationMenu = ({ menuItems, userRole }: NavigationMenuProps) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:block">
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <Link href={item.path} passHref>
                  <SidebarMenuButton
                    className={cn(
                      'w-full',
                      pathname === item.path ? 'bg-primary/10 text-primary' : ''
                    )}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  );
};

export default NavigationMenu;