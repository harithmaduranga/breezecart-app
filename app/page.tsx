import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, Shield, Truck, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">BreezeCart</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#vendors" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Vendors
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Login
            </Link>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Shop Local, Delivered Fast with <span className="text-emerald-600">BreezeCart</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Connect with local vendors, automate your weekly shopping, and enjoy secure blockchain-powered
                  transactions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="/register">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#vendors">Browse Vendors</Link>
                  </Button>
                </div>
              </div>
              <div className="relative lg:pl-10">
                <div className="relative overflow-hidden rounded-xl border shadow-xl">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="BreezeCart App Interface"
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose BreezeCart?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform combines convenience, security, and local support in one seamless experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Blockchain Security</h3>
                <p className="text-center text-gray-500">
                  Every transaction is secured with blockchain technology for maximum protection and transparency.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Truck className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Weekly Auto-Ordering</h3>
                <p className="text-center text-gray-500">
                  Set up recurring orders for essentials and never run out of your favorite products again.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Support Local Vendors</h3>
                <p className="text-center text-gray-500">
                  Connect directly with local businesses and help your community thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Vendors */}
        <section id="vendors" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Featured Vendors
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Local Partners</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover quality products from trusted vendors in your community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((vendor) => (
                <div
                  key={vendor}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=Vendor ${vendor}`}
                      alt={`Vendor ${vendor}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Vendor Name {vendor}</h3>
                    <p className="text-sm text-gray-500">Fresh produce & organic goods</p>
                    <div className="mt-2 flex items-center text-sm">
                      <div className="flex text-amber-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">4.9 (120 reviews)</span>
                    </div>
                    <Button asChild className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700">
                      <Link href={`/vendors/${vendor}`}>Visit Store</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" className="mt-4 gap-1">
                <Link href="/vendors">
                  View All Vendors
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it - hear from our satisfied customers and vendors.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((testimonial) => (
                <div key={testimonial} className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex text-amber-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic text-gray-600">
                    "BreezeCart has completely transformed how I shop for groceries. The weekly auto-ordering feature
                    saves me so much time!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial}`}
                        alt="User avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Customer Name</p>
                      <p className="text-sm text-gray-500">Loyal Customer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-emerald-600">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to Transform Your Shopping Experience?
              </h2>
              <p className="text-emerald-100 md:text-xl/relaxed">
                Join thousands of satisfied customers and vendors on BreezeCart today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <Link href="/register">Sign Up Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-700">
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-emerald-600" />
            <span className="text-lg font-bold">BreezeCart</span>
          </div>
          <nav className="flex gap-4 md:gap-6 flex-wrap">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
          <div className="md:ml-auto flex gap-4">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Twitter
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Instagram
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Facebook
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
