'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, ChevronDown, ChevronUp } from "lucide-react";

interface OrderDetails {
  shippingAddress: string;
  paymentMethod: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
  customerNotes?: string;
}

interface Order {
  id: string;
  product: string;
  date: string;
  status: OrderStatus;
  price: string;
  quantity: number;
  details: OrderDetails;
}

type OrderStatus = 'Delivered' | 'In Transit' | 'Processing' | 'Cancelled' | 'Returned';

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
      quantity: 1,
      details: {
        shippingAddress: "123 Tech Street, Silicon Valley, CA 94025",
        paymentMethod: "Credit Card ending in 4242",
        trackingNumber: "1Z999AA1234567890",
        estimatedDelivery: "2024-02-25",
        customerNotes: "Please leave at front door"
      }
    },
    {
      id: "ORD002",
      product: "Gaming Mouse",
      date: "2024-02-19",
      status: "Delivered",
      price: "$79.99",
      quantity: 2,
      details: {
        shippingAddress: "456 Gaming Ave, Los Angeles, CA 90001",
        paymentMethod: "PayPal",
        trackingNumber: "1Z999AA1234567891",
        estimatedDelivery: "2024-02-22"
      }
    },
    {
      id: "ORD003",
      product: "4K Gaming Monitor",
      date: "2024-02-18",
      status: "Processing",
      price: "$549.99",
      quantity: 1,
      details: {
        shippingAddress: "789 Display Road, Seattle, WA 98101",
        paymentMethod: "Credit Card ending in 8888",
        trackingNumber: "Pending",
        estimatedDelivery: "2024-02-28",
        customerNotes: "Signature required for delivery"
      }
    },
    {
      id: "ORD004",
      product: "Gaming Headset",
      date: "2024-02-17",
      status: "Cancelled",
      price: "$129.99",
      quantity: 1,
      details: {
        shippingAddress: "321 Audio Lane, Austin, TX 78701",
        paymentMethod: "Apple Pay",
        trackingNumber: "Cancelled",
        estimatedDelivery: "N/A",
        customerNotes: "Cancelled due to payment issue"
      }
    },
    {
      id: "ORD005",
      product: "RGB Mouse Pad",
      date: "2024-02-16",
      status: "Returned",
      price: "$39.99",
      quantity: 1,
      details: {
        shippingAddress: "555 RGB Street, Miami, FL 33101",
        paymentMethod: "Credit Card ending in 1111",
        trackingNumber: "RET123456789",
        estimatedDelivery: "Returned on 2024-02-15",
        customerNotes: "Product not as described"
      }
    },
    {
      id: "ORD006",
      product: "Gaming Chair",
      date: "2024-02-15",
      status: "In Transit",
      price: "$299.99",
      quantity: 1,
      details: {
        shippingAddress: "777 Comfort Ave, Chicago, IL 60601",
        paymentMethod: "Google Pay",
        trackingNumber: "1Z999AA1234567893",
        estimatedDelivery: "2024-02-23",
        customerNotes: "Please assemble upon delivery"
      }
    },
    {
      id: "ORD007",
      product: "Mechanical Switches (x90)",
      date: "2024-02-14",
      status: "Delivered",
      price: "$89.99",
      quantity: 3,
      details: {
        shippingAddress: "888 Switch Lane, Portland, OR 97201",
        paymentMethod: "Credit Card ending in 3333",
        trackingNumber: "1Z999AA1234567894",
        estimatedDelivery: "2024-02-16"
      }
    },
    {
      id: "ORD008",
      product: "Webcam 4K",
      date: "2024-02-13",
      status: "Processing",
      price: "$199.99",
      quantity: 1,
      details: {
        shippingAddress: "999 Stream Road, Denver, CO 80201",
        paymentMethod: "Shop Pay",
        trackingNumber: "Pending",
        estimatedDelivery: "2024-02-21",
        customerNotes: "Gift wrapping requested"
      }
    },
    {
      id: "ORD009",
      product: "Graphics Card RTX 4080",
      date: "2024-02-12",
      status: "Returned",
      price: "$1299.99",
      quantity: 1,
      details: {
        shippingAddress: "444 GPU Street, Houston, TX 77001",
        paymentMethod: "Credit Card ending in 5555",
        trackingNumber: "RET987654321",
        estimatedDelivery: "Returned on 2024-02-11",
        customerNotes: "DOA - Requesting replacement"
      }
    },
    {
      id: "ORD010",
      product: "USB-C Dock",
      date: "2024-02-11",
      status: "Cancelled",
      price: "$79.99",
      quantity: 2,
      details: {
        shippingAddress: "222 Dock Way, Boston, MA 02101",
        paymentMethod: "PayPal",
        trackingNumber: "Cancelled",
        estimatedDelivery: "N/A",
        customerNotes: "Out of stock - customer cancelled"
      }
    }
  ];
  

const statusColorMap: StatusColorMap = {
    "Delivered": "bg-[hsl(142,76%,36%)] dark:bg-[hsl(142,76%,46%)]",
    "In Transit": "bg-[hsl(217,91%,60%)] dark:bg-[hsl(217,91%,70%)]",
    "Processing": "bg-[hsl(45,93%,47%)] dark:bg-[hsl(45,93%,57%)]",
    "Cancelled": "bg-destructive",
    "Returned": "bg-[hsl(280,67%,44%)] dark:bg-[hsl(280,67%,54%)]"
  };
  
  export default function DetailedOrders() {
    const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  
    const toggleOrderDetails = (orderId: string) => {
      setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
    };
  
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg bg-card">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => toggleOrderDetails(order.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Package className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{order.product}</h3>
                      <p className="text-sm text-muted-foreground">{order.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium text-foreground">{order.price}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${statusColorMap[order.status]} text-primary-foreground`}
                    >
                      {order.status}
                    </Badge>
                    {expandedOrderId === order.id ? (
                      <ChevronUp className="text-muted-foreground" />
                    ) : (
                      <ChevronDown className="text-muted-foreground" />
                    )}
                  </div>
                </div>
                
                {expandedOrderId === order.id && (
                  <div className="p-4 border-t bg-accent">
                    <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Shipping Details</h4>
                        <p className="text-sm text-muted-foreground">{order.details.shippingAddress}</p>
                        {order.details.trackingNumber && (
                          <p className="text-sm mt-2 text-muted-foreground">
                            Tracking: {order.details.trackingNumber}
                          </p>
                        )}
                        {order.details.estimatedDelivery && (
                          <p className="text-sm mt-2 text-muted-foreground">
                            Estimated Delivery: {order.details.estimatedDelivery}
                          </p>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Order Information</h4>
                        <p className="text-sm text-muted-foreground">Quantity: {order.quantity}</p>
                        <p className="text-sm text-muted-foreground">Payment: {order.details.paymentMethod}</p>
                        {order.details.customerNotes && (
                          <p className="text-sm mt-2 text-muted-foreground">
                            Notes: {order.details.customerNotes}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }