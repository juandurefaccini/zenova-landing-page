import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Hero from "./sections/Hero";
import Servicios from "./sections/Servicios";
import PorQueNosotros from "./sections/PorQueNosotros";
import OurTeam from "./sections/OurTeam";
import Contact from "./sections/Contact";
import Hermes from "./sections/Hermes";

export function ZenovaLanding() {
  return (
    <div className="flex flex-col bg-gray-950 min-h-screen text-gray-100">
      <header className="top-0 z-50 sticky border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 border-b w-full">
        <div className="flex justify-between items-center mx-auto px-4 md:px-8 h-16 container">
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold text-xl">Zenova</span>
          </a>
          <nav className="md:flex items-center space-x-6 hidden font-medium text-sm">
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors"
              href="#servicios"
            >
              Servicios
            </a>
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors"
              href="#por-que-nosotros"
            >
              Por qué nosotros
            </a>
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors"
              href="#equipo"
            >
              Equipo
            </a>
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors"
              href="#hermes"
            >
              Hermes
            </a>
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors"
              href="#contacto"
            >
              Contacto
            </a>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <Hero />
        <Servicios />
        <PorQueNosotros />
        <Hermes />
        <OurTeam />
        <Contact />
      </main>
      <footer className="border-gray-800 bg-gray-950 py-6 border-t w-full">
        <div className="px-4 md:px-6 container">
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            <p className="text-center text-gray-400 text-sm">
              © 2024 Zenova. Todos los derechos reservados.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <a
                className="text-gray-400 text-sm hover:text-gray-100 underline-offset-4 hover:underline"
                href="#servicios"
              >
                Servicios
              </a>
              <a
                className="text-gray-400 text-sm hover:text-gray-100 underline-offset-4 hover:underline"
                href="#por-que-nosotros"
              >
                Por qué nosotros
              </a>
              <a
                className="text-gray-400 text-sm hover:text-gray-100 underline-offset-4 hover:underline"
                href="#equipo"
              >
                Equipo
              </a>
              <a
                className="text-gray-400 text-sm hover:text-gray-100 underline-offset-4 hover:underline"
                href="#hermes"
              >
                Hermes
              </a>
              <a
                className="text-gray-400 text-sm hover:text-gray-100 underline-offset-4 hover:underline"
                href="#contacto"
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
