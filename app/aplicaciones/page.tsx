import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Scissors, ShoppingBag, Dumbbell, UtensilsCrossed } from "lucide-react"

const applications = [
  {
    id: "capsula-barber",
    name: "Capsula Barber",
    description: "Sistema completo de gestión para barberías. Administra turnos, peluqueros, sillones y más.",
    icon: Scissors,
    status: "available",
    features: ["Gestión de turnos", "Control de peluqueros", "Administración de sillones", "Reportes y estadísticas"],
    image: "/barbershop-management-dashboard.png",
  },
  {
    id: "capsula-retail",
    name: "Capsula Retail",
    description: "Solución integral para comercios minoristas con control de inventario y ventas.",
    icon: ShoppingBag,
    status: "coming-soon",
    features: ["Proximamente podras ver las características que te ofrece esta aplicacion"],
    image: "/Logo-proximamente.webp",
  },
  {
    id: "capsula-fitness",
    name: "Capsula Fitness",
    description: "Gestión completa para gimnasios y centros deportivos con seguimiento de miembros.",
    icon: Dumbbell,
    status: "coming-soon",
    features: ["Proximamente podras ver las características que te ofrece esta aplicacion"],
    image: "/Logo-proximamente.webp",
  },
  {
    id: "capsula-restaurant",
    name: "Capsula Restaurant",
    description: "Sistema de gestión para restaurantes y cafeterías con control de mesas y pedidos.",
    icon: UtensilsCrossed,
    status: "coming-soon",
    features: ["Proximamente podras ver las características que te ofrece esta aplicacion"],
    image: "/Logo-proximamente.webp",
  },
]

export default function AplicacionesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Nuestras Aplicaciones</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones especializadas para diferentes industrias, diseñadas para optimizar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app) => {
              const Icon = app.icon
              return (
          <Card
                key={app.id}
                className="bg-card border-border overflow-hidden group hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col"
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    {app.status === "coming-soon" && <Badge variant="secondary">Próximamente</Badge>}
                    {app.status === "available" && (
                      <Badge className="bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        Disponible
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Contenido + botón */}
                <div className="flex flex-col flex-1 justify-between p-4 sm:p-6">
                  {/* Encabezado y descripción */}
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {app.name}
                        </CardTitle>
                      </div>
                      <p className="text-muted-foreground">{app.description}</p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <ul className="space-y-2">
                        {app.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-muted-foreground group-hover:text-gray-300 transition-colors duration-300"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>

                  {/* 🔽 Botón bien separado y abajo */}
                  <CardFooter className="p-0 pt-6 mt-auto">
                    <Button
                      asChild
                      className="w-full group/btn hover:scale-105 transition-all duration-300"
                      variant={app.status === "available" ? "default" : "default"}
                    >
                      <Link href={`/aplicaciones/${app.id}`}>
                        {app.status === "available" ? "Ver Detalles" : "Más Información"}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>

              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
