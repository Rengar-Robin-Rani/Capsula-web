"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const apps = [
  {
    id: "capsula-barber",
    name: "Capsula Barber",
    description: "Sistema completo de gestión para barberías",
    status: "available",
    image: "/barbershop-management-dashboard.png",
  },
  {
    id: "capsula-retail",
    name: "Capsula Retail",
    description: "Solución integral para comercios minoristas",
    status: "coming-soon",
    image: "/Logo-proximamente.webp",
  },
  {
    id: "capsula-fitness",
    name: "Capsula Fitness",
    description: "Gestión completa para gimnasios y centros deportivos",
    status: "coming-soon",
    image: "/Logo-proximamente.webp",
  },
  {
    id: "capsula-restaurant",
    name: "Capsula Restaurant",
    description: "Sistema de gestión para restaurantes y cafeterías",
    status: "coming-soon",
    image: "/Logo-proximamente.webp",
  },
]

export function AppCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % apps.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + apps.length) % apps.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % apps.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="overflow-hidden bg-card border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
        <CardContent className="p-0">
          <div className="relative h-[400px] sm:h-[450px]">
            <Link
                href={`/aplicaciones/${apps[currentIndex].id}`}
                className="group block relative h-full"
              >
                {/* Imagen principal */}
                <img
                  src={apps[currentIndex].image || "/placeholder.svg"}
                  alt={apps[currentIndex].name}
                  className="w-full h-full object-cover transition-transform duration-700 cursor-pointer"
                />

                {/* Gradiente que aparece al hacer hover */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-full w-full" />
                  {/* Texto sobre la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 w-full pointer-events-none">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 transition-colors duration-300">
                        {apps[currentIndex].name}
                      </h3>
                      {apps[currentIndex].status === "coming-soon" && (
                        <Badge variant="secondary">Próximamente</Badge>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-300">
                      {apps[currentIndex].description}
                    </p>
                  </div>
                </div>
              </Link>

                {/* 🧩 Gradiente visual sin bloquear clics */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                <div className="p-4 sm:p-6 w-full pointer-events-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {apps[currentIndex].name}
                    </h3>
                    {apps[currentIndex].status === "coming-soon" && (
                      <Badge variant="secondary">Próximamente</Badge>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {apps[currentIndex].description}
                  </p>
                </div>
              </div>
          </div>
        </CardContent>
      </Card>

      <Button
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/30 backdrop-blur-sm hover:bg-primary hover:text-black hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/30 backdrop-blur-sm hover:bg-primary hover:text-black hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center gap-2 mt-4">
        {apps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 hover:bg-primary ${
              index === currentIndex ? "bg-primary w-8" : "bg-muted w-2 hover:w-4"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
