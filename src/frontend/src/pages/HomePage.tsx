import { useNavigate } from '@tanstack/react-router';
import { Shield, CheckCircle, Users, ArrowRight } from 'lucide-react';
import Seo from '../components/site/Seo';
import { ROUTES } from '../components/site/routes';

export default function HomePage() {
  const navigate = useNavigate();

  const trustIndicators = [
    {
      icon: Shield,
      title: 'Saudi-Focused',
      description: 'Built specifically for Saudi Arabian business regulations and requirements',
    },
    {
      icon: CheckCircle,
      title: 'Fully Compliant',
      description: 'Stay up-to-date with all regulatory requirements including VAT and ZATCA',
    },
    {
      icon: Users,
      title: 'Expert-Backed',
      description: 'Access to experienced mentors and local business experts',
    },
  ];

  const features = [
    {
      icon: '/assets/generated/sbl-icon-registration.dim_128x128.png',
      title: 'Guided Registration',
      description: 'Step-by-step guidance through the entire business registration process',
    },
    {
      icon: '/assets/generated/sbl-icon-compliance.dim_128x128.png',
      title: 'Compliance Support',
      description: 'Automated reminders and expert support for all regulatory requirements',
    },
    {
      icon: '/assets/generated/sbl-icon-growth.dim_128x128.png',
      title: 'Business Growth',
      description: 'Resources and tools to help your business scale successfully',
    },
  ];

  return (
    <>
      <Seo
        title="Start & Manage Your Business Legally in Saudi Arabia"
        description="Saudi Business Launchpad - All-in-one platform for starting and managing businesses in Saudi Arabia. Get guided business registration, compliance support, and expert services for Saudi entrepreneurs."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-saudi-green/5 to-background py-20 md:py-32">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  Start & Manage Your Business Legally in Saudi Arabia
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">
                  All-in-one platform for starting and managing businesses in Saudi Arabia — legally,
                  confidently, and faster.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => navigate({ to: ROUTES.CONTACT })}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-saudi-green px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-lg"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => navigate({ to: ROUTES.SERVICES })}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-saudi-green px-8 py-4 text-lg font-semibold text-saudi-green transition-all hover:bg-saudi-green hover:text-white"
                >
                  Register Your Business
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/assets/generated/sbl-hero.dim_1600x900.png"
                alt="Saudi Business Launchpad Platform"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-y border-border/40 bg-muted/30 py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-saudi-green/10">
                  <indicator.icon className="h-8 w-8 text-saudi-green" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{indicator.title}</h3>
                <p className="text-sm text-muted-foreground">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need to Launch Your Business
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive support from registration to growth, tailored for Saudi entrepreneurs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-saudi-green/50 hover:shadow-lg"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-saudi-green/10">
                  <img src={feature.icon} alt={feature.title} className="h-12 w-12 object-contain" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-saudi-green to-saudi-green-dark py-20 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Business Journey?</h2>
          <p className="mb-8 text-xl opacity-90">
            Join hundreds of Saudi entrepreneurs building their dreams with confidence
          </p>
          <button
            onClick={() => navigate({ to: ROUTES.CONTACT })}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-saudi-green transition-all hover:shadow-xl"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </>
  );
}
