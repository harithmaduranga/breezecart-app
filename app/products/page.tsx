import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ShoppingCart, Search, Filter, Star, Heart } from "lucide-react"

export default function ProductListingPage() {
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
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-medium text-white">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-medium text-white">
                3
              </span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6">
        {/* Mobile Search */}
        <div className="relative w-full mb-4 md:hidden">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search products, vendors..."
            className="w-full rounded-md border border-gray-200 bg-gray-50 pl-8 pr-4 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    Reset All
                  </Button>
                </div>

                {/* Categories */}
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {["Fruits & Vegetables", "Dairy & Eggs", "Meat & Seafood", "Bakery", "Beverages", "Snacks"].map(
                      (category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={category.toLowerCase().replace(/\s+/g, "-")} />
                          <Label htmlFor={category.toLowerCase().replace(/\s+/g, "-")} className="text-sm">
                            {category}
                          </Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Price Range */}
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <Slider defaultValue={[0, 50]} max={100} step={1} className="mb-6" />
                  <div className="flex items-center justify-between">
                    <div className="w-20">
                      <Input type="number" placeholder="Min" className="h-8 text-xs" />
                    </div>
                    <span className="text-gray-500">to</span>
                    <div className="w-20">
                      <Input type="number" placeholder="Max" className="h-8 text-xs" />
                    </div>
                  </div>
                </div>

                {/* Vendor Rating */}
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-medium mb-2">Vendor Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                          {Array(rating)
                            .fill(null)
                            .map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                            ))}
                          {Array(5 - rating)
                            .fill(null)
                            .map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-gray-300" />
                            ))}
                          <span className="ml-1">{rating}+ stars</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="font-medium mb-2">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-stock" />
                      <Label htmlFor="in-stock" className="text-sm">
                        In Stock
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="same-day-delivery" />
                      <Label htmlFor="same-day-delivery" className="text-sm">
                        Same Day Delivery
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">All Products</h1>
              <div className="flex items-center gap-2">
                <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
                <Button variant="outline" size="sm" className="h-9 gap-1 hidden sm:flex">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <Link href={`/products/${i + 1}`} key={i} className="group">
                  <div className="rounded-lg border bg-white overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-square relative overflow-hidden bg-gray-100">
                      <img
                        src={`/placeholder.svg?height=300&width=300&text=Product ${i + 1}`}
                        alt={`Product ${i + 1}`}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Add to favorites</span>
                      </Button>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-500 mb-1">Vendor Name</div>
                      <h3 className="font-medium mb-1 group-hover:text-emerald-600 transition-colors">
                        Product Name {i + 1}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex">
                          {Array(5)
                            .fill(null)
                            .map((_, j) => (
                              <Star
                                key={j}
                                className={`h-3 w-3 ${j < 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                              />
                            ))}
                        </div>
                        <span className="text-xs text-gray-500">(24)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-emerald-600">$9.99</div>
                        <Button size="sm" className="h-8 bg-emerald-600 hover:bg-emerald-700">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 mt-8">
              <Button variant="outline" size="icon" className="h-8 w-8" disabled>
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 bg-emerald-50 border-emerald-200">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                ...
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                12
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
