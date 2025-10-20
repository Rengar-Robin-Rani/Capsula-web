import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-zinc-950 to-zinc-900 border-t-2 border-primary/30 shadow-[0_-4px_20px_rgba(94,234,212,0.1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
                <span className="text-black font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-white">Capsula Software</span>
            </div>
            <p className="text-gray-400 text-sm">Creamos soluciones mediante software para optimizar tu negocio.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/aplicaciones"
                  className="text-gray-400 hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-gray-400 hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                >
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm hover:text-primary transition-colors duration-300">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@capsulasoftware.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm hover:text-primary transition-colors duration-300">
                <Phone size={16} className="flex-shrink-0" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm hover:text-primary transition-colors duration-300">
                <MapPin size={16} className="flex-shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Capsula Software. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
