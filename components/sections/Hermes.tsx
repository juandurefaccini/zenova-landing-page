import { MessageCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hermes() {
  return (
    <section id="hermes" className="bg-gray-950 py-12 md:py-24 lg:py-32 w-full">
      <div className="mx-auto px-4 md:px-6 max-w-7xl container">
        <div className="gap-6 lg:gap-12 grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Hermes Demo"
            alt="Hermes Demo"
            width={600}
            height={400}
            className="lg:order-last mx-auto rounded-xl sm:w-full overflow-hidden aspect-video object-center object-cover"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="font-bold text-3xl text-white sm:text-5xl tracking-tighter">
                Conoce a Hermes
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestro sistema de asistentes virtuales que funcionan a través
                de WhatsApp
              </p>
            </div>
            <ul className="gap-6 grid mt-8">
              <li>
                <div className="gap-1 grid">
                  <h3 className="font-bold text-white text-xl">
                    Atención 24/7
                  </h3>
                  <p className="text-gray-400">
                    Hermes está siempre disponible para atender las consultas de
                    tus clientes.
                  </p>
                </div>
              </li>
              <li>
                <div className="gap-1 grid">
                  <h3 className="font-bold text-white text-xl">
                    Personalización avanzada
                  </h3>
                  <p className="text-gray-400">
                    Adapta Hermes a las necesidades específicas de tu negocio.
                  </p>
                </div>
              </li>
              <li>
                <div className="gap-1 grid">
                  <h3 className="font-bold text-white text-xl">
                    Integración sencilla
                  </h3>
                  <p className="text-gray-400">
                    Fácil de implementar en tu flujo de trabajo actual.
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex min-[400px]:flex-row flex-col gap-2">
              <Button className="inline-flex justify-center items-center bg-purple-600 hover:bg-purple-700">
                <MessageCircleIcon className="mr-2 w-4 h-4" />
                Prueba Hermes gratis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
