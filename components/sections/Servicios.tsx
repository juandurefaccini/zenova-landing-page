import { Building2, Briefcase, Stethoscope, GraduationCap, ShoppingCart, Factory, Globe, Smartphone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function Servicios() {
  return <section
  id="servicios"
  className="bg-gray-900 py-12 md:py-24 lg:py-32 w-full"
>
  <div className="mx-auto px-4 md:px-6 max-w-7xl container">
    <h2 className="mb-8 font-bold text-3xl text-center text-white sm:text-4xl md:text-5xl tracking-tighter">
      Nuestros Dominios de Trabajo
    </h2>
    <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Gestión Empresarial",
          icon: Building2,
          description:
            "Sistemas ERP y CRM personalizados para optimizar procesos internos y relaciones con clientes",
        },
        {
          name: "Recursos Humanos",
          icon: Briefcase,
          description:
            "Plataformas de gestión de personal, nóminas y reclutamiento",
        },
        {
          name: "Salud",
          icon: Stethoscope,
          description:
            "Soluciones de telemedicina y sistemas de gestión hospitalaria",
        },
        {
          name: "Educación",
          icon: GraduationCap,
          description:
            "Plataformas e-learning y sistemas de gestión académica",
        },
        {
          name: "E-commerce",
          icon: ShoppingCart,
          description:
            "Tiendas online avanzadas con características personalizadas",
        },
        {
          name: "Industria",
          icon: Factory,
          description:
            "Sistemas de IoT y automatización para procesos industriales",
        },
        {
          name: "Finanzas",
          icon: Briefcase,
          description:
            "Aplicaciones de gestión financiera y análisis de datos",
        },
        {
          name: "Logística",
          icon: Globe,
          description:
            "Sistemas de seguimiento y optimización de cadenas de suministro",
        },
        {
          name: "Aplicaciones Móviles",
          icon: Smartphone,
          description:
            "Desarrollo de apps nativas y multiplataforma para iOS y Android",
        },
      ].map((domain) => (
        <Card key={domain.name} className="border-gray-700 bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <domain.icon className="mr-2 w-5 h-5 text-purple-400" />
              {domain.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{domain.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
}
