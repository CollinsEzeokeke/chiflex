import React from 'react';
import { Card } from '@/components/ui/card';
import { Package, TrendingUp, AlertCircle, ShoppingCart } from 'lucide-react';

const ProductsDashboard = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Products Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <h3 className="text-2xl font-bold mt-2">856</h3>
              <p className="text-sm text-success mt-1">+24 new this month</p>
            </div>
            <Package className="w-8 h-8 text-primary" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Listings</p>
              <h3 className="text-2xl font-bold mt-2">784</h3>
              <p className="text-sm text-success mt-1">91.5% of total</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-success" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Low Stock</p>
              <h3 className="text-2xl font-bold mt-2">45</h3>
              <p className="text-sm text-destructive mt-1">Need attention</p>
            </div>
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Growth Rate</p>
              <h3 className="text-2xl font-bold mt-2">+15.4%</h3>
              <p className="text-sm text-success mt-1">Above target</p>
            </div>
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Best Selling Products</h3>
          <div className="space-y-4">
            {[
              { name: 'Product A', stock: 234, sales: 1240 },
              { name: 'Product B', stock: 187, sales: 935 },
              { name: 'Product C', stock: 143, sales: 715 },
              { name: 'Product D', stock: 92, sales: 460 },
            ].map((product, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.stock} in stock</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{product.sales} sales</p>
                  <p className="text-sm text-success">In stock</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Low Stock Alerts</h3>
          <div className="space-y-4">
            {[
              { name: 'Product E', stock: 5, threshold: 10 },
              { name: 'Product F', stock: 3, threshold: 15 },
              { name: 'Product G', stock: 8, threshold: 20 },
              { name: 'Product H', stock: 2, threshold: 10 },
            ].map((product, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-destructive">Low stock alert</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{product.stock} remaining</p>
                  <p className="text-sm text-gray-600">Threshold: {product.threshold}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductsDashboard;