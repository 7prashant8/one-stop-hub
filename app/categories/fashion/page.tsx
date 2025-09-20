import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategorySection } from "@/components/category-section"
import { Shirt } from "lucide-react"

const clothingBrands = [
  {
    name: "Amazon Fashion",
    url: "https://www.amazon.in/fashion",
    description: "Vast selection of clothing for all ages and styles",
    logo: "/logos/amazon.jpg",
  },
  {
    name: "Flipkart Fashion",
    url: "https://www.flipkart.com/clothing-and-accessories",
    description: "Trendy fashion at affordable prices",
    logo: "/logos/flipkart.jpg",
  },
  {
    name: "Myntra",
    url: "https://www.myntra.com",
    description: "India's leading fashion destination",
    logo: "/logos/myntra.jpg",
  },
  {
    name: "Ajio",
    url: "https://www.ajio.com",
    description: "Curated fashion from global and Indian brands",
    logo: "/logos/ajio.jpg",
  },
  {
    name: "H&M",
    url: "https://www2.hm.com/en_in/index.html",
    description: "Sustainable fashion for the conscious shopper",
    logo: "/logos/hm.jpg",
  },
  {
    name: "Zara",
    url: "https://www.zara.com/in/",
    description: "Latest fashion trends from Spain",
    logo: "/logos/zara.jpg",
  },
  {
    name: "Uniqlo",
    url: "https://www.uniqlo.com/in/en/",
    description: "Japanese casual wear essentials",
    logo: "/logos/uniqlo.jpg",
  },
  {
    name: "Nike",
    url: "https://www.nike.com/in/",
    description: "Athletic wear and sportswear",
    logo: "/logos/nike.jpg",
  },
]

export default function FashionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CategorySection
          title="Fashion & Clothing"
          description="Discover the latest trends and timeless classics from top fashion retailers worldwide"
          brands={clothingBrands}
          icon={<Shirt className="h-8 w-8 text-primary" />}
        />
      </main>
      <Footer />
    </div>
  )
}
