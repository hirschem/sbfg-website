# Splash Boyz Financial Group

Official website for Splash Boyz Financial Group, a professional financial services firm specializing in wealth management, retirement planning, and strategic business financial guidance.

## Overview

This repository contains the source code for the Splash Boyz Financial Group corporate website. The site serves as the primary digital presence for the firm, providing information about our services, company values, and approach to financial planning.

Built as a modern, performant web application, the site is designed to scale with the company's growth and evolving service offerings.

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font System:** Google Fonts (Playfair Display, Inter)
- **Deployment:** Vercel
- **Version Control:** Git

## Project Structure

```
├── src/
│   └── app/
│       ├── layout.tsx        # Root layout with font configuration
│       ├── page.tsx          # Main landing page
│       └── globals.css       # Global styles and typography
├── public/
│   └── images/              # Company logos and branding assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Local Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hirschem/sbfg-website.git
   cd sbfg-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Run production server locally
- `npm run lint` - Run ESLint for code quality checks

## Deployment

The site is configured for deployment on Vercel and will automatically deploy from the `master` branch upon push.

### Production Deployment

Production builds are automatically generated and deployed when changes are merged to the master branch. The build process includes:

- TypeScript compilation
- CSS optimization and minification
- Image optimization
- Static generation where applicable

### Environment Configuration

Production environment variables should be configured in the Vercel dashboard. No sensitive credentials should be committed to the repository.

## Future Expansion

This codebase is structured to accommodate future enhancements, including:

- Client portal integration
- Resource library and financial insights blog
- Team member profiles and credentials
- Interactive financial calculators
- Appointment scheduling system
- Newsletter subscription management

## Code Standards

- TypeScript strict mode enabled
- ESLint configuration for code quality
- Consistent formatting with Prettier
- Component-based architecture
- Responsive design patterns
- Accessibility compliance (WCAG 2.1)

## Browser Support

The site is optimized for modern browsers:

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Copyright © 2026 Splash Boyz Financial Group. All rights reserved.

This software and associated documentation files are proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit written permission from Splash Boyz Financial Group.

## Contact

For technical inquiries regarding this website, please contact the development team through official company channels.

---

**Splash Boyz Financial Group**  
Navigating for a Better Financial Future


To learn more about Next.js, check out the [Next.js Documentation](https://nextjs.org/docs).
