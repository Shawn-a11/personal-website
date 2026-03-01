# Shuwen Ge - Personal Website

Personal portfolio website for academic, research, and job applications. Built with Next.js, Tailwind CSS, and deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project" and import this repository
4. Vercel will auto-detect Next.js — click Deploy
5. Your site will be live at `https://your-project.vercel.app`

## Project Structure

```
├── app/
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── ProjectCard.tsx   # Research project cards
│   └── PublicationCard.tsx
└── public/           # Static assets (add avatar.jpg here)
```

## Customization

- **Avatar**: Add `public/avatar.jpg` for your profile photo
- **Social links**: Edit `components/Sidebar.tsx` (LinkedIn, GitHub, X)
- **Content**: Update `app/page.tsx` with your latest projects and publications
