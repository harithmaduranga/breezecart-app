"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ShoppingCart,
  Home,
  Package,
  Settings,
  Bell,
  LogOut,
  DollarSign,
  BarChart2,
  Users,
  Star,
  Plus,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-emerald-600" />
            <span className="font-bold">BreezeCart</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-medium text-white">
                5
              </span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Vendor" />
              <AvatarFallback>FM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-gray-50">
          <div className="flex flex-col gap-1 p-4">
            <Link
              href="/dashboard/vendor"
              className="flex items-center gap-3 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-600 transition-all hover:text-emerald-900"
            >
              <Home className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              href="/dashboard/vendor/products"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Package className="h-5 w-5" />
              <span className="font-medium">Products</span>
            </Link>
            <Link
              href="/dashboard/vendor/orders"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">Orders</span>
            </Link>
            <Link
              href="/dashboard/vendor/customers"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Users className="h-5 w-5" />
              <span className="font-medium">Customers</span>
            </Link>
            <Link
              href="/dashboard/vendor/analytics"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <BarChart2 className="h-5 w-5" />
              <span className="font-medium">Analytics</span>
            </Link>
            <Link
              href="/dashboard/vendor/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Settings className="h-5 w-5" />
              <span className="font-medium">Settings</span>
            </Link>
          </div>
          <div className="mt-auto p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-gray-500 hover:text-gray-900">
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="container py-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
              <p className="text-gray-500">
                Welcome back, Fresh Market! Here's what's happening with your store today.
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Today's Sales</p>
                      <div className="flex items-end gap-1">
                        <p className="text-2xl font-bold">$1,429</p>
                        <p className="text-sm text-emerald-600 flex items-center mb-1">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          12%
                        </p>
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-100 p-3">
                      <DollarSign className="h-5 w-5 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">New Orders</p>
                      <div className="flex items-end gap-1">
                        <p className="text-2xl font-bold">24</p>
                        <p className="text-sm text-emerald-600 flex items-center mb-1">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          8%
                        </p>
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-100 p-3">
                      <Package className="h-5 w-5 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Customers</p>
                      <div className="flex items-end gap-1">
                        <p className="text-2xl font-bold">1,893</p>
                        <p className="text-sm text-emerald-600 flex items-center mb-1">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          5%
                        </p>
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-100 p-3">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Avg. Rating</p>
                      <div className="flex items-end gap-1">
                        <p className="text-2xl font-bold">4.8</p>
                        <div className="flex mb-1">
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-100 p-3">
                      <Star className="h-5 w-5 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Manage your most recent customer orders</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard/vendor/orders">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-sm text-gray-500">
                        <th className="text-left font-medium py-3 pl-4">Order ID</th>
                        <th className="text-left font-medium py-3">Customer</th>
                        <th className="text-left font-medium py-3">Date</th>
                        <th className="text-left font-medium py-3">Amount</th>
                        <th className="text-left font-medium py-3">Status</th>
                        <th className="text-right font-medium py-3 pr-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "ORD-1234",
                          customer: "John Doe",
                          date: "May 15, 2023",
                          amount: "$45.99",
                          status: "Pending",
                        },
                        {
                          id: "ORD-1233",
                          customer: "Sarah Smith",
                          date: "May 15, 2023",
                          amount: "$29.99",
                          status: "Processing",
                        },
                        {
                          id: "ORD-1232",
                          customer: "Mike Johnson",
                          date: "May 14, 2023",
                          amount: "$78.50",
                          status: "Delivered",
                        },
                        {
                          id: "ORD-1231",
                          customer: "Emily Davis",
                          date: "May 14, 2023",
                          amount: "$32.75",
                          status: "Delivered",
                        },
                        {
                          id: "ORD-1230",
                          customer: "Alex Wilson",
                          date: "May 13, 2023",
                          amount: "$54.25",
                          status: "Delivered",
                        },
                      ].map((order, i) => (
                        <tr key={order.id} className="border-b last:border-0 hover:bg-gray-50">
                          <td className="py-3 pl-4">{order.id}</td>
                          <td className="py-3">{order.customer}</td>
                          <td className="py-3">{order.date}</td>
                          <td className="py-3">{order.amount}</td>
                          <td className="py-3">
                            <Badge
                              variant={
                                order.status === "Pending"
                                  ? "outline"
                                  : order.status === "Processing"
                                    ? "secondary"
                                    : "success"
                              }
                              className={
                                order.status === "Delivered"
                                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-700"
                                  : ""
                              }
                            >
                              {order.status}
                            </Badge>
                          </td>
                          <td className="py-3 pr-4 text-right">
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/dashboard/vendor/orders/${order.id}`}>View</Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Products and Analytics */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Top Products */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Top Products</CardTitle>
                      <CardDescription>Your best selling products this month</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/dashboard/vendor/products">Manage</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Organic Fresh Apples", sales: 124, amount: "$1,236", stock: 45 },
                      { name: "Free Range Eggs (12 pack)", sales: 98, amount: "$686", stock: 32 },
                      { name: "Organic Milk (1 gallon)", sales: 87, amount: "$521", stock: 18 },
                      { name: "Whole Grain Bread", sales: 76, amount: "$380", stock: 24 },
                      { name: "Fresh Spinach (1 lb)", sales: 65, amount: "$325", stock: 15 },
                    ].map((product, i) => (
                      <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center">
                            <span className="text-sm font-medium">{i + 1}</span>
                          </div>
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.sales} units sold</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{product.amount}</p>
                          <p className="text-sm text-gray-500">{product.stock} in stock</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/vendor/products/new">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Product
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Sales Analytics */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Sales Analytics</CardTitle>
                      <CardDescription>Your sales performance over time</CardDescription>
                    </div>
                    <select className="h-8 rounded-md border border-input bg-background px-2 py-1 text-xs">
                      <option value="7days">Last 7 Days</option>
                      <option value="30days">Last 30 Days</option>
                      <option value="90days">Last 90 Days</option>
                    </select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-end gap-2 pt-6 pb-2">
                    {[35, 45, 30, 65, 85, 75, 60].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-emerald-100 rounded-t-sm" style={{ height: `${height}%` }}></div>
                        <span className="text-xs text-gray-500">
                          {new Date(Date.now() - (6 - i) * 86400000).toLocaleDateString("en-US", { weekday: "short" })}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                    <div>
                      <p className="text-sm text-gray-500">Total Sales</p>
                      <p className="text-xl font-bold">$12,426</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Orders</p>
                      <p className="text-xl font-bold">248</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Avg. Order</p>
                      <p className="text-xl font-bold">$50.10</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/vendor/analytics">
                      View Detailed Analytics
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
