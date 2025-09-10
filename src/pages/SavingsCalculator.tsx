import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import { Calculator, TrendingUp, DollarSign, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SavingsCalculator = () => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [interestRate, setInterestRate] = useState("3");

  const calculateSavings = () => {
    const current = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlySavings) || 0;
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseInt(timeframe) || 12;

    const data = [];
    let balance = current;

    for (let i = 0; i <= months; i++) {
      if (i > 0) {
        balance = balance * (1 + rate) + monthly;
      }
      data.push({
        month: i,
        balance: Math.round(balance),
        contributions: current + (monthly * i),
        interest: Math.round(balance - current - (monthly * i))
      });
    }

    return data;
  };

  const data = calculateSavings();
  const finalBalance = data[data.length - 1]?.balance || 0;
  const totalContributions = parseFloat(currentSavings) + (parseFloat(monthlySavings) * parseInt(timeframe));
  const totalInterest = finalBalance - totalContributions;
  const target = parseFloat(targetAmount) || 0;
  const monthsToTarget = target > 0 ? Math.ceil(Math.log(target / parseFloat(currentSavings)) / Math.log(1 + (parseFloat(interestRate) / 100 / 12))) : 0;

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Savings Calculator</h1>
          <p className="text-muted-foreground">Plan your financial future with our "what if" scenarios</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calculator Inputs */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Savings Parameters</span>
              </CardTitle>
              <CardDescription>
                Enter your savings details to see projections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-savings">Current Savings</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <Input
                    id="current-savings"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(e.target.value)}
                    className="pl-8 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthly-savings">Monthly Savings</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <Input
                    id="monthly-savings"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={monthlySavings}
                    onChange={(e) => setMonthlySavings(e.target.value)}
                    className="pl-8 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframe">Time Period (Months)</Label>
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="12">1 Year (12 months)</SelectItem>
                    <SelectItem value="24">2 Years (24 months)</SelectItem>
                    <SelectItem value="36">3 Years (36 months)</SelectItem>
                    <SelectItem value="60">5 Years (60 months)</SelectItem>
                    <SelectItem value="120">10 Years (120 months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest-rate">Annual Interest Rate (%)</Label>
                <Input
                  id="interest-rate"
                  type="number"
                  step="0.1"
                  placeholder="3.0"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="rounded-xl"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="target-amount">Target Amount (Optional)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <Input
                    id="target-amount"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    className="pl-8 rounded-xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="shadow-md border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Final Balance</CardTitle>
                  <DollarSign className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-success">
                    ${finalBalance.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    After {timeframe || 0} months
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Interest Earned</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">
                    ${totalInterest.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Compound interest growth
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Target Analysis */}
            {target > 0 && (
              <Card className="shadow-md border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Target Analysis</CardTitle>
                  <Target className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Target Amount:</span>
                      <span className="font-medium">${target.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Time to Reach:</span>
                      <span className="font-medium">
                        {monthsToTarget > 0 ? `${monthsToTarget} months` : "Already reached!"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Progress:</span>
                      <span className="font-medium">
                        {Math.min(100, (finalBalance / target) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Breakdown */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Savings Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Initial Amount:</span>
                    <span className="font-medium">${parseFloat(currentSavings || "0").toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Contributions:</span>
                    <span className="font-medium">${(parseFloat(monthlySavings || "0") * parseInt(timeframe || "0")).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Earned:</span>
                    <span className="font-medium text-success">${totalInterest.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Final Balance:</span>
                    <span className="text-success">${finalBalance.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chart */}
        {data.length > 1 && (
          <Card className="shadow-lg border-0 mt-6">
            <CardHeader>
              <CardTitle>Savings Growth Projection</CardTitle>
              <CardDescription>
                See how your savings will grow over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="month" 
                    label={{ value: 'Months', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    formatter={(value, name) => [`$${Number(value).toLocaleString()}`, name]}
                    labelFormatter={(label) => `Month ${label}`}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="balance" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={3}
                    name="Total Balance"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="contributions" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Contributions Only"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SavingsCalculator;