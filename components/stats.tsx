'use client';

import { Card } from "@/components/ui/card";
import { ShoppingBag, ArrowUpRight, Users, Package, DollarSign, LucideIcon } from "lucide-react";

interface StatItem {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

const stats: StatItem[] = [
  {
    title: "Total Orders",
    value: "156",
    change: "+12.5%",
    icon: ShoppingBag,
  },
  {
    title: "Active Orders",
    value: "3",
    change: "+2.1%",
    icon: Package,
  },
  {
    title: "Total Spent",
    value: "$2,345",
    change: "+18.2%",
    icon: DollarSign,
  },
  {
    title: "Reward Points",
    value: "1,234",
    change: "+8.1%",
    icon: Users,
  },
];

export default function Stats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center justify-between">
            <stat.icon className="h-5 w-5 text-muted-foreground" />
            <span className="flex items-center text-sm text-green-600">
              {stat.change}
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </span>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold text-2xl">{stat.value}</h2>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
