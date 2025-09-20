import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { Footer } from "@/components/footer"
import { Shirt, Baby, Dumbbell, ShoppingBasket, Sparkles } from "lucide-react"

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

const babyCarebrands = [
  {
    name: "FirstCry",
    url: "https://www.firstcry.com",
    description: "Complete baby and kids shopping destination",
    logo: "/logos/firstcry.jpg",
  },
  {
    name: "MeeMee",
    url: "https://www.meemee.in",
    description: "Trusted baby care products and accessories",
    logo: "/logos/meemee.png",
  },
  {
    name: "Pampers",
    url: "https://www.pampers.com/en-in",
    description: "Premium baby diapers and care products",
    logo: "/logos/pampers.png",
  },
  {
    name: "Johnson's Baby",
    url: "https://www.johnsonsbaby.in",
    description: "Gentle baby care essentials",
    logo: "/logos/johnsons.png",
  },
  {
    name: "Chicco",
    url: "https://www.chicco.in",
    description: "Italian baby products and gear",
    logo: "/logos/chicco.png",
  },
  {
    name: "Mothercare",
    url: "https://www.mothercare.in",
    description: "Everything for moms and babies",
    logo: "/logos/mothercare.png",
  },
]

const fitnessBrands = [
  {
    name: "HealthKart",
    url: "https://www.healthkart.com",
    description: "Supplements and fitness nutrition",
    logo: "/logos/healthkart.jpg",
  },
  {
    name: "Cult.fit",
    url: "https://www.cult.fit",
    description: "Fitness classes and wellness programs",
    logo: "/logos/cultfit.png",
  },
  {
    name: "Decathlon",
    url: "https://www.decathlon.in",
    description: "Sports equipment and activewear",
    logo: "/logos/decathlon.jpg",
  },
  {
    name: "Adidas",
    url: "https://www.adidas.co.in",
    description: "Performance sportswear and equipment",
    logo: "/logos/adidas.jpg",
  },
  {
    name: "Reebok",
    url: "https://www.reebok.in",
    description: "Fitness apparel and training gear",
    logo: "/logos/reebok.png",
  },
  {
    name: "Under Armour",
    url: "https://www.underarmour.in",
    description: "Athletic performance wear",
    logo: "/logos/underarmour.png",
  },
]

const dailyCareBrands = [
  {
    name: "BigBasket",
    url: "https://www.bigbasket.com",
    description: "Fresh groceries and daily essentials",
    logo: "/logos/bigbasket.jpg",
  },
  {
    name: "JioMart",
    url: "https://www.jiomart.com",
    description: "Online grocery shopping made easy",
    logo: "/logos/jiomart.jpg",
  },
  {
    name: "Blinkit",
    url: "https://blinkit.com",
    description: "Quick grocery delivery service",
    logo: "/logos/blinkit.jpg",
  },
  {
    name: "Amazon Fresh",
    url: "https://www.amazon.in/fresh",
    description: "Fresh produce and pantry staples",
    logo: "/logos/amazon-fresh.png",
  },
  {
    name: "Swiggy Instamart",
    url: "https://www.swiggy.com/instamart",
    description: "Instant grocery delivery",
    logo: "/logos/swiggy.jpg",
  },
  {
    name: "Zepto",
    url: "https://www.zepto.co.in",
    description: "10-minute grocery delivery",
    logo: "/logos/zepto.jpg",
  },
]

const skinCareBrands = [
  {
    name: "Nykaa",
    url: "https://www.nykaa.com",
    description: "Beauty and cosmetics superstore",
    logo: "/logos/nykaa.jpg",
  },
  {
    name: "MyGlamm",
    url: "https://www.myglamm.com",
    description: "Premium beauty and skincare products",
    logo: "/logos/myglamm.png",
  },
  {
    name: "Purplle",
    url: "https://www.purplle.com",
    description: "Beauty products at great prices",
    logo: "/logos/purplle.png",
  },
  {
    name: "Sephora",
    url: "https://www.sephora.nykaa.com",
    description: "Luxury beauty and skincare",
    logo: "/logos/sephora.png",
  },
  {
    name: "The Body Shop",
    url: "https://www.thebodyshop.in",
    description: "Natural and ethical beauty products",
    logo: "/logos/bodyshop.png",
  },
  {
    name: "Lakme",
    url: "https://www.lakmeindia.com",
    description: "Indian beauty brand for modern women",
    logo: "/logos/lakme.png",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />

        <CategorySection
          title="Fashion & Clothing"
          description="Discover the latest trends and timeless classics from top fashion retailers worldwide"
          brands={clothingBrands}
          icon={<Shirt className="h-8 w-8 text-primary" />}
        />

        <CategorySection
          title="Baby Care"
          description="Everything you need for your little ones, from trusted brands that care"
          brands={babyCarebrands}
          icon={<Baby className="h-8 w-8 text-primary" />}
        />

        <CategorySection
          title="Fitness & Sports"
          description="Gear up for your fitness journey with premium sports and wellness brands"
          brands={fitnessBrands}
          icon={<Dumbbell className="h-8 w-8 text-primary" />}
        />

        <CategorySection
          title="Daily Essentials"
          description="Fresh groceries and daily necessities delivered to your doorstep"
          brands={dailyCareBrands}
          icon={<ShoppingBasket className="h-8 w-8 text-primary" />}
        />

        <CategorySection
          title="Beauty & Skincare"
          description="Pamper yourself with premium beauty and skincare products"
          brands={skinCareBrands}
          icon={<Sparkles className="h-8 w-8 text-primary" />}
        />
      </main>
      <Footer />
    </div>
  )
}
