'use client';
// integrate dashboard render to be changed based off on what is clicked here or not 
import {
    Sidebar as SidebarContainer,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, ShoppingBag, Settings, User, Heart, Package, LucideIcon } from "lucide-react";
import NotificationBell from "./Notifications";
import { useStoreNav } from "@/hooks/store/store";

interface MenuItem {
    icon: LucideIcon | typeof NotificationBell;
    label: string;
    href: string;
    component?: boolean;
}

interface UserProfile {
    name: string;
    role: string;
}

const menuItems: MenuItem[] = [
    { icon: Home, label: "Overview", href: "overview" },
    { icon: ShoppingBag, label: "Orders", href: "orders" },
    {
        icon: NotificationBell,
        label: "Notifications",
        href: "/notifications",
        component: true,
    },
    { icon: Heart, label: "Wishlist", href: "wishlist" },
    { icon: Package, label: "Products", href: "products" },
    { icon: Settings, label: "Settings", href: "settings" },
];

const userProfile: UserProfile = {
    name: "John Doe",
    role: "Premium Member"
};

export default function Sidebar() {
    const {setNavigation} = useStoreNav()
    return (
        <SidebarContainer>
            <SidebarContent>
                <SidebarGroup>
                    <div className="p-4">
                        <div className="flex items-center gap-3">
                            <User className="h-8 w-8" />
                            <div>
                                <h3 className="font-semibold">{userProfile.name}</h3>
                                <p className="text-sm text-muted-foreground">{userProfile.role}</p>
                            </div>
                        </div>
                    </div>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.label}>
                                    <SidebarMenuButton asChild>
                                        {item.component ? (
                                            <button className="flex items-center gap-3 px-4 py-2" onClick={() => {setNavigation(item.label.toLocaleLowerCase())}}>
                                                <item.icon />
                                                <span>{item.label}</span>
                                            </button>
                                        ) : (
                                            <button className="flex items-center gap-3 px-4 py-2" onClick={() => {setNavigation(item.href) }}>
                                                <item.icon className="h-4 w-4 dark:bg-inherit" />
                                                <span>{item.label}</span>
                                            </button>
                                        )}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </SidebarContainer>
    );
}
