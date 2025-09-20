import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shirt, Baby, Dumbbell, ShoppingBasket, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Fashion & Clothing",
    description: "Discover the latest trends and timeless classics from top fashion retailers worldwide",
    icon: <Shirt className="h-12 w-12 text-primary" />,
    slug: "fashion",
    brandCount: 8,
  },
  {
    title: "Baby Care",
    description: "Everything you need for your little ones, from trusted brands that care",
    icon: <Baby className="h-12 w-12 text-primary" />,
    slug: "baby-care",
    brandCount: 6,
  },
  {
    title: "Fitness & Sports",
    description: "Gear up for your fitness journey with premium sports and wellness brands",
    icon: <Dumbbell className="h-12 w-12 text-primary" />,
    slug: "fitness",
    brandCount: 6,
  },
  {
    title: "Daily Essentials",
    description: "Fresh groceries and daily necessities delivered to your doorstep",
    icon: <ShoppingBasket className="h-12 w-12 text-primary" />,
    slug: "daily-essentials",
    brandCount: 6,
  },
  {
    title: "Beauty & Skincare",
    description: "Pamper yourself with premium beauty and skincare products",
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    slug: "beauty",
    brandCount: 6,
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-balance mb-4">Browse Categories</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Explore our organized collection of shopping destinations across different categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={`/categories/${category.slug}`}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="mb-6">
                      <div className="p-4 bg-primary/10 rounded-full inline-flex">{category.icon}</div>
                    </div>
                    <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-pretty flex-grow">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{category.brandCount} brands</span>
                      <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium mr-1">Explore</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
