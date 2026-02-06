interface ServiceCardProps {
  icon?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  ctaText = 'Learn More',
  onCtaClick,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-saudi-green/50 hover:shadow-lg">
      {icon && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-saudi-green/10">
          <img src={icon} alt={title} className="h-10 w-10 object-contain" />
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      {onCtaClick && (
        <button
          onClick={onCtaClick}
          className="text-sm font-medium text-saudi-green transition-colors hover:text-saudi-green-dark"
        >
          {ctaText} →
        </button>
      )}
    </div>
  );
}
