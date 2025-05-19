// src/components/ProjectCard.tsx

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
  }
  
  export default function ProjectCard({ title, description, link }: ProjectCardProps) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </a>
    );
  }
  