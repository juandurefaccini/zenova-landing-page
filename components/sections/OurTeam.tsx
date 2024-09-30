"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/section-title";

export default function OurTeam() {
  return (
    <section id="equipo" className="bg-gradient-to-b from-gray-900 to-gray-950 py-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto px-4 md:px-6 max-w-7xl container"
      >
        <SectionTitle 
          title="Nuestro Equipo" 
          subtitle="Conoce a los expertos detrás de nuestras soluciones"
        />
        {/* Contenido del equipo */}
      </motion.div>
    </section>
  );
}
