"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShoppingCart, Home, Package, Heart, Settings, Bell, LogOut, Search, Clock, Star, MapPin } from "lucide-react"

export default function CustomerDashboard() {
  const [weeklyCartEnabled, setWeeklyCartEnabled] = useState(true)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-emerald-600" />
            <span className="font-bold">BreezeCart</span>
          </div>
          <div className="relative w-full max-w-sm mx-4 lg:mx-8 hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search products, vendors..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 pl-8 pr-4 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-medium text-white">
                3
              </span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-gray-50">
          <div className="flex flex-col gap-1 p-4">
            <Link
              href="/dashboard/customer"
              className="flex items-center gap-3 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-600 transition-all hover:text-emerald-900"
            >
              <Home className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              href="/orders"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Package className="h-5 w-5" />
              <span className="font-medium">My Orders</span>
            </Link>
            <Link
              href="/favorites"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Heart className="h-5 w-5" />
              <span className="font-medium">Favorites</span>
            </Link>
            <Link
              href="/settings"
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
              <h1 className="text-2xl font-bold">Welcome back, John!</h1>
              <p className="text-gray-500">Here's what's happening with your account today.</p>
            </div>

            {/* Weekly Cart Toggle */}
            <Card className="mb-6 border-emerald-100 bg-emerald-50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Weekly Cart Automation</h3>
                    <p className="text-sm text-gray-500">
                      Your weekly essentials will be automatically ordered every Monday.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="weekly-cart" checked={weeklyCartEnabled} onCheckedChange={setWeeklyCartEnabled} />
                    <Label htmlFor="weekly-cart">{weeklyCartEnabled ? "Enabled" : "Disabled"}</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your last 3 orders</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="rounded-md bg-gray-100 p-2">
                          <Package className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Order #{1000 + order}</p>
                            <Badge variant="outline" className="text-xs">
                              Delivered
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">3 items • $24.99</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>May {10 + order}, 2023</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/orders">View All Orders</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Favorite Vendors */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Favorite Vendors</CardTitle>
                  <CardDescription>Vendors you shop from frequently</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-4">
                    {[1, 2, 3].map((vendor) => (
                      <div key={vendor} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40&text=V${vendor}`}
                            alt={`Vendor ${vendor}`}
                          />
                          <AvatarFallback>V{vendor}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Vendor Name {vendor}</p>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                              <span className="ml-1 text-xs">4.9</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">Fresh produce & organic goods</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>2.3 miles away</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/favorites">View All Favorites</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Recommended Products */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recommended For You</CardTitle>
                  <CardDescription>Based on your purchase history</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-4">
                    {[1, 2, 3].map((product) => (
                      <div key={product} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100">
                          <img
                            src={`/placeholder.svg?height=64&width=64&text=P${product}`}
                            alt={`Product ${product}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Product Name {product}</p>
                            <p className="font-medium text-emerald-600">$9.99</p>
                          </div>
                          <p className="text-sm text-gray-500">Vendor Name {product}</p>
                          <Button size="sm" variant="outline" className="mt-1 h-7 text-xs">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/products">Browse More Products</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Weekly Cart Items */}
            <Card>
              <CardHeader>
                <CardTitle>Your Weekly Cart</CardTitle>
                <CardDescription>These items will be ordered automatically every Monday</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                      <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100">
                        <img
                          src={`/placeholder.svg?height=64&width=64&text=P${item}`}
                          alt={`Product ${item}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Weekly Item {item}</p>
                          <p className="font-medium text-emerald-600">$4.99</p>
                        </div>
                        <p className="text-sm text-gray-500">Vendor Name</p>
                      </div>
                      <div className="flex items-center">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <span className="sr-only">Decrease</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M5 12h14" />
                          </svg>
                        </Button>
                        <span className="w-8 text-center">2</span>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <span className="sr-only">Increase</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500">
                        <span className="sr-only">Remove</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Weekly Amount</p>
                  <p className="text-2xl font-bold">$19.96</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button variant="outline" className="flex-1 sm:flex-initial">
                    Edit Items
                  </Button>
                  <Button className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
