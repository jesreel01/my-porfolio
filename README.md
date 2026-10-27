# Jesreel's Portfolio

A modern, responsive portfolio website showcasing my work, skills, and experience as a Software Engineer & Full-stack Developer.

![Portfolio Website](https://img.shields.io/badge/Portfolio-Live-success)

## ✨ Features

- 🚀 Blazing fast performance with Next.js 15 and App Router
- 🎨 Modern UI with Tailwind CSS v4
- 📱 Fully responsive design for all devices
- 🌙 Dark/Light mode support
- 📝 Blog with MDX support
- 💼 Project showcase
- 📬 Contact form with email functionality
- 🔍 SEO optimized with metadata and sitemap

## 🛠️ Technologies

### Frontend
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

### Content
- [MDX](https://mdxjs.com/) - Markdown with JSX support
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) - MDX rendering
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Front matter parser

### Backend & Infrastructure
- [SST](https://sst.dev/) - Infrastructure as code for AWS
- [Nodemailer](https://nodemailer.com/) - Email sending for contact form
- [Zod](https://zod.dev/) - Schema validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm, npm, or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-porfolio.git
cd my-porfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
my-porfolio/
├── actions/            # Server actions for forms
├── app/                # Next.js App Router pages and layouts
│   ├── about/          # About page
│   ├── blog/           # Blog pages and templates
│   ├── projects/       # Projects page
│   └── api/            # API routes
├── components/         # React components
│   ├── seo/            # SEO components
│   └── ui/             # UI components
├── content/            # MDX content files
│   └── blog/           # Blog posts
├── data/               # Static data files
├── lib/                # Utility functions
├── public/             # Static assets
└── types/              # TypeScript type definitions
```

## 📝 Blog

The blog uses MDX for content with frontmatter support. Blog posts are stored in the `content/blog` directory.

## 🤝 Contributing

Commit, branch, and PR conventions are in [CONTRIBUTING.md](CONTRIBUTING.md).

## 👤 Author

- [Jesreel John Miole](https://jesreel.me)
- GitHub: [@jesreel01](https://github.com/jesreel01)
- LinkedIn: [Jesreel John Miole](https://linkedin.com/in/yourlinkedin)

## 🙏 Acknowledgments

- Special thanks to the creators of Next.js, React, and all the libraries used in this project.
- Icons from [Lucide React](https://lucide.dev/)
