"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Instagram, Phone } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // ⚙️ Tu número de WhatsApp (sin +, ni espacios)
  const whatsappNumber = "3417058151"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 🧾 Crear texto preformateado para WhatsApp
    const text = `Hola! 👋 Soy ${name}.
Mi correo es: ${email}
Mensaje: ${message}`

    // 🔗 Armar el link con encodeURIComponent para evitar errores con acentos y espacios
    const whatsappURL = `https://wa.me/${3417058151}?text=${encodeURIComponent(text)}`

    // 🪄 Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-24 mt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contáctanos</h1>
        <p className="text-gray-400 max-w-2xl">
          Completá el formulario y te responderemos directamente por WhatsApp 📱
        </p>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 sm:px-10 lg:px-20 py-20 bg-card/30">
        {/* 🧾 Formulario */}
        <div className="flex-1 bg-black/30 border border-gray-800 rounded-2xl p-8 shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-bold text-white mb-6">Enviar mensaje por WhatsApp</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-gray-300 mb-2">Nombre</label>
              <input
                type="text"
                required
                maxLength={50}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-gray-900 border border-gray-700 p-3 text-white focus:outline-none focus:border-emerald-500"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Correo electrónico</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-gray-900 border border-gray-700 p-3 text-white focus:outline-none focus:border-emerald-500"
                placeholder="tu@email.com"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-gray-300 mb-2">Mensaje</label>
              <textarea
                required
                rows={5}
                maxLength={500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg bg-gray-900 border border-gray-700 p-3 text-white focus:outline-none focus:border-emerald-500"
                placeholder="Escribí tu mensaje aquí..."
              ></textarea>
            </div>

            {/* Botón */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-emerald-600/80 text-black hover:bg-emerald-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300"
            >
              Enviar por WhatsApp
            </Button>
          </form>
        </div>

        {/* Contactos directos */}
        <div className="flex-1 flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">O contactanos directamente</h2>
          <p className="text-gray-400 mb-6">
            También podés escribirnos por cualquiera de estos medios 👇
          </p>

          <div className="space-y-4 w-full">
            <a
              href="mailto:contacto@capsulasoftware.com"
              className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-lg border border-gray-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <Mail className="text-emerald-400 w-6 h-6" />
              <span className="text-white">contacto@capsulasoftware.com</span>
            </a>

            <a
              href="https://www.instagram.com/capsula.software/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-lg border border-gray-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <Instagram className="text-emerald-400 w-6 h-6" />
              <span className="text-white">@capsulasoftware</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-lg border border-gray-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <Phone className="text-emerald-400 w-6 h-6" />
              <span className="text-white">+54 9 341 7058151</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
