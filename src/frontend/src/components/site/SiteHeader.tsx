import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { ROUTES, ROUTE_LABELS } from './routes';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    ROUTES.SERVICES,
    ROUTES.HOW_IT_WORKS,
    ROUTES.PRICING,
    ROUTES.RESOURCES,
    ROUTES.MENTORSHIP,
    ROUTES.ABOUT,
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to={ROUTES.HOME} className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-saudi-green">
            <span className="text-lg font-bold text-white">SBL</span>
          </div>
          <span className="hidden font-bold text-foreground sm:inline-block">
            Saudi Business Launchpad
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((route) => (
            <Link
              key={route}
              to={route}
              className={`text-sm font-medium transition-colors hover:text-saudi-green ${
                currentPath === route ? 'text-saudi-green' : 'text-foreground/80'
              }`}
            >
              {ROUTE_LABELS[route]}
            </Link>
          ))}
          <Link
            to={ROUTES.CONTACT}
            className="rounded-full bg-saudi-green px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-saudi-green-dark hover:shadow-md"
          >
            {ROUTE_LABELS[ROUTES.CONTACT]}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="container flex flex-col space-y-4 py-4">
            {navLinks.map((route) => (
              <Link
                key={route}
                to={route}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-saudi-green ${
                  currentPath === route ? 'text-saudi-green' : 'text-foreground/80'
                }`}
              >
                {ROUTE_LABELS[route]}
              </Link>
            ))}
            <Link
              to={ROUTES.CONTACT}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-saudi-green px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-saudi-green-dark"
            >
              {ROUTE_LABELS[ROUTES.CONTACT]}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
