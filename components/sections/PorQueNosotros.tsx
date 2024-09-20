import { Code2, Rocket, Globe, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function PorQueNosotros() {
  return <section
  id="por-que-nosotros"
  className="bg-gray-950 py-12 md:py-24 lg:py-32 w-full"
>
  <div className="mx-auto px-4 md:px-6 max-w-7xl container">
    <h2 className="mb-8 font-bold text-3xl text-center text-white sm:text-4xl md:text-5xl tracking-tighter">
      ¿Por qué elegirnos?
    </h2>
    <div className="gap-6 grid md:grid-cols-2">
      <Card className="border-gray-700 bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Code2 className="mr-2 w-5 h-5 text-purple-400" />
            Versatilidad
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Atendemos todo tipo de proyectos, desde desarrollos web
            hasta aplicaciones móviles y sistemas complejos.
          </p>
        </CardContent>
      </Card>
      <Card className="border-gray-700 bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Rocket className="mr-2 w-5 h-5 text-purple-400" />
            Financiamiento flexible
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Ofrecemos planes de cuotas sin interés para que puedas
            financiar el desarrollo de tu software.
          </p>
        </CardContent>
      </Card>
      <Card className="border-gray-700 bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Globe className="mr-2 w-5 h-5 text-purple-400" />
            Cobertura global
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Trabajamos a nivel local, nacional e internacional desde
            Argentina.
          </p>
        </CardContent>
      </Card>
      <Card className="border-gray-700 bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Users className="mr-2 w-5 h-5 text-purple-400" />
            Relaciones flexibles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Estamos abiertos tanto a proyectos a corto plazo como a
            colaboraciones a largo plazo.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
}
