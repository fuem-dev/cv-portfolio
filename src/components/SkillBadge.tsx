// src/components/SkillBadge.tsx

interface SkillBadgeProps {
    label: string;
  }
  
  export default function SkillBadge({ label }: SkillBadgeProps) {
    return (
      <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
        {label}
      </span>
    );
  }
  