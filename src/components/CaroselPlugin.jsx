"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { useContext } from "react"
import { AppContext } from "@/context/AppProvider"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const { products, loading } = useContext(AppContext)

  // FIX 1: Use the plugin directly or within a useMemo for stability
  const autoplayPlugin = React.useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: false }),
    []
  )

  if (loading) return <div className="text-center p-10">Loading Gallery...</div>

  return (
    <Carousel
      // FIX 2: Add loop: true to options so it doesn't stop at the end
      opts={{
        loop: true,
      }}
      plugins={[autoplayPlugin]}
      className="w-full max-w-lg mx-auto"
      // Optional: keep these if you want it to pause when you hover
      onMouseEnter={() => autoplayPlugin.stop()}
      onMouseLeave={() => autoplayPlugin.play()}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <div className="p-1">
              <Card className="overflow-hidden relative">
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <img 
                    src={product.thumbnail} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-sm text-center">
                    {product.title}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}