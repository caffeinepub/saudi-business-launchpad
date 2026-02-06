import { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import Seo from '../components/site/Seo';
import { useSubmitLead } from '../hooks/useSubmitLead';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessStage: '',
    message: '',
  });

  const { mutate: submitLead, isPending, isSuccess, isError, error } = useSubmitLead();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      businessStage: formData.businessStage || null,
      message: formData.message,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSuccess) {
    return (
      <>
        <Seo
          title="Thank You - We'll Be In Touch Soon"
          description="Thank you for contacting Saudi Business Launchpad. We'll get back to you shortly to help you start your business in Saudi Arabia."
        />
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-saudi-green/10">
                <svg
                  className="h-10 w-10 text-saudi-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="mb-4 text-4xl font-bold text-foreground">Thank You!</h1>
              <p className="mb-8 text-lg text-muted-foreground">
                We've received your message and will get back to you within 24 hours. Our team is excited to
                help you start your business journey in Saudi Arabia.
              </p>
              <button
                onClick={() => (window.location.href = '/')}
                className="rounded-full bg-saudi-green px-8 py-3 font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md"
              >
                Return to Home
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Get Started - Contact Saudi Business Launchpad"
        description="Contact Saudi Business Launchpad to start your business in Saudi Arabia. Get expert guidance on business registration, compliance, and operational setup in KSA."
      />

      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Get Started</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Ready to start your business in Saudi Arabia? Fill out the form below and our team will contact
              you within 24 hours.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-saudi-green focus:outline-none focus:ring-2 focus:ring-saudi-green/20"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-saudi-green focus:outline-none focus:ring-2 focus:ring-saudi-green/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-saudi-green focus:outline-none focus:ring-2 focus:ring-saudi-green/20"
                    placeholder="+966 5X XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="businessStage" className="mb-2 block text-sm font-medium text-foreground">
                    Business Stage (Optional)
                  </label>
                  <select
                    id="businessStage"
                    name="businessStage"
                    value={formData.businessStage}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-saudi-green focus:outline-none focus:ring-2 focus:ring-saudi-green/20"
                  >
                    <option value="">Select your business stage</option>
                    <option value="idea">Just an idea</option>
                    <option value="planning">Planning stage</option>
                    <option value="ready-to-register">Ready to register</option>
                    <option value="already-registered">Already registered</option>
                    <option value="scaling">Scaling my business</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-saudi-green focus:outline-none focus:ring-2 focus:ring-saudi-green/20"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                {isError && (
                  <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                    {error?.message || 'An error occurred. Please try again.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full bg-saudi-green px-8 py-4 font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md disabled:opacity-50"
                >
                  {isPending ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Other Ways to Reach Us</h2>

                <div className="space-y-4">
                  <a
                    href="mailto:info@saudibusinesslaunchpad.com"
                    className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-saudi-green/50 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-saudi-green/10">
                      <Mail className="h-6 w-6 text-saudi-green" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">Email Us</h3>
                      <p className="text-sm text-muted-foreground">info@saudibusinesslaunchpad.com</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-saudi-green/50 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-saudi-green/10">
                      <MessageCircle className="h-6 w-6 text-saudi-green" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Available during business hours (9 AM - 6 PM KSA)
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-saudi-green/10 to-saudi-green/5 p-8">
                <h3 className="mb-4 text-xl font-semibold text-foreground">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-saudi-green text-xs font-bold text-white">
                      1
                    </span>
                    <span className="text-sm text-muted-foreground">
                      We'll review your information and business needs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-saudi-green text-xs font-bold text-white">
                      2
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Our team will contact you within 24 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-saudi-green text-xs font-bold text-white">
                      3
                    </span>
                    <span className="text-sm text-muted-foreground">
                      We'll schedule a consultation to discuss your business goals
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-saudi-green text-xs font-bold text-white">
                      4
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Start your business journey with expert guidance
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
