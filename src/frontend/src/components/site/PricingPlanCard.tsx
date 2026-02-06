import { Check } from 'lucide-react';

interface PricingPlanCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
  highlighted?: boolean;
}

export default function PricingPlanCard({
  name,
  price,
  period,
  description,
  features,
  ctaText,
  onCtaClick,
  highlighted = false,
}: PricingPlanCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-8 transition-all ${
        highlighted
          ? 'border-saudi-green bg-saudi-green/5 shadow-xl'
          : 'border-border/50 bg-card hover:border-saudi-green/30 hover:shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="absolute right-4 top-4 rounded-full bg-saudi-gold px-3 py-1 text-xs font-semibold text-white">
          Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          {period && <span className="ml-2 text-muted-foreground">/{period}</span>}
        </div>
      </div>

      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-saudi-green" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCtaClick}
        className={`w-full rounded-full px-6 py-3 font-semibold transition-all ${
          highlighted
            ? 'bg-saudi-green text-white hover:bg-saudi-green-dark hover:shadow-md'
            : 'border border-saudi-green text-saudi-green hover:bg-saudi-green hover:text-white'
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
}
