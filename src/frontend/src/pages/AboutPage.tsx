import { useNavigate } from '@tanstack/react-router';
import { Target, Eye, Users } from 'lucide-react';
import Seo from '../components/site/Seo';
import { ROUTES } from '../components/site/routes';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="About Us - Empowering Saudi Entrepreneurs"
        description="Learn about Saudi Business Launchpad's mission to empower Saudi entrepreneurs. Aligned with Vision 2030, we provide local expertise and partnerships for business success in Saudi Arabia."
      />

      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">About Us</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Building the future of entrepreneurship in Saudi Arabia
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-saudi-green/10">
                  <Target className="h-8 w-8 text-saudi-green" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">Empower Saudi entrepreneurs</strong> to start and
                  manage their businesses with confidence. We believe that every entrepreneur deserves
                  access to clear guidance, expert support, and the tools needed to navigate the Saudi
                  business landscape successfully.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-saudi-green/10 to-saudi-green/5 p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-saudi-green text-white">
                      1
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">Simplify Complexity</h3>
                      <p className="text-sm text-muted-foreground">
                        Make business registration and compliance straightforward
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-saudi-green text-white">
                      2
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">Provide Expert Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect entrepreneurs with experienced mentors and professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-saudi-green text-white">
                      3
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">Foster Growth</h3>
                      <p className="text-sm text-muted-foreground">
                        Help businesses scale and succeed in the Saudi market
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision 2030 Alignment */}
          <div className="mb-16 rounded-2xl bg-gradient-to-r from-saudi-green/10 to-saudi-green/5 p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-saudi-green/20">
                  <Eye className="h-8 w-8 text-saudi-green" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">Aligned with Vision 2030</h2>
                <p className="mb-4 text-muted-foreground">
                  Saudi Business Launchpad is proud to support Saudi Arabia's Vision 2030 by empowering
                  entrepreneurs and fostering a thriving private sector. We contribute to the Kingdom's
                  economic diversification goals by making it easier for Saudis to start and grow
                  businesses.
                </p>
                <p className="text-muted-foreground">
                  Our platform aligns with Vision 2030's objectives of increasing SME contribution to GDP,
                  creating job opportunities, and building a vibrant society through entrepreneurship and
                  innovation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl bg-card p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-foreground">Economic Diversification</h3>
                  <p className="text-sm text-muted-foreground">
                    Supporting the growth of diverse businesses across industries
                  </p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-foreground">Job Creation</h3>
                  <p className="text-sm text-muted-foreground">
                    Helping entrepreneurs create employment opportunities for Saudis
                  </p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-foreground">Innovation & Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Fostering a culture of entrepreneurship and innovation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Local Expertise */}
          <div className="mb-16">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-saudi-green/10">
                <Users className="h-8 w-8 text-saudi-green" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Local Expertise & Partnerships
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
                Our success is built on deep local knowledge and strong partnerships with key stakeholders
                in the Saudi business ecosystem.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border/50 bg-card p-6 text-center">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Expert Team</h3>
                <p className="text-sm text-muted-foreground">
                  Our team includes legal experts, business consultants, and entrepreneurs with extensive
                  experience in the Saudi market
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-6 text-center">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Government Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  We work closely with government agencies to ensure our guidance reflects the latest
                  regulations and requirements
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-6 text-center">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Service Provider Network</h3>
                <p className="text-sm text-muted-foreground">
                  Partnerships with trusted legal, financial, and business service providers across Saudi
                  Arabia
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Ready to Start Your Business Journey?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Join hundreds of Saudi entrepreneurs who trust us to guide their business success
            </p>
            <button
              onClick={() => navigate({ to: ROUTES.CONTACT })}
              className="rounded-full bg-saudi-green px-8 py-3 font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
