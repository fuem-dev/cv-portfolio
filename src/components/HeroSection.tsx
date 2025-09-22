'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-end text-center overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay para mejorar contraste del texto */}
      <div className="absolute inset-0 bg-black/0 z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 px-4 text-right mr-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hola, soy <span className="text-yellow-300">F-uem</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-6 ml-auto">
            Desarrollador frontend que convierte ideas en experiencias digitales.
        </p>
        <Link
            href="#projects"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-yellow-500 transition ml-auto"
        >
            Ver proyectos
        </Link>
        </div>

    </section>
  );
}
