# Project Folder Structure & Configuration Files

## Overview
This is a **Next.js 16** project with **Tailwind CSS v4** and **shadcn/ui** components. Built with JavaScript (no TypeScript).

---

## 📁 Complete Folder Structure

```
codespaces-blank/
├── .gitignore
├── .next/                          # Next.js build & dev files
│   └── dev/
│       ├── build/
│       ├── cache/
│       ├── logs/
│       ├── server/
│       ├── static/
│       ├── types/
│       ├── build-manifest.json
│       ├── fallback-build-manifest.json
│       ├── package.json
│       ├── prerender-manifest.json
│       ├── routes-manifest.json
│       └── trace
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── PROJECT_STRUCTURE.md            # This file
├── components/                     # React components
│   └── ui/
│       ├── button.jsx              # shadcn/ui Button component
│       └── card.jsx                # shadcn/ui Card component
├── lib/                            # Utility functions
│   └── utils.js                    # Tailwind merge utilities
├── pages/                          # Next.js pages
│   ├── _app.js                     # App wrapper
│   ├── _document.js                # Document wrapper
│   ├── index.js                    # Home page (with Card, Button, Tailwind examples)
│   └── api/
│       └── hello.js                # API route example
├── public/                         # Static assets
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── styles/                         # CSS files
│   └── globals.css                 # Global Tailwind CSS
├── node_modules/                   # Dependencies (not shown in detail)
├── package.json
├── package-lock.json
├── components.json                 # shadcn/ui config
├── jsconfig.json                   # JavaScript path aliases
├── next.config.mjs                 # Next.js configuration
├── postcss.config.mjs              # PostCSS configuration
└── eslint.config.mjs               # ESLint configuration
```

---

## 🔧 Configuration Files

### 1. **package.json**
```json
{
  "name": "myapp",
    "version": "0.1.0",
      "private": true,
        "scripts": {
            "dev": "next dev",
                "build": "next build",
                    "start": "next start",
                        "lint": "eslint"
                          },
                            "dependencies": {
                                "@base-ui/react": "^1.5.0",
                                    "class-variance-authority": "^0.7.1",
                                        "clsx": "^2.1.1",
                                            "lucide-react": "^1.17.0",
                                                "next": "16.2.7",
                                                    "react": "19.2.4",
                                                        "react-dom": "19.2.4",
                                                            "shadcn": "^4.10.0",
                                                                "tailwind-merge": "^3.6.0",
                                                                    "tw-animate-css": "^1.4.0"
                                                                      },
                                                                        "devDependencies": {
                                                                            "@tailwindcss/postcss": "^4",
                                                                                "eslint": "^9",
                                                                                    "eslint-config-next": "16.2.7",
                                                                                        "tailwindcss": "^4"
                                                                                          }
                                                                                          }
                                                                                          ```

                                                                                          **Scripts:**
                                                                                          - `npm run dev` - Start development server on port 3000
                                                                                          - `npm run build` - Build for production
                                                                                          - `npm start` - Start production server
                                                                                          - `npm run lint` - Run ESLint

                                                                                          ---

                                                                                          ### 2. **jsconfig.json**
                                                                                          ```json
                                                                                          {
                                                                                            "compilerOptions": {
                                                                                                "paths": {
                                                                                                      "@/*": ["./*"]
                                                                                                          }
                                                                                                            }
                                                                                                            }
                                                                                                            ```

                                                                                                            **Purpose:** Configures path aliases for cleaner imports
                                                                                                            - `@/components` → imports from the components folder
                                                                                                            - `@/lib` → imports from the lib folder
                                                                                                            - `@/pages` → imports from the pages folder

                                                                                                            ---

                                                                                                            ### 3. **components.json**
                                                                                                            ```json
                                                                                                            {
                                                                                                              "$schema": "https://ui.shadcn.com/schema.json",
                                                                                                                "style": "base-nova",
                                                                                                                  "rsc": false,
                                                                                                                    "tsx": false,
                                                                                                                      "tailwind": {
                                                                                                                          "config": "",
                                                                                                                              "css": "styles/globals.css",
                                                                                                                                  "baseColor": "neutral",
                                                                                                                                      "cssVariables": true,
                                                                                                                                          "prefix": ""
                                                                                                                                            },
                                                                                                                                              "iconLibrary": "lucide",
                                                                                                                                                "rtl": false,
                                                                                                                                                  "aliases": {
                                                                                                                                                      "components": "@/components",
                                                                                                                                                          "utils": "@/lib/utils",
                                                                                                                                                              "ui": "@/components/ui",
                                                                                                                                                                  "lib": "@/lib",
                                                                                                                                                                      "hooks": "@/hooks"
                                                                                                                                                                        },
                                                                                                                                                                          "menuColor": "default",
                                                                                                                                                                            "menuAccent": "subtle",
                                                                                                                                                                              "registries": {}
                                                                                                                                                                              }
                                                                                                                                                                              ```

                                                                                                                                                                              **Purpose:** Configuration for shadcn/ui component system
                                                                                                                                                                              - Component style: `base-nova`
                                                                                                                                                                              - No React Server Components (RSC): false
                                                                                                                                                                              - No TypeScript: tsx = false
                                                                                                                                                                              - Global CSS: `styles/globals.css`
                                                                                                                                                                              - Icon library: Lucide icons
                                                                                                                                                                              - Component aliases for easy imports

                                                                                                                                                                              ---

                                                                                                                                                                              ### 4. **next.config.mjs**
                                                                                                                                                                              ```javascript
                                                                                                                                                                              /** @type {import('next').NextConfig} */
                                                                                                                                                                              const nextConfig = {
                                                                                                                                                                                /* config options here */
                                                                                                                                                                                  reactStrictMode: true,
                                                                                                                                                                                  };

                                                                                                                                                                                  export default nextConfig;
                                                                                                                                                                                  ```

                                                                                                                                                                                  **Purpose:** Next.js configuration
                                                                                                                                                                                  - `reactStrictMode: true` - Enables React StrictMode for development checks

                                                                                                                                                                                  ---

                                                                                                                                                                                  ### 5. **postcss.config.mjs**
                                                                                                                                                                                  ```javascript
                                                                                                                                                                                  const config = {
                                                                                                                                                                                    plugins: {
                                                                                                                                                                                        "@tailwindcss/postcss": {},
                                                                                                                                                                                          },
                                                                                                                                                                                          };

                                                                                                                                                                                          export default config;
                                                                                                                                                                                          ```

                                                                                                                                                                                          **Purpose:** PostCSS configuration for Tailwind CSS v4
                                                                                                                                                                                          - Integrates Tailwind CSS as a PostCSS plugin

                                                                                                                                                                                          ---

                                                                                                                                                                                          ### 6. **eslint.config.mjs**
                                                                                                                                                                                          ```javascript
                                                                                                                                                                                          import { defineConfig, globalIgnores } from "eslint/config";
                                                                                                                                                                                          import nextVitals from "eslint-config-next/core-web-vitals";

                                                                                                                                                                                          const eslintConfig = defineConfig([
                                                                                                                                                                                            ...nextVitals,
                                                                                                                                                                                              // Override default ignores of eslint-config-next.
                                                                                                                                                                                                globalIgnores([
                                                                                                                                                                                                    // Default ignores of eslint-config-next:
                                                                                                                                                                                                        ".next/**",
                                                                                                                                                                                                            "out/**",
                                                                                                                                                                                                                "build/**",
                                                                                                                                                                                                                    "next-env.d.ts",
                                                                                                                                                                                                                      ]),
                                                                                                                                                                                                                      ]);

                                                                                                                                                                                                                      export default eslintConfig;
                                                                                                                                                                                                                      ```

                                                                                                                                                                                                                      **Purpose:** ESLint configuration for code quality
                                                                                                                                                                                                                      - Uses Next.js recommended config + Web Vitals
                                                                                                                                                                                                                      - Ignores build artifacts and generated files

                                                                                                                                                                                                                      ---

                                                                                                                                                                                                                      ### 7. **.gitignore**
                                                                                                                                                                                                                      ```
                                                                                                                                                                                                                      # dependencies
                                                                                                                                                                                                                      /node_modules
                                                                                                                                                                                                                      /.pnp
                                                                                                                                                                                                                      .pnp.*
                                                                                                                                                                                                                      .yarn/*

                                                                                                                                                                                                                      # testing
                                                                                                                                                                                                                      /coverage

                                                                                                                                                                                                                      # next.js
                                                                                                                                                                                                                      /.next/
                                                                                                                                                                                                                      /out/

                                                                                                                                                                                                                      # production
                                                                                                                                                                                                                      /build

                                                                                                                                                                                                                      # misc
                                                                                                                                                                                                                      .DS_Store
                                                                                                                                                                                                                      *.pem

                                                                                                                                                                                                                      # debug
                                                                                                                                                                                                                      npm-debug.log*
                                                                                                                                                                                                                      yarn-debug.log*
                                                                                                                                                                                                                      yarn-error.log*

                                                                                                                                                                                                                      # env files
                                                                                                                                                                                                                      .env*

                                                                                                                                                                                                                      # vercel
                                                                                                                                                                                                                      .vercel

                                                                                                                                                                                                                      # typescript
                                                                                                                                                                                                                      *.tsbuildinfo
                                                                                                                                                                                                                      next-env.d.ts
                                                                                                                                                                                                                      ```

                                                                                                                                                                                                                      **Purpose:** Specifies files/folders to ignore in Git

                                                                                                                                                                                                                      ---

                                                                                                                                                                                                                      ## 📝 Key Files & Components

                                                                                                                                                                                                                      ### Pages

                                                                                                                                                                                                                      #### **pages/index.js** (Home Page)
                                                                                                                                                                                                                      - Displays shadcn/ui Cards and Buttons
                                                                                                                                                                                                                      - Custom Tailwind CSS styled buttons (gradient, glow, neon, glass morphism, animated)
                                                                                                                                                                                                                      - Button size variations and states
                                                                                                                                                                                                                      - Examples of Tailwind CSS utilities

                                                                                                                                                                                                                      #### **pages/_app.js**
                                                                                                                                                                                                                      - Root application wrapper
                                                                                                                                                                                                                      - Global app configuration

                                                                                                                                                                                                                      #### **pages/_document.js**
                                                                                                                                                                                                                      - Custom HTML document structure
                                                                                                                                                                                                                      - Sets up HTML and body tags

                                                                                                                                                                                                                      #### **pages/api/hello.js**
                                                                                                                                                                                                                      - Example API route

                                                                                                                                                                                                                      ### Components

                                                                                                                                                                                                                      #### **components/ui/button.jsx**
                                                                                                                                                                                                                      - shadcn/ui Button component
                                                                                                                                                                                                                      - Supports multiple variants: default, secondary, outline, destructive
                                                                                                                                                                                                                      - Fully customizable with Tailwind CSS

                                                                                                                                                                                                                      #### **components/ui/card.jsx**
                                                                                                                                                                                                                      - shadcn/ui Card component
                                                                                                                                                                                                                      - Includes: Card, CardHeader, CardTitle, CardDescription, CardContent
                                                                                                                                                                                                                      - Perfect for organizing content

                                                                                                                                                                                                                      ### Styling

                                                                                                                                                                                                                      #### **styles/globals.css**
                                                                                                                                                                                                                      - Global Tailwind CSS styles
                                                                                                                                                                                                                      - Base styles and CSS variables

                                                                                                                                                                                                                      #### **lib/utils.js**
                                                                                                                                                                                                                      - Utility functions (e.g., `cn()` for merging Tailwind classes)
                                                                                                                                                                                                                      - Uses `clsx` and `tailwind-merge`

                                                                                                                                                                                                                      ---

                                                                                                                                                                                                                      ## 🚀 Quick Start Commands

                                                                                                                                                                                                                      ```bash
                                                                                                                                                                                                                      # Install dependencies
                                                                                                                                                                                                                      npm install

                                                                                                                                                                                                                      # Start development server (runs on http://localhost:3000)
                                                                                                                                                                                                                      npm run dev

                                                                                                                                                                                                                      # Build for production
                                                                                                                                                                                                                      npm run build

                                                                                                                                                                                                                      # Start production server
                                                                                                                                                                                                                      npm start

                                                                                                                                                                                                                      # Run linting
                                                                                                                                                                                                                      npm run lint

                                                                                                                                                                                                                      # Add new shadcn/ui components
                                                                                                                                                                                                                      npx shadcn@latest add [component-name]
                                                                                                                                                                                                                      ```

                                                                                                                                                                                                                      ---

                                                                                                                                                                                                                      ## 📦 Dependencies Summary

                                                                                                                                                                                                                      | Package | Version | Purpose |
                                                                                                                                                                                                                      |---------|---------|---------|
                                                                                                                                                                                                                      | next | 16.2.7 | React framework |
                                                                                                                                                                                                                      | react | 19.2.4 | UI library |
                                                                                                                                                                                                                      | react-dom | 19.2.4 | DOM rendering |
                                                                                                                                                                                                                      | tailwindcss | ^4 | Utility CSS framework |
                                                                                                                                                                                                                      | shadcn | ^4.10.0 | UI component library |
                                                                                                                                                                                                                      | clsx | ^2.1.1 | Conditional class utilities |
                                                                                                                                                                                                                      | tailwind-merge | ^3.6.0 | Merge Tailwind classes |
                                                                                                                                                                                                                      | lucide-react | ^1.17.0 | Icon library |
                                                                                                                                                                                                                      | class-variance-authority | ^0.7.1 | Variant system |
                                                                                                                                                                                                                      | @base-ui/react | ^1.5.0 | Unstyled UI components |
                                                                                                                                                                                                                      | tw-animate-css | ^1.4.0 | Animation utilities |

                                                                                                                                                                                                                      ---

                                                                                                                                                                                                                      ## 📋 Dev Dependencies

                                                                                                                                                                                                                      | Package | Version | Purpose |
                                                                                                                                                                                                                      |---------|---------|---------|
                                                                                                                                                                                                                      | @tailwindcss/postcss | ^4 | Tailwind CSS PostCSS plugin |
                                                                                                                                                                                                                      | eslint | ^9 | Code linting |
                                                                                                                                                                                                                      | eslint-config-next | 16.2.7 | Next.js ESLint configuration |

                                                                                                                                                                                                                      ---

                                                                                                                                                                                                                      ## 🎨 Tailwind CSS v4 Features Used

                                                                                                                                                                                                                      - Gradient backgrounds: `bg-gradient-to-br`
                                                                                                                                                                                                                      - Responsive design: `md:grid-cols-2`
                                                                                                                                                                                                                      - Hover effects: `hover:shadow-xl`, `hover:scale-105`
                                                                                                                                                                                                                      - Color utilities: `text-gray-900`, `bg-blue-50`
                                                                                                                                                                                                                      - Spacing: `p-8`, `mb-12`, `gap-4`
                                                                                                                                                                                                                      - Border radius: `rounded-lg`
                                                                                                                                                                                                                      - Transitions: `transition-all`, `duration-200`
                                                                                                                                                                                                                      - Animations: `animate-pulse`

                                                                                                                                                                                                                      ---

                                                                                                                                                                                                                      ## 🔐 Environment Variables

                                                                                                                                                                                                                      Create a `.env.local` file for environment-specific variables:

                                                                                                                                                                                                                      ```
                                                                                                                                                                                                                      # Example
                                                                                                                                                                                                                      NEXT_PUBLIC_API_URL=http://localhost:3000
                                                                                                                                                                                                                      DATABASE_URL=your-database-url
                                                                                                                                                                                                                      ```

                                                                                                                                                                                                                      ---

                                                                                                                                                                                                                      ## 📚 Useful Resources

                                                                                                                                                                                                                      - [Next.js Documentation](https://nextjs.org/docs)
                                                                                                                                                                                                                      - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
                                                                                                                                                                                                                      - [shadcn/ui Documentation](https://ui.shadcn.com)
                                                                                                                                                                                                                      - [React Documentation](https://react.dev)

                                                                                                                                                                                                                      ---

                                                                                                                                                                                                                      **Last Updated:** June 6, 2026
                                                                                                                                                                                                                      