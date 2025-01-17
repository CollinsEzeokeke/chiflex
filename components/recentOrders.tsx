'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

interface Order {
  id: string;
  product: string;
  date: string;
  status: OrderStatus;
  price: string;
}

type OrderStatus = 'Delivered' | 'In Transit' | 'Processing';

type StatusColorMap = {
  [K in OrderStatus]: string;
};

const orders: Order[] = [
  {
    id: "ORD001",
    product: "Mechanical Keyboard",
    date: "2024-02-20",
    status: "In Transit",
    price: "$159.99",
  },
  {
    id: "ORD002",
    product: "Gaming Mouse",
    date: "2024-02-19",
    status: "Delivered",
    price: "$79.99",
  },
  {
    id: "ORD003",
    product: "27\" Monitor",
    date: "2024-02-18",
    status: "Processing",
    price: "$299.99",
  },
];

const statusColorMap: StatusColorMap = {
  "Delivered": "bg-green-500",
  "In Transit": "bg-blue-500",
  "Processing": "bg-yellow-500",
};

const getStatusColor = (status: OrderStatus): string => {
  return statusColorMap[status] || "bg-gray-500";
};

export default function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">{order.product}</h3>
                  <p className="text-sm text-muted-foreground">{order.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-medium">{order.price}</p>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <Badge variant="secondary" className={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
