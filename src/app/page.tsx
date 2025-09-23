import AboutSection from "@/components/AboutSection";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import CareerStep from "@/components/CareerStep";
import HeroSection from "@/components/HeroSection";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
  "Git", "Node.js", "Figma", "HTML", "CSS"
];

const projects = [
  {
    title: "Weather App",
    description: "A responsive weather app using Next.js and OpenWeather API.",
    link: "https://weather-app.vercel.app",
    repo: "https://github.com/fuem-dev/weather-app",
    tech: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Task Tracker",
    description: "Minimal task manager using Zustand and Vite.",
    link: "https://task-tracker.vercel.app",
    repo: "https://github.com/fuem-dev/task-tracker",
    tech: ["React", "Vite", "Zustand"],
  },
  {
    title: "task App",
    description: "a web Aplicatiosn that functions",
    link: "https://weather-app.vercel.app",
    repo: "https://github.com/fuem-dev/weather-app",
    tech: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "App Tracker",
    description: "Minimal source that i need",
    link: "https://task-tracker.vercel.app",
    repo: "https://github.com/fuem-dev/task-tracker",
    tech: ["React", "Vite", "Zustand"],
  },
];

const career = [
  {
    role: "Frontend Developer",
    company: "TechCorp",
    period: "2023 - Actualidad",
    description: "Desarrollo de interfaces en React/Next.js. Diseño responsive y consumo de APIs."
  },
  {
    role: "Web Developer",
    company: "Startup XYZ",
    period: "2021 - 2023",
    description: "SPA con Vue.js. Trabajo colaborativo y decisiones de arquitectura."
  }
];

export default function HomePage() {
  return (
    <>
      <section id="home" className="flex flex-col items-center justify-center text-center px-4 min-h-screen">
        <HeroSection/>
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center h2_css">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center h2_css">Proyectos</h2>
        <div className="flex gap-6 overflow-x-auto px-1 pb-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex-shrink-0 w-[260px] snap-center"
    >
            <ProjectCard key={project.title} {...project} />
            </div>
          ))}
        </div>
      </section>

      <section id="career" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center h2_css">Carrera</h2>
        <div className="space-y-6">
          {career.map((job, i) => (
            <CareerStep key={i} {...job} />
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-4 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 h2_css">Contacto</h2>
        <p className="text-lg text-gray-700 mb-4">
          ¿Quieres trabajar conmigo o charlar de algún proyecto?
        </p>
        <div className="space-y-2">
          <p className="text-blue-700 font-medium">
            📧 <a href="mailto:fuem.dev@gmail.com" className="underline">fuem.dev@gmail.com</a>
          </p>
          <p>
            🔗 <a href="https://www.linkedin.com/in/fuem-dev" target="_blank" className="text-blue-700 underline">LinkedIn</a>
          </p>
          <p>
            💻 <a href="https://github.com/fuem-dev" target="_blank" className="text-blue-700 underline">GitHub</a>
          </p>
        </div>
      </section>
    </>
  );
}
