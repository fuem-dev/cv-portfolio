import AboutSection from "@/components/AboutSection";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import CareerStep from "@/components/CareerStep";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
  "Git", "Node.js", "Figma", "HTML", "CSS"
];

const projects = [
  {
    title: "Portafolio Personal",
    description: "Este sitio fue creado con Next.js, Tailwind y TypeScript.",
    link: "https://github.com/fuem-dev/cv-portfolio"
  },
  {
    title: "Task Manager",
    description: "Aplicación de tareas con Zustand y persistencia local.",
    link: "https://github.com/fuem-dev/task-manager"
  }
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
      <section id="home" className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Hola, soy Fuem 👋</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Bienvenido a mi portfolio personal. Aquí podrás conocer más sobre mí, mis habilidades, carrera y proyectos.
        </p>
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="career" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Carrera</h2>
        <div className="space-y-6">
          {career.map((job, i) => (
            <CareerStep key={i} {...job} />
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-4 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Contacto</h2>
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
