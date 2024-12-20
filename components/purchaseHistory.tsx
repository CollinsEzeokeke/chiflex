import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ArrowUpDown, Download, Receipt } from "lucide-react";

// Mock data - in a real app this would come from an API
const purchaseHistory = [
  {
    id: "INV001",
    date: new Date("2024-03-15"),
    item: "Premium Subscription",
    amount: 49.99,
    status: "completed",
    invoice: "#2024-001",
  },
  {
    id: "INV002",
    date: new Date("2024-03-10"),
    item: "Storage Upgrade",
    amount: 9.99,
    status: "completed",
    invoice: "#2024-002",
  },
  {
    id: "INV003",
    date: new Date("2024-03-05"),
    item: "Additional Features",
    amount: 29.99,
    status: "pending",
    invoice: "#2024-003",
  },
  {
    id: "INV004",
    date: new Date("2024-02-28"),
    item: "Custom Support Package",
    amount: 99.99,
    status: "completed",
    invoice: "#2024-004",
  },
];

const PurchaseHistory = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-2xl font-bold">Purchase History</CardTitle>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Receipt className="h-4 w-4" />
            Last 30 Days
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">
                  <div className="flex items-center space-x-1">
                    <span>Date</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Invoice</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchaseHistory.map((purchase) => (
                <TableRow key={purchase.id} className="group hover:bg-muted/50">
                  <TableCell className="font-medium">
                    {format(purchase.date, "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell>{purchase.item}</TableCell>
                  <TableCell>{purchase.invoice}</TableCell>
                  <TableCell>${purchase.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={purchase.status === "completed" ? "default" : "secondary"}
                      className="capitalize"
                    >
                      {purchase.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <button
                      className="invisible group-hover:visible text-muted-foreground hover:text-primary"
                      title="Download Invoice"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseHistory;