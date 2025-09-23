// src/components/ProjectCard.tsx

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  repo?: string;
  tech?: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  repo,
  tech = [],
}: ProjectCardProps) {
  return (
    <div className="bg-neutral-900  h-[280px] rounded-xl p-6 shadow-md hover:shadow-white/30 shadow-yellow-500/30 transition-all">
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4">
        <Link
          href={link}
          target="_blank"
          className="text-yellow-400 text-sm underline"
        >
          Live
        </Link>

        {repo && (
          <Link
            href={repo}
            target="_blank"
            className="text-gray-400 text-sm underline"
          >
            Code
          </Link>
        )}
      </div>
    </div>
  );
}
