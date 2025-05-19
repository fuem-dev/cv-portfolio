// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#career", label: "Carrera" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-xl font-bold">fuem.dev</span>
        <ul className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-blue-600 transition ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
