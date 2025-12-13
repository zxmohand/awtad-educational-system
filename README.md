# Awtad Educational Hub

A modern educational platform built with React, TypeScript, and Tailwind CSS.

## About

Awtad Educational Hub is a comprehensive learning management system designed to provide an intuitive and engaging educational experience. The app includes Arabic (RTL) UI content and pages such as Home, About, Subscription, SignUp, Login, and Dashboard.

## Technologies

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI component library
- **shadcn-ui** - Beautiful, accessible component library (used in components/ui)
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Query** - Data fetching and state management
- **Sonner / Toaster** - Notification utilities used in the app

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd awtad-educational-system

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at http://localhost:3000 (or the port shown in the terminal, e.g. Vite's default http://localhost:5173).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Routes

The application defines client-side routes (see src/App.tsx):

- `/` - Home
- `/subscription` - Subscription page
- `/signup` - Sign up page
- `/login` - Login page
- `/about` - About page
- `/dashboard` - Dashboard (protected/primary user area)

## Development

### Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── layout/        # Layout and Navbar (Layout.tsx, Navbar.tsx)
│   ├── ui/            # shadcn-ui based components (button, toast, tooltip, etc.)
│   └── NavLink.tsx
├── pages/             # Page components (Home, About, Subscription, etc.)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── App.tsx            # Route definitions and providers
├── main.tsx           # App bootstrap
├── index.css          # Global styles
└── vite-env.d.ts      # Vite TypeScript env types
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.
