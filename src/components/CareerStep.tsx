//*********** CareerStep.tsx

interface CareerStepProps {
    role: string;
    company: string;
    period: string;
    description: string;
  }
  
  export default function CareerStep({ role, company, period, description }: CareerStepProps) {
    return (
      <div className="border-l-4 border-blue-600 pl-4 ml-2">
        <h3 className="text-xl font-semibold">{role} – <span className="text-blue-700">{company}</span></h3>
        <p className="text-sm text-gray-500">{period}</p>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    );
  }
  