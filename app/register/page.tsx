"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShoppingCart, ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const [userType, setUserType] = useState("customer")
  const [step, setStep] = useState(1)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-emerald-600" />
            <span className="font-bold">BreezeCart</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Create an Account</CardTitle>
            <CardDescription>Join BreezeCart to start shopping or selling.</CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm your password" />
                </div>
                <div className="space-y-2">
                  <Label>I want to register as a:</Label>
                  <RadioGroup
                    defaultValue="customer"
                    value={userType}
                    onValueChange={setUserType}
                    className="grid grid-cols-2 gap-4 pt-2"
                  >
                    <div
                      className={`flex items-center justify-between rounded-md border-2 p-4 cursor-pointer ${userType === "customer" ? "border-emerald-600 bg-emerald-50" : "border-gray-200"}`}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="customer" id="customer" className="sr-only" />
                        <Label htmlFor="customer" className="cursor-pointer font-medium">
                          Customer
                        </Label>
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-between rounded-md border-2 p-4 cursor-pointer ${userType === "vendor" ? "border-emerald-600 bg-emerald-50" : "border-gray-200"}`}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vendor" id="vendor" className="sr-only" />
                        <Label htmlFor="vendor" className="cursor-pointer font-medium">
                          Vendor
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {step === 2 && userType === "customer" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input id="fullname" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input id="address" placeholder="Enter your address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter your city" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province</Label>
                    <Input id="state" placeholder="State" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">Zip/Postal Code</Label>
                    <Input id="zip" placeholder="Zip code" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && userType === "vendor" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input id="business-name" placeholder="Enter your business name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-address">Business Address</Label>
                  <Input id="business-address" placeholder="Enter your business address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-category">Business Category</Label>
                  <select
                    id="business-category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a category</option>
                    <option value="grocery">Grocery</option>
                    <option value="produce">Fresh Produce</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat & Seafood</option>
                    <option value="dairy">Dairy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-description">Business Description</Label>
                  <textarea
                    id="business-description"
                    placeholder="Tell customers about your business"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 text-center">
                <div className="rounded-full bg-emerald-100 p-3 mx-auto w-fit">
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
                    className="h-6 w-6 text-emerald-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Verification Email Sent</h3>
                <p className="text-gray-500">
                  We've sent a verification link to your email address. Please check your inbox and click the link to
                  complete your registration.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            {step === 1 && (
              <Button onClick={handleNext} className="w-full bg-emerald-600 hover:bg-emerald-700">
                Continue
              </Button>
            )}

            {step === 2 && (
              <div className="flex w-full gap-4">
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={handleNext} className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                  Create Account
                </Button>
              </div>
            )}

            {step === 3 && (
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="/login">Proceed to Login</Link>
              </Button>
            )}

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-emerald-600 hover:text-emerald-700">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
