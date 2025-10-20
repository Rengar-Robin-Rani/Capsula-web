import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AppCarousel } from "@/components/app-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Zap, Shield, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Soluciones de Software <span className="text-primary">Innovadoras</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-pretty">
            Creamos soluciones mediante software para optimizar tu negocio y llevar tu empresa al siguiente nivel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary text-black hover:bg-primary/90">
              <Link href="/aplicaciones">Ver Aplicaciones</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">¿Por qué elegir Capsula Software?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Tecnología Moderna</h3>
                <p className="text-gray-400 text-sm">
                  Utilizamos las últimas tecnologías para crear soluciones robustas y escalables
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rápido y Eficiente</h3>
                <p className="text-gray-400 text-sm">
                  Optimizamos cada proceso para que tu negocio funcione sin interrupciones
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Seguro y Confiable</h3>
                <p className="text-gray-400 text-sm">
                  Tus datos están protegidos con los más altos estándares de seguridad
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Soporte Dedicado</h3>
                <p className="text-gray-400 text-sm">
                  Nuestro equipo está siempre disponible para ayudarte cuando lo necesites
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apps Carousel Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Nuestras Aplicaciones</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Descubre nuestras soluciones diseñadas específicamente para diferentes industrias
          </p>
          <AppCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo nuestras soluciones pueden ayudarte a alcanzar tus objetivos
          </p>
          <Button size="lg" asChild className="bg-primary text-black hover:bg-primary/90">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
