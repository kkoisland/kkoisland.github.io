# Tech Profile

A React-based personal profile page showcasing technical skills, writing, contact information, and interests. Designed to be minimal, responsive, and accessible for international audiences.

## Site

https://kkoisland.github.io/

## Setup

Clone the repository, install dependencies, and start the development server:

```bash
git clone git@github.com:kkoisland/kkoisland.github.io.git
cd tech-profile
nvm use
npm install
npm run dev
```

## Deployment

To build and deploy the site to GitHub Pages:

```bash
npm run build # creates production-ready files in dist/
npm run deploy # pushes dist/ contents to gh-pages branch
```

The site is published at:  
https://kkoisland.github.io/

## Features

- Responsive layout for mobile and desktop
- Dark mode support
- Profile introduction with name and title
- Social links with hover animations
- Interest tags and personal background
- Clean and accessible design

## Tech Stack

- Vite (Development environment and build tool)
- React (Functional Components)
- TypeScript (Type-safe development)
- ESLint (Code linting)
- Prettier (Code formatting)
- react-icons (Brand-style icons)

## Project Structure

```bash
tech-profile/
├── public/
│ └── favicon.ico
├── src/
│ ├── assets/
│ ├── App.tsx
│ └── main.tsx
├── .vscode/
│ └── settings.json
├── .gitignore
├── .npmrc
├── .nvmrc
├── .prettierrc.json
├── .prettierignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```
