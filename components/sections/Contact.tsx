import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-gray-900 py-12 md:py-24 lg:py-32 w-full"
    >
      <div className="mx-auto px-4 md:px-6 max-w-7xl container">
        <h2 className="mb-8 font-bold text-3xl text-center text-white sm:text-4xl md:text-5xl tracking-tighter">
          Contáctanos
        </h2>
        <div className="mx-auto max-w-[600px]">
          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="font-medium text-gray-300 text-sm leading-none"
              >
                Nombre
              </label>
              <input
                id="name"
                className="flex border-gray-700 bg-gray-800 px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-gray-900 w-full h-10 text-gray-100 text-sm placeholder:text-gray-400 focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="font-medium text-gray-300 text-sm leading-none"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex border-gray-700 bg-gray-800 px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-gray-900 w-full h-10 text-gray-100 text-sm placeholder:text-gray-400 focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="font-medium text-gray-300 text-sm leading-none"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                className="flex border-gray-700 bg-gray-800 px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-gray-900 w-full min-h-[100px] text-gray-100 text-sm placeholder:text-gray-400 focus:outline-none"
                rows={4}
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 w-full"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
