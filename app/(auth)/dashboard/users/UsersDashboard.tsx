import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, UserPlus, UserCheck, UserX } from 'lucide-react';

const UsersDashboard = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Users Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <h3 className="text-2xl font-bold mt-2">1,234</h3>
              <p className="text-sm text-success mt-1">+48 this month</p>
            </div>
            <Users className="w-8 h-8 text-primary" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New Users</p>
              <h3 className="text-2xl font-bold mt-2">48</h3>
              <p className="text-sm text-success mt-1">This month</p>
            </div>
            <UserPlus className="w-8 h-8 text-success" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <h3 className="text-2xl font-bold mt-2">892</h3>
              <p className="text-sm text-success mt-1">72% of total</p>
            </div>
            <UserCheck className="w-8 h-8 text-secondary" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Inactive Users</p>
              <h3 className="text-2xl font-bold mt-2">342</h3>
              <p className="text-sm text-destructive mt-1">28% of total</p>
            </div>
            <UserX className="w-8 h-8 text-destructive" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
          <div className="space-y-4">
            {[
              { name: 'John Doe', role: 'Basic', status: 'Active' },
              { name: 'Jane Smith', role: 'Company', status: 'Active' },
              { name: 'Mike Johnson', role: 'Basic', status: 'Inactive' },
              { name: 'Sarah Williams', role: 'Company', status: 'Active' },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.role} User</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  user.status === 'Active' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-destructive/10 text-destructive'
                }`}>
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">User Roles Distribution</h3>
          <div className="space-y-4">
            {[
              { role: 'Basic Users', count: 876, percentage: 71 },
              { role: 'Company Users', count: 342, percentage: 28 },
              { role: 'Admin Users', count: 16, percentage: 1 },
            ].map((role, i) => (
              <div key={i} className="py-2 border-b last:border-0">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{role.role}</span>
                  <span className="text-gray-600">{role.count} users</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${role.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UsersDashboard;