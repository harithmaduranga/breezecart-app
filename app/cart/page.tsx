"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ShoppingCart, Trash2, ArrowRight } from "lucide-react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Fresh Apples",
      price: 9.99,
      quantity: 2,
      vendor: "Green Farms",
      image: "/placeholder.svg?height=80&width=80&text=Apples",
    },
    {
      id: 2,
      name: "Whole Grain Bread",
      price: 4.99,
      quantity: 1,
      vendor: "Artisan Bakery",
      image: "/placeholder.svg?height=80&width=80&text=Bread",
    },
    {
      id: 3,
      name: "Free Range Eggs (12 pack)",
      price: 6.99,
      quantity: 1,
      vendor: "Happy Hens",
      image: "/placeholder.svg?height=80&width=80&text=Eggs",
    },
    {
      id: 4,
      name: "Organic Milk (1 gallon)",
      price: 5.99,
      quantity: 1,
      vendor: "Dairy Delight",
      image: "/placeholder.svg?height=80&width=80&text=Milk",
    },
  ])

  const [weeklyItems, setWeeklyItems] = useState([
    {
      id: 5,
      name: "Bananas (bunch)",
      price: 3.99,
      quantity: 1,
      vendor: "Green Farms",
      image: "/placeholder.svg?height=80&width=80&text=Bananas",
    },
    {
      id: 6,
      name: "Yogurt (32 oz)",
      price: 4.99,
      quantity: 2,
      vendor: "Dairy Delight",
      image: "/placeholder.svg?height=80&width=80&text=Yogurt",
    },
  ])

  const [weeklyCartEnabled, setWeeklyCartEnabled] = useState(true)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateWeeklyQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setWeeklyItems(weeklyItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeWeeklyItem = (id: number) => {
    setWeeklyItems(weeklyItems.filter((item) => item.id !== id))
  }

  const calculateSubtotal = (items: typeof cartItems) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const cartSubtotal = calculateSubtotal(cartItems)
  const weeklySubtotal = calculateSubtotal(weeklyItems)
  const deliveryFee = cartSubtotal >= 35 ? 0 : 4.99
  const tax = (cartSubtotal + deliveryFee) * 0.08
  const total = cartSubtotal + deliveryFee + tax

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-emerald-600" />
            <span className="font-bold">BreezeCart</span>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Regular Cart */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent className="pb-0">
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <ShoppingCart className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 mb-4">Looks like you haven't added any items to your cart yet.</p>
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                      <Link href="/products">Browse Products</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                        <div className="h-20 w-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-500">{item.vendor}</p>
                            </div>
                            <p className="font-bold text-emerald-600">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border rounded-md">
                              <button
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12h14" />
                                </svg>
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12h14" />
                                  <path d="M12 5v14" />
                                </svg>
                              </button>
                            </div>
                            <button className="text-gray-400 hover:text-red-500" onClick={() => removeItem(item.id)}>
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-6">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Weekly Cart */}
            <Card className={weeklyCartEnabled ? "border-emerald-200" : ""}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Weekly Auto-Order</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Switch id="weekly-cart" checked={weeklyCartEnabled} onCheckedChange={setWeeklyCartEnabled} />
                    <Label htmlFor="weekly-cart">{weeklyCartEnabled ? "Enabled" : "Disabled"}</Label>
                  </div>
                </div>
              </CardHeader>
              <CardContent className={`pb-0 ${!weeklyCartEnabled ? "opacity-50 pointer-events-none" : ""}`}>
                {weeklyItems.length === 0 ? (
                  <div className="text-center py-6">
                    <p className="text-gray-500 mb-4">You don't have any items in your weekly auto-order.</p>
                    <Button variant="outline" asChild size="sm">
                      <Link href="/products">Add Weekly Items</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {weeklyItems.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                        <div className="h-20 w-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-500">{item.vendor}</p>
                            </div>
                            <p className="font-bold text-emerald-600">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border rounded-md">
                              <button
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                onClick={() => updateWeeklyQuantity(item.id, item.quantity - 1)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12h14" />
                                </svg>
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                onClick={() => updateWeeklyQuantity(item.id, item.quantity + 1)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12h14" />
                                  <path d="M12 5v14" />
                                </svg>
                              </button>
                            </div>
                            <button
                              className="text-gray-400 hover:text-red-500"
                              onClick={() => removeWeeklyItem(item.id)}
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              {weeklyItems.length > 0 && (
                <CardFooter className="pt-6">
                  <div className="w-full">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Weekly Subtotal:</span>
                      <span>${weeklySubtotal.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      These items will be automatically ordered every Monday and delivered to your default address.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Manage Weekly Items
                    </Button>
                  </div>
                </CardFooter>
              )}
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-600">Free</span>
                      ) : (
                        `$${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  {deliveryFee > 0 && (
                    <div className="text-sm text-emerald-600 mt-2">
                      Add ${(35 - cartSubtotal).toFixed(2)} more to qualify for free delivery
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button
                  disabled={cartItems.length === 0}
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  asChild
                >
                  <Link href="/checkout" className="gap-2">
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <div className="text-center text-xs text-gray-500">
                  <p>Secured by blockchain technology</p>
                  <p>We accept credit cards, mobile payments, and crypto</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
