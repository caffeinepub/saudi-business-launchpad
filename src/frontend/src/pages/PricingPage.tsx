import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import Seo from '../components/site/Seo';
import PricingPlanCard from '../components/site/PricingPlanCard';
import { ROUTES } from '../components/site/routes';

export default function PricingPage() {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free Plan',
      price: 'SAR 0',
      period: '',
      description: 'Perfect for exploring and basic guidance',
      features: [
        'Access to basic business guides',
        'Compliance checklists',
        'Business type selector tool',
        'Community forum access',
        'Email support',
      ],
      ctaText: 'Get Started Free',
    },
    {
      name: 'Pro Subscription',
      price: billingPeriod === 'monthly' ? 'SAR 499' : 'SAR 4,990',
      period: billingPeriod === 'monthly' ? 'month' : 'year',
      description: 'Complete support for growing businesses',
      features: [
        'Everything in Free',
        'Step-by-step registration guidance',
        'Document templates & automation',
        'Compliance reminders & alerts',
        'Priority email & chat support',
        'Access to expert consultations',
        'VAT & ZATCA compliance tools',
        billingPeriod === 'yearly' ? 'Save 2 months (17% discount)' : '',
      ].filter(Boolean),
      ctaText: 'Start Pro Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise Plan',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for established businesses',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom compliance workflows',
        'Multi-business management',
        'API access for integrations',
        'On-site training sessions',
        'Custom legal document review',
        '24/7 priority support',
      ],
      ctaText: 'Contact Sales',
    },
  ];

  const payPerServiceOptions = [
    {
      title: 'Business Registration Service',
      price: 'SAR 2,500',
      description: 'Complete registration assistance from start to finish',
    },
    {
      title: 'VAT Registration',
      price: 'SAR 1,200',
      description: 'VAT registration and ZATCA compliance setup',
    },
    {
      title: 'License Application',
      price: 'SAR 1,800',
      description: 'Assistance with specific license applications',
    },
    {
      title: 'Legal Document Review',
      price: 'SAR 800',
      description: 'Expert review of contracts and legal documents',
    },
  ];

  return (
    <>
      <Seo
        title="Pricing Plans - Affordable Business Setup Solutions"
        description="Flexible pricing for Saudi entrepreneurs. Choose from Free, Pro subscription (monthly/yearly), Enterprise plans, or pay-per-service options for business registration and compliance in KSA."
      />

      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-full bg-muted p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-saudi-green text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-saudi-green text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs">(Save 17%)</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mb-20 grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <PricingPlanCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                ctaText={plan.ctaText}
                onCtaClick={() => navigate({ to: ROUTES.CONTACT })}
                highlighted={plan.highlighted}
              />
            ))}
          </div>

          {/* Pay-Per-Service Section */}
          <div className="border-t border-border/40 pt-16">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Pay-Per-Service Options</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Need help with a specific task? Choose from our à la carte services
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {payPerServiceOptions.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-saudi-green/50 hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{service.price}</span>
                    <button
                      onClick={() => navigate({ to: ROUTES.CONTACT })}
                      className="rounded-full border border-saudi-green px-4 py-2 text-sm font-medium text-saudi-green transition-all hover:bg-saudi-green hover:text-white"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
