import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Your Gateway to <span className="text-primary">Every Shopping</span> Destination
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Discover all your favorite shopping websites organized by categories. From fashion to fitness, baby care to
            daily essentials - find everything in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-shopping">
              <Button size="lg" className="text-lg px-8">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Shopping
              </Button>
            </Link>
            <Link href="/explore-categories">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Explore Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
