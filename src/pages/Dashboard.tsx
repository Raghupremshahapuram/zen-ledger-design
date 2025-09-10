import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Dashboard = () => {
  // Mock data - in real app, this would come from API/state management
  const monthlyData = [
    { month: "Jan", income: 4500, expenses: 3200 },
    { month: "Feb", income: 4800, expenses: 2900 },
    { month: "Mar", income: 4600, expenses: 3400 },
    { month: "Apr", income: 5200, expenses: 3100 },
    { month: "May", income: 4900, expenses: 3600 },
    { month: "Jun", income: 5400, expenses: 3300 },
  ];

  const categoryData = [
    { name: "Food", value: 1200, color: "#EF4444" },
    { name: "Transportation", value: 800, color: "#F97316" },
    { name: "Entertainment", value: 600, color: "#EAB308" },
    { name: "Utilities", value: 500, color: "#10B981" },
    { name: "Shopping", value: 700, color: "#8B5CF6" },
  ];

  const currentMonth = monthlyData[monthlyData.length - 1];
  const totalIncome = currentMonth.income;
  const totalExpenses = currentMonth.expenses;
  const netIncome = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Financial Dashboard</h1>
          <p className="text-muted-foreground">Track your income, expenses, and savings</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-md border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Income
              </CardTitle>
              <ArrowUpRight className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">${totalIncome.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Expenses
              </CardTitle>
              <ArrowDownRight className="h-4 w-4 text-danger" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-danger">${totalExpenses.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingDown className="h-3 w-3 inline mr-1" />
                -5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Net Income
              </CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${netIncome >= 0 ? 'text-success' : 'text-danger'}`}>
                ${netIncome.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Savings Rate
              </CardTitle>
              <PieChart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {Math.round((netIncome / totalIncome) * 100)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Of total income saved
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Income vs Expenses Chart */}
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Income vs Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill="hsl(var(--success))" name="Income" />
                  <Bar dataKey="expenses" fill="hsl(var(--danger))" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Expense Categories Chart */}
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="shadow-md border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "expense", category: "Food", amount: 45.50, date: "Today", description: "Grocery shopping" },
                { type: "income", category: "Salary", amount: 5400.00, date: "Jun 1", description: "Monthly salary" },
                { type: "expense", category: "Transportation", amount: 25.00, date: "Yesterday", description: "Gas station" },
                { type: "expense", category: "Entertainment", amount: 89.99, date: "Jun 28", description: "Movie tickets" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      transaction.type === 'income' ? 'bg-success' : 'bg-danger'
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                    </div>
                  </div>
                  <div className={`font-bold ${
                    transaction.type === 'income' ? 'text-success' : 'text-danger'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;