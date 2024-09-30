import Hero from "./sections/Hero";
import Servicios from "./sections/Servicios";
import PorQueNosotros from "./sections/PorQueNosotros";
import Contacto from "./sections/Contacto";
import Hermes from "./sections/Hermes";
import { NavBar } from "./nav-bar";

const sections = [
  { id: "servicios", title: "Servicios" },
  { id: "por-que-nosotros", title: "¿Por qué elegirnos?" },
  { id: "hermes", title: "Hermes" },
  { id: "contacto", title: "Contacto" },
]

export function ZenovaLanding() {
  return (
    <div className="flex flex-col min-h-screen text-gray-100 bg-gradient-to-b from-purple-900 via-gray-900 to-gray-950">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1" id="home">
          <Hero />
          <div className="bg-gradient-to-b from-gray-950 to-gray-900">
            <Servicios />
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-gray-800">
            <PorQueNosotros />
          </div>
          <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950">
            <Hermes />
          </div>
          <div className="bg-gradient-to-b from-gray-950 to-purple-900">
            <Contacto />
          </div>
        </main>
        <footer className="bg-purple-900 py-6 border-t border-purple-800 w-full">
          <div className="px-4 md:px-6 container mx-auto">
            <div className="flex md:flex-row flex-col justify-between items-center gap-4">
              <p className="text-center text-purple-200 text-sm">
                © 2024 Zenova Tech. Todos los derechos reservados.
              </p>
              <nav className="flex gap-4 sm:gap-6">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    className="text-purple-200 text-sm hover:text-white underline-offset-4 hover:underline transition-colors duration-300"
                    href={`#${item.id}`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
