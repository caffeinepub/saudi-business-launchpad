import Seo from '../components/site/Seo';
import ResourceList from '../components/site/ResourceList';

export default function ResourcesPage() {
  const businessTemplates = [
    {
      title: 'Business Plan Template',
      description: 'Comprehensive template for Saudi business plans',
      type: 'PDF',
    },
    {
      title: 'Commercial Registration Application',
      description: 'Pre-filled forms for CR application',
      type: 'DOCX',
    },
    {
      title: 'Partnership Agreement Template',
      description: 'Legal template for business partnerships',
      type: 'PDF',
    },
    {
      title: 'Employment Contract Template',
      description: 'Saudi labor law compliant contracts',
      type: 'DOCX',
    },
  ];

  const complianceChecklists = [
    {
      title: 'Business Registration Checklist',
      description: 'Complete checklist for CR registration',
      type: 'PDF',
    },
    {
      title: 'VAT Registration Requirements',
      description: 'Step-by-step VAT registration guide',
      type: 'PDF',
    },
    {
      title: 'ZATCA E-Invoicing Compliance',
      description: 'Requirements for e-invoicing compliance',
      type: 'PDF',
    },
    {
      title: 'Annual Compliance Calendar',
      description: 'Important dates and deadlines',
      type: 'PDF',
    },
  ];

  const startupGuides = [
    {
      title: 'Starting a Business in Saudi Arabia',
      description: 'Complete guide for new entrepreneurs',
      type: 'PDF',
    },
    {
      title: 'Choosing the Right Business Structure',
      description: 'LLC vs. Sole Proprietorship comparison',
      type: 'PDF',
    },
    {
      title: 'Hiring Your First Employee',
      description: 'Guide to Saudi labor laws and hiring',
      type: 'PDF',
    },
    {
      title: 'Opening a Business Bank Account',
      description: 'Requirements and process guide',
      type: 'PDF',
    },
  ];

  const knowledgeBase = [
    {
      title: 'Understanding Saudi Commercial Law',
      description: 'Overview of key regulations',
      type: 'Article',
    },
    {
      title: 'VAT in Saudi Arabia Explained',
      description: 'Complete guide to VAT obligations',
      type: 'Article',
    },
    {
      title: 'Saudization Requirements',
      description: 'Nitaqat program and compliance',
      type: 'Article',
    },
    {
      title: 'Vision 2030 Opportunities',
      description: 'Business opportunities under Vision 2030',
      type: 'Article',
    },
  ];

  return (
    <>
      <Seo
        title="Business Resources & Templates for Saudi Entrepreneurs"
        description="Free business templates, compliance checklists, startup guides, and knowledge base for starting and managing businesses in Saudi Arabia. Download essential resources for Saudi business setup."
      />

      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Resources</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Free templates, guides, and resources to help you succeed in Saudi Arabia
            </p>
          </div>

          {/* Business Templates */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Business Templates</h2>
            <ResourceList resources={businessTemplates} />
          </div>

          {/* Compliance Checklists */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Compliance Checklists</h2>
            <ResourceList resources={complianceChecklists} />
          </div>

          {/* Startup Guides */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Startup Guides</h2>
            <ResourceList resources={startupGuides} />
          </div>

          {/* Knowledge Base */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Knowledge Base</h2>
            <ResourceList resources={knowledgeBase} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Need More Personalized Support?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Our Pro and Enterprise plans include access to expert consultations and custom resources
          </p>
          <button
            onClick={() => (window.location.href = '/pricing')}
            className="rounded-full bg-saudi-green px-8 py-3 font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md"
          >
            View Pricing Plans
          </button>
        </div>
      </section>
    </>
  );
}
