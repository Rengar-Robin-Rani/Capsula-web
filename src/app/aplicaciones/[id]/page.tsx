import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft } from "lucide-react"

const applicationsData = {
  "capsula-barber": {
    name: "Capsula Barber",
    tagline: "La solución completa para tu barbería",
    description:
      "Capsula Barber es un sistema integral diseñado específicamente para barberías modernas. Gestiona todos los aspectos de tu negocio desde una sola plataforma.",
    status: "available",
    image: "/modern-barbershop-interior-with-digital-screens.jpg",
    features: [
      "Gestión inteligente de turnos con recordatorios automáticos",
      "Control completo de peluqueros y sus horarios",
      "Administración de sillones y espacios de trabajo",
      "Sistema de clientes con historial de servicios",
      "Reportes detallados y estadísticas de rendimiento",
      "Gestión de inventario de productos",
      "Sistema de pagos integrado",
      "Aplicación móvil para clientes",
    ],
    benefits: [
      "Reduce el tiempo de gestión administrativa en un 70%",
      "Aumenta la satisfacción del cliente con recordatorios automáticos",
      "Optimiza el uso de recursos y espacios",
      "Mejora la rentabilidad con análisis detallados",
    ],
  },
  "capsula-retail": {
    name: "Capsula Retail",
    tagline: "Gestión moderna para tu comercio",
    description:
      "Próximamente: Una solución completa para comercios minoristas que integra punto de venta, inventario y análisis de ventas.",
    status: "coming-soon",
    image: "/modern-retail-store-with-pos-system.jpg",
    features: [
      "Punto de venta intuitivo y rápido",
      "Control de inventario en tiempo real",
      "Gestión de múltiples sucursales",
      "Sistema de fidelización de clientes",
      "Reportes de ventas y análisis",
      "Integración con e-commerce",
    ],
    benefits: [
      "Agiliza el proceso de venta",
      "Evita quiebres de stock",
      "Fideliza a tus clientes",
      "Toma decisiones basadas en datos",
    ],
  },
  "capsula-fitness": {
    name: "Capsula Fitness",
    tagline: "Potencia tu gimnasio",
    description:
      "Próximamente: Sistema completo de gestión para gimnasios y centros deportivos con seguimiento de miembros y clases.",
    status: "coming-soon",
    image: "/modern-gym-with-digital-management.jpg",
    features: [
      "Gestión de membresías y pagos",
      "Programación de clases y entrenadores",
      "Control de acceso automatizado",
      "Planes de entrenamiento personalizados",
      "Seguimiento de progreso de miembros",
      "Aplicación móvil para miembros",
    ],
    benefits: [
      "Automatiza la gestión de membresías",
      "Mejora la experiencia de tus miembros",
      "Optimiza la ocupación de clases",
      "Aumenta la retención de clientes",
    ],
  },
  "capsula-restaurant": {
    name: "Capsula Restaurant",
    tagline: "Gestión eficiente para tu restaurante",
    description:
      "Próximamente: Sistema integral para restaurantes y cafeterías con gestión de mesas, pedidos y cocina.",
    status: "coming-soon",
    image: "/modern-restaurant-with-digital-ordering.jpg",
    features: [
      "Gestión de mesas y reservas",
      "Sistema de pedidos digital",
      "Control de cocina en tiempo real",
      "Gestión de menú y precios",
      "Integración con delivery",
      "Reportes de ventas por producto",
    ],
    benefits: [
      "Reduce errores en pedidos",
      "Agiliza el servicio",
      "Optimiza la rotación de mesas",
      "Mejora la comunicación cocina-salón",
    ],
  },
}

export default function AplicacionDetailPage({ params }: { params: { id: string } }) {
  const app = applicationsData[params.id as keyof typeof applicationsData]

  if (!app) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/aplicaciones">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Aplicaciones
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold text-foreground">{app.name}</h1>
                {app.status === "coming-soon" && (
                  <Badge variant="secondary" className="text-sm">
                    Próximamente
                  </Badge>
                )}
                {app.status === "available" && (
                  <Badge className="bg-primary text-primary-foreground text-sm">Disponible</Badge>
                )}
              </div>
              <p className="text-xl text-primary mb-4">{app.tagline}</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">{app.description}</p>

              <Card className="bg-card border-border mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Características Principales</h3>
                  <ul className="space-y-3">
                    {app.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Beneficios</h3>
                  <ul className="space-y-3">
                    {app.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="rounded-lg overflow-hidden mb-6">
                <img src={app.image || "/placeholder.svg"} alt={app.name} className="w-full h-auto" />
              </div>

              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {app.status === "available" ? "¿Interesado en esta solución?" : "¿Quieres saber más?"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {app.status === "available"
                      ? "Contáctanos para obtener una demostración personalizada y descubre cómo podemos ayudarte."
                      : "Regístrate para recibir actualizaciones sobre el lanzamiento de esta aplicación."}
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contacto">
                      {app.status === "available" ? "Solicitar Demo" : "Mantenerme Informado"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
