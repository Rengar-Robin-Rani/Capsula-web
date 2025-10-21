import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AppCarousel } from "@/components/app-carousel"
import { Button } from "@/components/ui/button"
import { Code, Zap, Shield, Users } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Code,
      title: "Tecnología Moderna",
      description: "Utilizamos las últimas tecnologías para crear soluciones robustas y escalables",
    },
    {
      icon: Zap,
      title: "Rápido y Eficiente",
      description: "Optimizamos cada proceso para que tu negocio funcione sin interrupciones",
    },
    {
      icon: Shield,
      title: "Seguro y Confiable",
      description: "Tus datos están protegidos con los más altos estándares de seguridad",
    },
    {
      icon: Users,
      title: "Soporte Dedicado",
      description: "Nuestro equipo está siempre disponible para ayudarte cuando lo necesites",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* 🟢 Hero Section */}
      <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 lg:gap-10 lg:ml-40">
        {/* 🧩 Texto y botones */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluciones de Software <span className="text-primary">Innovadoras</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
            Creamos soluciones mediante software para optimizar tu negocio y llevar tu empresa al siguiente nivel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <Button
              size="lg"
              asChild
              className="bg-primary text-black hover:bg-primary/90 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            >
              <Link href="/aplicaciones">Ver Aplicaciones</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 bg-white/20 transition-all duration-300"
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* 🟢 Logo */}
        <div className="flex lg:flex-1 justify-center items-center mt-30 sm:mt-12 lg:mt-0 lg:mb-10">
          <img
            src="/Logo-capsula.png"
            alt="Logo Cápsula Software"
            className="w-46 sm:w-48 md:w-64 lg:w-[420px] object-contain drop-shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          />
        </div>

      </section>

      {/* 🟣 Features Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-12 sm:mb-16 text-3xl sm:text-4xl font-bold text-white">
            ¿Por qué elegir Cápsula Software?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

                  <div className="relative mb-4 inline-flex rounded-lg bg-emerald-900/30 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-800/40 group-hover:shadow-lg group-hover:shadow-emerald-500/30">
                    <Icon className="h-6 w-6 text-emerald-400 transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  <h3 className="mb-2 text-lg sm:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 🔵 Apps Carousel Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Nuestras Aplicaciones</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Descubre nuestras soluciones diseñadas específicamente para diferentes industrias
          </p>
          <AppCarousel />
        </div>
      </section>

      {/* 🟠 CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Contáctanos hoy y descubre cómo nuestras soluciones pueden ayudarte a alcanzar tus objetivos
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary text-black hover:bg-primary/90 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
          >
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
