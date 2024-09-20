import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="flex justify-center items-center bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 w-full min-h-screen">
          <div className="mx-auto px-4 md:px-6 max-w-7xl container">
            <div className="flex flex-col items-center space-y-8 mb-12 text-center">
              <div className="space-y-4">
                <h1 className="bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold text-4xl text-transparent sm:text-5xl md:text-6xl lg:text-7xl/none tracking-tighter">
                  Transformando Ideas en Realidad
                </h1>
                <p className="mx-auto max-w-[800px] text-gray-300 md:text-xl lg:text-2xl">
                  Zenova es tu socio tecnológico para crear soluciones de
                  software innovadoras y escalables. Desde aplicaciones web
                  hasta sistemas complejos, estamos aquí para impulsar tu
                  negocio.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex sm:flex-row flex-col justify-center items-center sm:space-x-4 space-y-2 sm:space-y-0">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-lg"
                  >
                    Empezá ahora
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-600 hover:bg-gray-800 text-gray-300 text-lg"
                  >
                    Descubrí más
                  </Button>
                </div>
                <p className="text-gray-400 text-sm">
                  Listos para impulsar tu próximo proyecto tecnológico
                </p>
              </div>
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Desarrollo a medida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Enfoque innovador</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Tecnologías de vanguardia</span>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
}
