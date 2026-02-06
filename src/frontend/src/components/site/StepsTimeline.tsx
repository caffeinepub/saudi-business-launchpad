interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepsTimelineProps {
  steps: Step[];
}

export default function StepsTimeline({ steps }: StepsTimelineProps) {
  return (
    <div className="space-y-8 md:space-y-0">
      {steps.map((step, index) => (
        <div key={step.number} className="relative md:flex md:items-start md:gap-8">
          {/* Connector Line (desktop only) */}
          {index < steps.length - 1 && (
            <div className="absolute left-6 top-16 hidden h-full w-0.5 bg-saudi-green/20 md:block" />
          )}

          {/* Step Number */}
          <div className="relative z-10 mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-saudi-green text-xl font-bold text-white shadow-lg md:mb-0">
            {step.number}
          </div>

          {/* Step Content */}
          <div className="mb-8 flex-1 md:mb-12">
            <h3 className="mb-2 text-2xl font-bold text-foreground">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
