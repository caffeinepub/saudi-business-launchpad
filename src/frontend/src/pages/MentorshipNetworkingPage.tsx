import { useNavigate } from '@tanstack/react-router';
import Seo from '../components/site/Seo';
import { ROUTES } from '../components/site/routes';

export default function MentorshipNetworkingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="Mentorship & Networking for Saudi Entrepreneurs"
        description="Connect with experienced Saudi business mentors, join our startup community, and access our partner ecosystem. Build valuable relationships to grow your business in Saudi Arabia."
      />

      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Mentorship & Networking
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Connect with experienced mentors and build valuable relationships in the Saudi business
              community
            </p>
          </div>

          {/* Mentorship Section */}
          <div className="mb-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-saudi-green/10">
                  <img
                    src="/assets/generated/sbl-icon-mentorship.dim_128x128.png"
                    alt="Mentorship"
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Access to Saudi Business Mentors
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Get guidance from experienced entrepreneurs who have successfully navigated the Saudi
                  business landscape. Our mentors provide personalized advice on registration, compliance,
                  growth strategies, and overcoming common challenges.
                </p>
                <ul className="mb-6 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-saudi-green">✓</span>
                    <span>One-on-one mentorship sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-saudi-green">✓</span>
                    <span>Industry-specific expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-saudi-green">✓</span>
                    <span>Practical advice from real experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-saudi-green">✓</span>
                    <span>Ongoing support as you grow</span>
                  </li>
                </ul>
                <button
                  onClick={() => navigate({ to: ROUTES.CONTACT })}
                  className="rounded-full bg-saudi-green px-6 py-3 font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md"
                >
                  Find a Mentor
                </button>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-saudi-green/10 to-saudi-green/5 p-8">
                <div className="space-y-4">
                  <div className="rounded-xl bg-card p-6 shadow-sm">
                    <h3 className="mb-2 font-semibold text-foreground">Expert Mentors</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with successful Saudi entrepreneurs across various industries
                    </p>
                  </div>
                  <div className="rounded-xl bg-card p-6 shadow-sm">
                    <h3 className="mb-2 font-semibold text-foreground">Flexible Sessions</h3>
                    <p className="text-sm text-muted-foreground">
                      Schedule mentorship calls at times that work for you
                    </p>
                  </div>
                  <div className="rounded-xl bg-card p-6 shadow-sm">
                    <h3 className="mb-2 font-semibold text-foreground">Proven Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn from mentors who have built successful businesses in KSA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="mb-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl bg-gradient-to-br from-saudi-green/10 to-saudi-green/5 p-8">
                  <div className="space-y-4">
                    <div className="rounded-xl bg-card p-6 shadow-sm">
                      <h3 className="mb-2 font-semibold text-foreground">Discussion Forums</h3>
                      <p className="text-sm text-muted-foreground">
                        Ask questions and share experiences with fellow entrepreneurs
                      </p>
                    </div>
                    <div className="rounded-xl bg-card p-6 shadow-sm">
                      <h3 className="mb-2 font-semibold text-foreground">Networking Events</h3>
                      <p className="text-sm text-muted-foreground">
                        Attend virtual and in-person meetups with other business owners
                      </p>
                    </div>
                    <div className="rounded-xl bg-card p-6 shadow-sm">
                      <h3 className="mb-2 font-semibold text-foreground">Resource Sharing</h3>
                      <p className="text-sm text-muted-foreground">
                        Access community-contributed templates and best practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-saudi-green/10">
                  <img
                    src="/assets/generated/sbl-icon-network.dim_128x128.png"
                    alt="Community"
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">Startup Community</h2>
                <p className="mb-6 text-muted-foreground">
                  Join a vibrant community of Saudi entrepreneurs building businesses across various
                  industries. Share experiences, ask questions, find potential partners, and stay motivated
                  on your entrepreneurial journey.
                </p>
                <ul className="mb-6 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-saudi-green">✓</span>
                    <span>Connect with like-minded entrepreneurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-saudi-green">✓</span>
                    <span>Participate in community events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-saudi-green">✓</span>
                    <span>Find potential co-founders or partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-saudi-green">✓</span>
                    <span>Stay updated on industry trends</span>
                  </li>
                </ul>
                <button
                  onClick={() => navigate({ to: ROUTES.CONTACT })}
                  className="rounded-full bg-saudi-green px-6 py-3 font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md"
                >
                  Join the Community
                </button>
              </div>
            </div>
          </div>

          {/* Partner Ecosystem */}
          <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-12">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-saudi-green/10">
                <img
                  src="/assets/generated/sbl-icon-network.dim_128x128.png"
                  alt="Partners"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">Partner Ecosystem</h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Access our network of trusted service providers including legal firms, accounting services,
                office space providers, and technology partners. Get exclusive discounts and priority
                service from our verified partners.
              </p>
              <div className="mb-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-muted/50 p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Legal Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Vetted law firms specializing in Saudi business law
                  </p>
                </div>
                <div className="rounded-xl bg-muted/50 p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Financial Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Accounting firms and financial advisors for Saudi businesses
                  </p>
                </div>
                <div className="rounded-xl bg-muted/50 p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Business Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Office spaces, co-working, and operational support providers
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate({ to: ROUTES.CONTACT })}
                className="rounded-full bg-saudi-green px-6 py-3 font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md"
              >
                Explore Partners
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
