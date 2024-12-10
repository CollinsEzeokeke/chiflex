import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart2, TrendingUp, DollarSign, ShoppingBag } from 'lucide-react';

const AnalyticsDashboard = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-2">$124,500</h3>
              <p className="text-sm text-success mt-1">+12.5% from last month</p>
            </div>
            <DollarSign className="w-8 h-8 text-primary" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <h3 className="text-2xl font-bold mt-2">1,245</h3>
              <p className="text-sm text-success mt-1">+8.2% from last month</p>
            </div>
            <ShoppingBag className="w-8 h-8 text-success" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <h3 className="text-2xl font-bold mt-2">3.2%</h3>
              <p className="text-sm text-destructive mt-1">-0.4% from last month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-secondary" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Order Value</p>
              <h3 className="text-2xl font-bold mt-2">$98.40</h3>
              <p className="text-sm text-success mt-1">+$4.20 from last month</p>
            </div>
            <BarChart2 className="w-8 h-8 text-primary" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top Products</h3>
          <div className="space-y-4">
            {[
              { name: 'Product A', sales: 234, revenue: 12400 },
              { name: 'Product B', sales: 187, revenue: 9350 },
              { name: 'Product C', sales: 143, revenue: 7150 },
              { name: 'Product D', sales: 92, revenue: 4600 },
            ].map((product, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.sales} sales</p>
                </div>
                <p className="font-semibold">${product.revenue}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {[
              { id: '#12345', status: 'Completed', amount: 234.50 },
              { id: '#12346', status: 'Processing', amount: 187.20 },
              { id: '#12347', status: 'Completed', amount: 143.75 },
              { id: '#12348', status: 'Shipped', amount: 92.30 },
            ].map((order, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">Order {order.id}</p>
                  <p className="text-sm text-gray-600">{order.status}</p>
                </div>
                <span className="font-semibold">${order.amount}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;