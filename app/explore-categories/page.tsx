import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shirt, Baby, Dumbbell, ShoppingBasket, Sparkles, Smartphone } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Fashion & Clothing",
    description: "Discover the latest trends and timeless classics from top fashion retailers",
    icon: <Shirt className="h-12 w-12 text-primary" />,
    brands: ["Amazon Fashion", "Myntra", "Ajio", "H&M", "Zara", "Nike"],
    href: "/categories/fashion",
    color: "bg-blue-50 border-blue-200",
  },
  {
    title: "Electronics & Gadgets",
    description: "Latest smartphones, laptops, and tech accessories from trusted brands",
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    brands: ["Amazon", "Flipkart", "Croma", "Vijay Sales"],
    href: "/categories/electronics",
    color: "bg-purple-50 border-purple-200",
  },
  {
    title: "Baby Care",
    description: "Everything you need for your little ones from trusted baby care brands",
    icon: <Baby className="h-12 w-12 text-primary" />,
    brands: ["FirstCry", "MeeMee", "Pampers", "Johnson's", "Chicco"],
    href: "/categories/baby-care",
    color: "bg-pink-50 border-pink-200",
  },
  {
    title: "Fitness & Sports",
    description: "Gear up for your fitness journey with premium sports and wellness brands",
    icon: <Dumbbell className="h-12 w-12 text-primary" />,
    brands: ["Decathlon", "Nike", "Adidas", "HealthKart", "Cult.fit"],
    href: "/categories/fitness",
    color: "bg-orange-50 border-orange-200",
  },
  {
    title: "Daily Essentials",
    description: "Fresh groceries and daily necessities delivered to your doorstep",
    icon: <ShoppingBasket className="h-12 w-12 text-primary" />,
    brands: ["BigBasket", "JioMart", "Blinkit", "Zepto", "Swiggy"],
    href: "/categories/daily-care",
    color: "bg-green-50 border-green-200",
  },
  {
    title: "Beauty & Skincare",
    description: "Pamper yourself with premium beauty and skincare products",
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    brands: ["Nykaa", "MyGlamm", "Purplle", "Sephora", "Lakme"],
    href: "/categories/beauty",
    color: "bg-rose-50 border-rose-200",
  },
]

export default function ExploreCategoriesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Explore Shopping Categories</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Browse through our carefully organized categories to find exactly what you're looking for. Each category
              features the best brands and platforms for that specific type of shopping.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 ${category.color}`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{category.icon}</div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-6 text-pretty">{category.description}</p>

                  {/* Popular Brands */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Popular Brands:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {category.brands.slice(0, 4).map((brand, brandIndex) => (
                        <span key={brandIndex} className="text-xs bg-white/80 text-muted-foreground px-2 py-1 rounded">
                          {brand}
                        </span>
                      ))}
                      {category.brands.length > 4 && (
                        <span className="text-xs bg-white/80 text-muted-foreground px-2 py-1 rounded">
                          +{category.brands.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link href={category.href}>
                    <Button className="w-full group-hover:bg-primary/90">Explore Category</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Use our smart search feature to find specific products across all platforms, or browse all brands to
              discover new shopping destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#search">
                <Button size="lg" className="w-full sm:w-auto">
                  Search Products
                </Button>
              </Link>
              <Link href="/#categories">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  View All Brands
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
