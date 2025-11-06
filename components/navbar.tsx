"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Cpu, Code, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Inicio", href: "/", icon: <Zap className="h-5 w-5 text-primary" /> },
    { name: "Productos", href: "/aplicaciones", icon: <Cpu className="h-5 w-5 text-primary" /> },
    { name: "Preguntas frecuentes", href: "/preguntas-frecuentes", icon: <Code className="h-5 w-5 text-primary" /> },
    { name: "Contacto", href: "/contacto", icon: <Shield className="h-5 w-5 text-primary" /> },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-zinc-900 to-black border-b border-primary/20 shadow-lg shadow-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/logo-capsula.png"
              alt="Cápsula Software Logo"
              className="h-10 w-10 transition-transform group-hover:scale-110 duration-300"
            />
            <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
              Cápsula Software
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-white hover:text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary text-black hover:bg-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 font-semibold"
            >
              <a href="https://wa.me/3417058151" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Botón menú */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white hover:text-primary transition-colors"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-black via-zinc-950 to-emerald-950 flex flex-col justify-between border-t border-primary/20 shadow-[inset_0_0_100px_rgba(16,185,129,0.3)]"
          >
            {/* Botón cerrar */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links más arriba y con íconos más cerca */}
            <div className="flex flex-col px-10 space-y-5 mb-120"> {/* 🔼 antes era mt-4 */}
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-white text-[1.35rem] font-semibold hover:text-primary transition-all duration-300 group"
                  >
                    <span className="tracking-wide flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 mr-6"> {/* 🔽 ícono más cerca */}
                      {link.icon}
                    </span>
                  </Link>
                  {/* Línea decorativa */}
                  <div className="w-full h-px bg-gradient-to-r from-emerald-800/50 to-transparent mt-1"></div>
                </motion.div>
              ))}
            </div>

            {/* Botón inferior */}
            <div className="p-8">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-black font-semibold text-lg rounded-full hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-all duration-300"
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  Hablar por WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
