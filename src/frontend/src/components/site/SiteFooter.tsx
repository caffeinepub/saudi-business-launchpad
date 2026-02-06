import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import { ROUTES, ROUTE_LABELS } from './routes';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    ROUTES.SERVICES,
    ROUTES.HOW_IT_WORKS,
    ROUTES.PRICING,
    ROUTES.RESOURCES,
    ROUTES.MENTORSHIP,
    ROUTES.ABOUT,
    ROUTES.CONTACT,
  ];

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-saudi-green">
                <span className="text-lg font-bold text-white">SBL</span>
              </div>
              <span className="font-bold text-foreground">Saudi Business Launchpad</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering Saudi entrepreneurs to start and manage businesses legally, confidently, and faster.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((route) => (
                <li key={route}>
                  <Link
                    to={route}
                    className="text-sm text-muted-foreground transition-colors hover:text-saudi-green"
                  >
                    {ROUTE_LABELS[route]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">More</h3>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((route) => (
                <li key={route}>
                  <Link
                    to={route}
                    className="text-sm text-muted-foreground transition-colors hover:text-saudi-green"
                  >
                    {ROUTE_LABELS[route]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <p className="text-xs text-muted-foreground">
              The content provided on this platform is for guidance purposes only and does not constitute
              professional legal advice. Please consult with qualified legal professionals for specific legal
              matters.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear}. Built with <Heart className="inline h-4 w-4 text-red-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-saudi-green hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
