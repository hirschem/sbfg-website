# Splash Boyz Financial Group - Project Setup

## Project Overview
- **Name**: Splash Boyz Financial Group
- **Type**: Next.js landing page
- **Tech Stack**: Next.js, React, TypeScript, Tailwind CSS

## Project Structure Created ✓

All project files have been created successfully:
- Configuration files (package.json, tsconfig.json, next.config.ts, tailwind.config.ts)
- Source files (src/app/layout.tsx, src/app/page.tsx, src/app/globals.css)
- Landing page with hero section, services section, and basic layout

## Important Note About Dependencies

Due to the folder being on Google Drive, npm is encountering file locking issues during package installation. You have two options:

### Option 1: Move Project to Local Drive (Recommended)
1. Close VS Code
2. Move the entire project folder from Google Drive to a local drive (e.g., C:\Projects\splash-boyz-financial-group)
3. Reopen the folder in VS Code
4. Run `npm install` to install dependencies
5. Run `npm run dev` to start the development server

### Option 2: Work with Google Drive (May have sync conflicts)
1. Pause Google Drive sync temporarily
2. Run `npm install` again
3. Run `npm run dev` to start the development server
4. Resume sync after development

## To Run the Project

Once dependencies are installed:
```bash
npm run dev
```

Visit http://localhost:3000 to see your landing page.

## Customization Next Steps

- Replace placeholder content in src/app/page.tsx
- Add your friends' branding and colors
- Add more sections (About, Contact, Testimonials)
- Replace service descriptions with actual offerings
