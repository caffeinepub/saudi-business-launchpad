export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  HOW_IT_WORKS: '/how-it-works',
  PRICING: '/pricing',
  RESOURCES: '/resources',
  MENTORSHIP: '/mentorship',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export const ROUTE_LABELS = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.SERVICES]: 'Services',
  [ROUTES.HOW_IT_WORKS]: 'How It Works',
  [ROUTES.PRICING]: 'Pricing',
  [ROUTES.RESOURCES]: 'Resources',
  [ROUTES.MENTORSHIP]: 'Mentorship & Networking',
  [ROUTES.ABOUT]: 'About Us',
  [ROUTES.CONTACT]: 'Get Started',
} as const;
