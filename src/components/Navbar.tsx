//*********** NAvBar
"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#career", label: "Carrera" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold text-yellow-400">
          F-uem.dev
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X
                  : "M4 6h16M4 12h16M4 18h16" // ☰
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-black border-t border-zinc-800 px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium text-gray-300 hover:text-yellow-400 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
