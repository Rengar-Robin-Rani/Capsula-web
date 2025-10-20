"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-white">Cápsula Software</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/aplicaciones" className="text-white hover:text-primary transition-colors">
              Productos
            </Link>
            <Link href="/preguntas-frecuentes" className="text-white hover:text-primary transition-colors">
              Preguntas frecuentes
            </Link>
            <Button asChild className="bg-primary text-black hover:bg-primary/90">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/aplicaciones"
              className="block text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/preguntas-frecuentes"
              className="block text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Preguntas frecuentes
            </Link>
            <Button asChild className="w-full bg-primary text-black hover:bg-primary/90">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
