"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#servicios", label: "Servicios" },
    { href: "#por-que-nosotros", label: "¿Por qué elegirnos?" },
    { href: "#hermes", label: "Hermes" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 shadow-lg" : "bg-transparent"
    }`}>
      <div className="flex justify-between items-center mx-auto px-4 md:px-8 h-20 container">
        <a className="flex items-center space-x-2" href="#home">
          <span className="font-bold text-2xl text-white">Zenova</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8 font-medium text-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-gray-300 hover:text-white transition-colors"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden text-white border-white hover:bg-white hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="block py-2 text-lg text-gray-300 hover:text-white transition-colors"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
