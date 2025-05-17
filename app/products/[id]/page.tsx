"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Heart, Star, ChevronRight, Truck, Calendar, Shield, ArrowLeft } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [addToWeekly, setAddToWeekly] = useState(false)

  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1))

  const images = [
    `/placeholder.svg?height=600&width=600&text=Product ${params.id}`,
    `/placeholder.svg?height=600&width=600&text=Image 2`,
    `/placeholder.svg?height=600&width=600&text=Image 3`,
    `/placeholder.svg?height=600&width=600&text=Image 4`,
  ]

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
        {/* Breadcrumbs */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-emerald-600">
            Products
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products/category" className="hover:text-emerald-600">
            Category
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">Product {params.id}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border bg-white">
              <img
                src={images[activeImage] || "/placeholder.svg"}
                alt={`Product ${params.id} - Image ${activeImage + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, i) => (
                <button
                  key={i}
                  className={`aspect-square overflow-hidden rounded-md border ${
                    activeImage === i ? "ring-2 ring-emerald-600" : ""
                  }`}
                  onClick={() => setActiveImage(i)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <Link href="/vendors/1" className="text-sm text-emerald-600 hover:underline">
                Vendor Name
              </Link>
              <h1 className="text-2xl font-bold mt-1">Organic Fresh Apples - Product {params.id}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                </div>
                <span className="text-sm text-gray-500">4.0 (56 reviews)</span>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-emerald-600">$9.99</span>
                <span className="text-sm text-gray-500 ml-2">per lb</span>
              </div>
            </div>

            <div className="border-t border-b py-4 mb-6">
              <p className="text-gray-700">
                Fresh, crisp organic apples sourced directly from local farms. These apples are perfect for snacking,
                baking, or adding to your favorite recipes. Rich in flavor and nutrients, our apples are harvested at
                peak ripeness to ensure the best quality.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-md"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
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
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-md" onClick={incrementQuantity}>
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
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
                <div className="text-gray-500 text-sm">
                  <span className="font-medium text-gray-900">In Stock</span> - Ready to ship
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Favorites
                </Button>
              </div>

              <div className="flex items-center gap-2 p-3 border rounded-lg bg-emerald-50 border-emerald-100">
                <input
                  type="checkbox"
                  id="weekly-cart"
                  checked={addToWeekly}
                  onChange={() => setAddToWeekly(!addToWeekly)}
                  className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                />
                <label htmlFor="weekly-cart" className="text-sm font-medium">
                  Add to my weekly cart (auto-order every week)
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-100 p-2">
                  <Truck className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">Free delivery on orders over $35</p>
                  <p className="text-sm text-gray-500">Estimated delivery: 2-3 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-100 p-2">
                  <Calendar className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">Freshness Guarantee</p>
                  <p className="text-sm text-gray-500">7 days from delivery or full refund</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-100 p-2">
                  <Shield className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">Secure Blockchain Transactions</p>
                  <p className="text-sm text-gray-500">All payments are secured with blockchain technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:shadow-none py-3"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:shadow-none py-3"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:shadow-none py-3"
            >
              Reviews (56)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <div className="space-y-4">
              <p>
                Our organic apples are grown without synthetic pesticides or fertilizers, making them a healthier choice
                for you and the environment. These crisp, juicy apples are harvested at peak ripeness to ensure maximum
                flavor and nutritional value.
              </p>
              <p>
                Apples are a good source of fiber and vitamin C. They also contain polyphenols, which have antioxidant
                effects. These antioxidants can help protect your cells from free radical damage.
              </p>
              <h3 className="text-lg font-medium mt-4">Benefits:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Rich in antioxidants</li>
                <li>Good source of fiber</li>
                <li>Contains essential vitamins and minerals</li>
                <li>Supports digestive health</li>
                <li>No synthetic pesticides or chemicals</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Origin</span>
                    <span>Local Farms, USA</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Type</span>
                    <span>Honeycrisp</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Weight</span>
                    <span>Approx. 0.3 lb per apple</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Packaging</span>
                    <span>Eco-friendly paper bag</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Certification</span>
                    <span>USDA Organic</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Storage</span>
                    <span>Refrigerate for best freshness</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Shelf Life</span>
                    <span>7-10 days refrigerated</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Allergens</span>
                    <span>None</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                          />
                        ))}
                    </div>
                    <span className="text-sm">Based on 56 reviews</span>
                  </div>
                </div>
                <Button>Write a Review</Button>
              </div>

              {/* Review Items */}
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                          <img
                            src={`/placeholder.svg?height=40&width=40&text=U${review}`}
                            alt={`User ${review}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Customer Name</p>
                          <p className="text-xs text-gray-500">May {10 + review}, 2023</p>
                        </div>
                      </div>
                      <div className="flex">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < (5 - (review % 2)) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                            />
                          ))}
                      </div>
                    </div>
                    <h4 className="font-medium mb-1">Great quality and freshness!</h4>
                    <p className="text-gray-600">
                      These apples are amazing! They arrived fresh and were perfectly ripe. Will definitely order again.
                      The taste is exceptional and they've lasted well in the refrigerator.
                    </p>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full">
                Load More Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Link href={`/products/${i + 10}`} key={i} className="group">
                <div className="rounded-lg border bg-white overflow-hidden transition-all hover:shadow-md">
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img
                      src={`/placeholder.svg?height=300&width=300&text=Related ${i + 1}`}
                      alt={`Related Product ${i + 1}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-1">Vendor Name</div>
                    <h3 className="font-medium mb-1 group-hover:text-emerald-600 transition-colors">
                      Related Product {i + 1}
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
                      <span className="text-xs text-gray-500">(18)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-emerald-600">$7.99</div>
                      <Button size="sm" className="h-8 bg-emerald-600 hover:bg-emerald-700">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Products */}
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/products" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
