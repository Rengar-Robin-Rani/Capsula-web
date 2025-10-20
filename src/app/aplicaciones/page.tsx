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
    features: ["Control de inventario", "Punto de venta", "Gestión de clientes", "Análisis de ventas"],
    image: "/retail-pos-system.jpg",
  },
  {
    id: "capsula-fitness",
    name: "Capsula Fitness",
    description: "Gestión completa para gimnasios y centros deportivos con seguimiento de miembros.",
    icon: Dumbbell,
    status: "coming-soon",
    features: ["Gestión de membresías", "Clases y horarios", "Control de acceso", "Planes de entrenamiento"],
    image: "/gym-management-software.jpg",
  },
  {
    id: "capsula-restaurant",
    name: "Capsula Restaurant",
    description: "Sistema de gestión para restaurantes y cafeterías con control de mesas y pedidos.",
    icon: UtensilsCrossed,
    status: "coming-soon",
    features: ["Gestión de mesas", "Pedidos en línea", "Control de cocina", "Gestión de menú"],
    image: "/restaurant-management-system.png",
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
                  className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={app.image || "/placeholder.svg"}
                      alt={app.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      {app.status === "coming-soon" && <Badge variant="secondary">Próximamente</Badge>}
                      {app.status === "available" && (
                        <Badge className="bg-primary text-primary-foreground">Disponible</Badge>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl text-foreground">{app.name}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{app.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {app.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full group"
                      variant={app.status === "available" ? "default" : "outline"}
                    >
                      <Link href={`/aplicaciones/${app.id}`}>
                        {app.status === "available" ? "Ver Detalles" : "Más Información"}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
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
