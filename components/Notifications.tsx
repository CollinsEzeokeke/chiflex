'use client';

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type NotificationType = 'order' | 'system' | 'payment';

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: NotificationType;
}

const notifications: NotificationItem[] = [
  {
    id: "1",
    title: "Order Shipped",
    message: "Your order #12345 has been shipped",
    time: "5 minutes ago",
    read: false,
    type: "order",
  },
  {
    id: "2",
    title: "Payment Successful",
    message: "Payment for order #12345 was successful",
    time: "1 hour ago",
    read: false,
    type: "payment",
  },
  {
    id: "3",
    title: "New Feature Available",
    message: "Check out our new tracking feature",
    time: "2 hours ago",
    read: true,
    type: "system",
  },
];

interface NotificationBellProps {
  className?: string;
}

export default function NotificationBell({ className }: NotificationBellProps) {
  const unreadCount = React.useMemo(() => 
    notifications.filter((n) => !n.read).length,
    []
  );

  return (
    <Sheet>
      <SheetTrigger className={cn("relative inline-flex items-center", className)}>
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <Badge
            className="absolute -top-2.5 -right-2.5 h-4 w-4 p-0 flex items-center justify-center bg-destructive text-destructive-foreground"
            variant="destructive"
          >
            {unreadCount}
          </Badge>
        )}
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[440px] p-0 bg-background border-l"
      >
        <div className="h-full flex flex-col">
          <SheetHeader className="p-6 border-b">
            <SheetTitle>Notifications</SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "p-4 rounded-lg border transition-colors",
                    !notification.read && "bg-muted/50 shadow-sm"
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <h4 className="font-semibold leading-none">
                        {notification.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {notification.message}
                      </p>
                    </div>
                    <time 
                      className="text-xs text-muted-foreground whitespace-nowrap"
                      dateTime={notification.time}
                    >
                      {notification.time}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}
