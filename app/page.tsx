import React from 'react';
import { ZenovaLanding } from "@/components/zenova-landing";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo 
        title="Innovación Digital a tu Alcance"
        description="Zenova transforma tus ideas en soluciones tecnológicas potentes. Desde aplicaciones web hasta sistemas complejos, impulsamos tu negocio hacia el futuro."
        canonical="https://www.zenova.tech"
      />
      <ZenovaLanding />
    </>
  );
}
