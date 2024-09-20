import Image from "next/image";

export default function OurTeam() {
  return <section
  id="equipo"
  className="bg-gray-900 py-12 md:py-24 lg:py-32 w-full"
>
  <div className="mx-auto px-4 md:px-6 max-w-7xl container">
    <h2 className="mb-8 font-bold text-3xl text-center text-white sm:text-4xl md:text-5xl tracking-tighter">
      Nuestro Equipo
    </h2>
    <div className="gap-10 grid sm:grid-cols-2">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Juan"
          width={200}
          height={200}
          className="mb-4 rounded-full"
        />
        <h3 className="font-semibold text-white text-xl">Juan</h3>
        <p className="text-gray-400">Ingeniero de Sistemas Avanzados</p>
        <p className="mt-2 text-gray-300">
          Especialista en desarrollo frontend y experiencia de usuario.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Félix"
          width={200}
          height={200}
          className="mb-4 rounded-full"
        />
        <h3 className="font-semibold text-white text-xl">Félix</h3>
        <p className="text-gray-400">Ingeniero de Sistemas Avanzados</p>
        <p className="mt-2 text-gray-300">
          Especialista en desarrollo backend y arquitectura de sistemas.
        </p>
      </div>
    </div>
  </div>
</section>
}
