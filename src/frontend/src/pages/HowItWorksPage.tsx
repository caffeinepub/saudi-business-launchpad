import { useNavigate } from '@tanstack/react-router';
import Seo from '../components/site/Seo';
import StepsTimeline from '../components/site/StepsTimeline';
import { ROUTES } from '../components/site/routes';

export default function HowItWorksPage() {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: 'Choose Business Type',
      description:
        'Select your business structure (sole proprietorship, LLC, branch office, etc.) based on your needs. Our platform guides you through the options and helps you understand the requirements and benefits of each type.',
    },
    {
      number: 2,
      title: 'Get Guided Registration',
      description:
        'Follow our step-by-step process to register your business. We provide document templates, checklists, and real-time support to ensure your registration is completed correctly and efficiently.',
    },
    {
      number: 3,
      title: 'Stay Compliant & Scale',
      description:
        'Once registered, use our platform to maintain compliance with automated reminders, access resources for growth, connect with mentors, and scale your business with confidence in the Saudi market.',
    },
  ];

  return (
    <>
      <Seo
        title="How It Works - Simple Business Setup Process"
        description="Learn how Saudi Business Launchpad helps you start a business in Saudi Arabia with our simple 3-step process: choose business type, get guided registration, and stay compliant while scaling."
      />

      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">How It Works</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Starting your business in Saudi Arabia is simple with our guided process
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <StepsTimeline steps={steps} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground">Why Choose Our Platform?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Save Time</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce registration time from weeks to days with our streamlined process
                </p>
              </div>
              <div className="rounded-xl bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Avoid Mistakes</h3>
                <p className="text-sm text-muted-foreground">
                  Our guided process ensures you submit correct documentation the first time
                </p>
              </div>
              <div className="rounded-xl bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Access to experienced professionals who understand Saudi business regulations
                </p>
              </div>
              <div className="rounded-xl bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Automatic updates on regulatory changes and compliance requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Begin your business journey today with expert guidance every step of the way
          </p>
          <button
            onClick={() => navigate({ to: ROUTES.CONTACT })}
            className="rounded-full bg-saudi-green px-8 py-3 font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md"
          >
            Start Your Business
          </button>
        </div>
      </section>
    </>
  );
}
