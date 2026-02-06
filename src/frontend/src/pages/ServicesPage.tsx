import { useNavigate } from '@tanstack/react-router';
import Seo from '../components/site/Seo';
import ServiceCard from '../components/site/ServiceCard';
import { ROUTES } from '../components/site/routes';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: '/assets/generated/sbl-icon-registration.dim_128x128.png',
      title: 'Business Registration Guidance',
      description:
        'Complete step-by-step guidance through the Saudi business registration process. We help you choose the right business structure, prepare documentation, and navigate the Ministry of Commerce requirements.',
    },
    {
      icon: '/assets/generated/sbl-icon-compliance.dim_128x128.png',
      title: 'Regulatory Compliance Support',
      description:
        'Stay compliant with all Saudi regulations including commercial registration renewals, labor law requirements, and industry-specific regulations. Receive automated reminders and expert guidance.',
    },
    {
      icon: '/assets/generated/sbl-icon-growth.dim_128x128.png',
      title: 'Operational Setup Assistance',
      description:
        'Get help setting up your business operations including bank account opening, office space requirements, hiring procedures, and establishing vendor relationships in Saudi Arabia.',
    },
    {
      icon: '/assets/generated/sbl-icon-compliance.dim_128x128.png',
      title: 'VAT & ZATCA Compliance',
      description:
        'Navigate VAT registration, e-invoicing requirements, and ZATCA compliance with confidence. Our platform provides templates, automated reminders, and expert support for all tax obligations.',
    },
    {
      icon: '/assets/generated/sbl-icon-registration.dim_128x128.png',
      title: 'Licensing & Documentation Support',
      description:
        'Assistance with obtaining all necessary licenses and permits for your business type. We help with municipal licenses, industry-specific permits, and maintaining proper documentation.',
    },
  ];

  return (
    <>
      <Seo
        title="Business Services for Saudi Entrepreneurs"
        description="Comprehensive business registration, compliance support, VAT & ZATCA guidance, and operational setup assistance for starting and managing businesses in Saudi Arabia."
      />

      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Our Services</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive support for every stage of your business journey in Saudi Arabia
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                ctaText="Get Started"
                onCtaClick={() => navigate({ to: ROUTES.CONTACT })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Need Help Choosing the Right Service?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Talk to our experts and get personalized recommendations for your business needs
          </p>
          <button
            onClick={() => navigate({ to: ROUTES.CONTACT })}
            className="rounded-full bg-saudi-green px-8 py-3 font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md"
          >
            Talk to an Expert
          </button>
        </div>
      </section>
    </>
  );
}
