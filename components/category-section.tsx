"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface Brand {
  name: string
  url: string
  description: string
  logo?: string
}

interface CategorySectionProps {
  title: string
  description: string
  brands: Brand[]
  icon: React.ReactNode
}

export function CategorySection({ title, description, brands, icon }: CategorySectionProps) {
  const handleBrandClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
          </div>
          <h2 className="text-3xl font-bold text-balance mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50"
              onClick={() => handleBrandClick(brand.url)}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  {brand.logo ? (
                    <div className="w-16 h-16 mx-auto relative">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                      {brand.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{brand.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{brand.description}</p>
                <div className="flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Visit Store</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
