import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Search, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredBrands = [
  {
    name: "Amazon",
    logo: "/logos/amazon.jpg",
    url: "https://amazon.in",
    description: "Everything you need, delivered fast",
    category: "General Shopping",
  },
  {
    name: "Flipkart",
    logo: "/logos/flipkart.jpg",
    url: "https://flipkart.com",
    description: "India's leading e-commerce platform",
    category: "Electronics & Fashion",
  },
  {
    name: "Myntra",
    logo: "/logos/myntra.jpg",
    url: "https://myntra.com",
    description: "Fashion at your fingertips",
    category: "Fashion & Lifestyle",
  },
  {
    name: "Nykaa",
    logo: "/logos/nykaa.jpg",
    url: "https://nykaa.com",
    description: "Beauty and wellness destination",
    category: "Beauty & Skincare",
  },
]

const benefits = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Easy Discovery",
    description: "Find the right platform for any product with our smart search and categorization",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Trusted Brands",
    description: "Shop with confidence from verified and trusted e-commerce platforms",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Save Time",
    description: "No more browsing multiple sites - find everything in one organized hub",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community Driven",
    description: "Discover popular brands and products loved by millions of shoppers",
  },
]

export default function StartShoppingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <ShoppingBag className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Start Your Shopping Journey</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8">
              Welcome to One Stop Hub - your gateway to the best shopping experiences across India's top e-commerce
              platforms. Discover, compare, and shop from hundreds of trusted brands all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Categories
                </Button>
              </Link>
              <Link href="/#categories">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Browse All Brands
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose One Stop Hub?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm text-pretty">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Brands */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Start with Popular Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBrands.map((brand, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-white p-2">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{brand.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{brand.category}</p>
                    <p className="text-xs text-muted-foreground mb-4 text-pretty">{brand.description}</p>
                    <a href={brand.url} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                      >
                        Shop Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Join thousands of smart shoppers who use One Stop Hub to discover the best deals and products across
              India's top e-commerce platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Categories
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Get Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
