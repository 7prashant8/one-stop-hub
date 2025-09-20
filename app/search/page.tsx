"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

// Enhanced platform data with product-specific information
const platforms = {
  amazon: {
    name: "Amazon",
    logo: "/logos/amazon.jpg",
    url: "https://amazon.in",
    categories: ["fashion", "electronics", "baby care", "daily care", "beauty", "fitness", "books", "home"],
    products: [
      "shoes",
      "clothes",
      "laptop",
      "mobile",
      "headphones",
      "watch",
      "bag",
      "perfume",
      "skincare",
      "makeup",
      "toys",
      "diapers",
      "protein",
      "supplements",
    ],
  },
  flipkart: {
    name: "Flipkart",
    logo: "/logos/flipkart.jpg",
    url: "https://flipkart.com",
    categories: ["fashion", "electronics", "baby care", "daily care", "beauty", "fitness", "mobiles"],
    products: ["mobile", "laptop", "tv", "shoes", "clothes", "headphones", "watch", "appliances", "toys"],
  },
  myntra: {
    name: "Myntra",
    logo: "/logos/myntra.jpg",
    url: "https://myntra.com",
    categories: ["fashion", "beauty", "accessories"],
    products: ["clothes", "shoes", "dress", "shirt", "jeans", "jacket", "bag", "watch", "sunglasses", "perfume"],
  },
  ajio: {
    name: "Ajio",
    logo: "/logos/ajio.jpg",
    url: "https://ajio.com",
    categories: ["fashion", "beauty", "accessories"],
    products: ["clothes", "shoes", "dress", "shirt", "jeans", "jacket", "bag", "accessories"],
  },
  nykaa: {
    name: "Nykaa",
    logo: "/logos/nykaa.jpg",
    url: "https://nykaa.com",
    categories: ["beauty", "skincare", "makeup"],
    products: ["makeup", "skincare", "perfume", "lipstick", "foundation", "moisturizer", "serum", "shampoo"],
  },
  firstcry: {
    name: "FirstCry",
    logo: "/logos/firstcry.jpg",
    url: "https://firstcry.com",
    categories: ["baby care", "toys", "kids fashion"],
    products: ["toys", "diapers", "baby clothes", "stroller", "baby food", "bottles", "car seat"],
  },
  nike: {
    name: "Nike",
    logo: "/logos/nike.jpg",
    url: "https://nike.com",
    categories: ["fitness", "sports", "shoes"],
    products: ["shoes", "sneakers", "running shoes", "sports shoes", "tracksuit", "shorts", "t-shirt"],
  },
  adidas: {
    name: "Adidas",
    logo: "/logos/adidas.jpg",
    url: "https://adidas.co.in",
    categories: ["fitness", "sports", "shoes"],
    products: ["shoes", "sneakers", "running shoes", "sports shoes", "tracksuit", "shorts", "jersey"],
  },
  bigbasket: {
    name: "BigBasket",
    logo: "/logos/bigbasket.jpg",
    url: "https://bigbasket.com",
    categories: ["daily care", "groceries", "household"],
    products: ["groceries", "vegetables", "fruits", "milk", "bread", "rice", "oil", "soap", "detergent"],
  },
  decathlon: {
    name: "Decathlon",
    logo: "/logos/decathlon.jpg",
    url: "https://decathlon.in",
    categories: ["fitness", "sports", "outdoor"],
    products: ["gym equipment", "bicycle", "treadmill", "dumbbells", "yoga mat", "sports gear", "camping"],
  },
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const getRelevantPlatforms = (searchQuery: string) => {
    const lowerQuery = searchQuery.toLowerCase().trim()
    const queryWords = lowerQuery.split(" ")
    const relevantPlatforms = []

    // Score each platform based on relevance
    for (const [key, platform] of Object.entries(platforms)) {
      let score = 0
      let matchType = ""

      // Direct brand name match (highest priority)
      if (lowerQuery.includes(platform.name.toLowerCase())) {
        score += 100
        matchType = "brand"
      }

      // Exact product match
      const exactProductMatch = platform.products.some(
        (product) => lowerQuery.includes(product) || product.includes(lowerQuery),
      )
      if (exactProductMatch) {
        score += 80
        matchType = matchType || "exact_product"
      }

      // Partial product match
      const partialProductMatch = platform.products.some((product) =>
        queryWords.some((word) => product.includes(word) || word.includes(product)),
      )
      if (partialProductMatch && !exactProductMatch) {
        score += 60
        matchType = matchType || "partial_product"
      }

      // Category match
      const categoryMatch = platform.categories.some(
        (category) => lowerQuery.includes(category) || queryWords.some((word) => category.includes(word)),
      )
      if (categoryMatch) {
        score += 40
        matchType = matchType || "category"
      }

      // Add platform if it has any relevance
      if (score > 0) {
        let relevance = "low"
        if (score >= 80) relevance = "high"
        else if (score >= 60) relevance = "medium"

        relevantPlatforms.push({
          key,
          ...platform,
          relevance,
          score,
          matchType,
        })
      }
    }

    // Sort by score (highest first)
    relevantPlatforms.sort((a, b) => b.score - a.score)

    // If no matches found, show top general platforms
    if (relevantPlatforms.length === 0) {
      const generalPlatforms = ["amazon", "flipkart", "myntra", "nykaa"]
      generalPlatforms.forEach((key) => {
        relevantPlatforms.push({
          key,
          ...platforms[key as keyof typeof platforms],
          relevance: "low",
          score: 10,
          matchType: "general",
        })
      })
    }

    return relevantPlatforms.slice(0, 8) // Limit to 8 results
  }

  const relevantPlatforms = getRelevantPlatforms(query)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Search Results for "{query}"</h1>
          <p className="text-muted-foreground">
            Found {relevantPlatforms.length} platforms where you can find "{query}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relevantPlatforms.map((platform) => (
            <Card key={platform.key} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Platform Logo */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white p-2">
                    <Image
                      src={platform.logo || "/placeholder.svg"}
                      alt={`${platform.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-lg font-semibold text-foreground">{platform.name}</h3>

                  <Badge
                    variant={
                      platform.relevance === "high"
                        ? "default"
                        : platform.relevance === "medium"
                          ? "secondary"
                          : "outline"
                    }
                    className="text-xs"
                  >
                    {platform.matchType === "brand"
                      ? "Brand Match"
                      : platform.matchType === "exact_product"
                        ? "Perfect Match"
                        : platform.matchType === "partial_product"
                          ? "Good Match"
                          : platform.matchType === "category"
                            ? "Category Match"
                            : "Available"}
                  </Badge>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {platform.categories.slice(0, 3).map((category) => (
                      <span key={category} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Visit Button */}
                  <a
                    href={`${platform.url}/s?k=${encodeURIComponent(query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:bg-primary/80"
                  >
                    Search on {platform.name}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {relevantPlatforms.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-foreground mb-2">No results found</h2>
            <p className="text-muted-foreground">Try searching with different keywords or browse our categories.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  )
}
