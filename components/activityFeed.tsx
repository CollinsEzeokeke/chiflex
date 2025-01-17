'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Package, Heart, Star, LucideIcon } from "lucide-react";

interface Activity {
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    icon: Package,
    title: "Order Delivered",
    description: "Your order #ORD001 has been delivered",
    time: "2 hours ago",
  },
  {
    icon: Star,
    title: "New Review",
    description: "You received a 5-star review",
    time: "5 hours ago",
  },
  {
    icon: Heart,
    title: "Item Available",
    description: "Wishlist item now in stock",
    time: "1 day ago",
  },
];

export default function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Activity Feed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={`activity-${activity.title}-${index}`} className="flex gap-4">
              <div className="mt-1">
                <activity.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-medium">{activity.title}</h4>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
