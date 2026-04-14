# ODC-Frontend
Marketing site / landing page for **Owner Driver Collective (ODC)** built with **Next.js (App Router)** and React.
## Tech stack
- **Next.js** (React framework)
- **React**
- **CSS Modules** (component styles)
- **GSAP** (hero background motion)
- **lucide-react** (icons)
- **Resend** (email delivery for contact flow)
## Getting started
### Prerequisites
- **Node.js** (recommended: latest LTS)
- **npm** (ships with Node)
### Install
```bash
npm install
Run locally
npm run dev
Then open http://localhost:3000.

Scripts
npm run dev — start dev server
npm run build — create production build
npm run start — run production server (after build)
npm run lint — run Next.js lint
Project structure (high level)
app/ — Next.js App Router pages/layouts
components/ — UI sections (Hero, About, Features, Banner, ContactForm, Footer)
public/assets/ — images and static assets
Assets / images
Local images live in public/assets/.

next.config.mjs allows loading remote images from Unsplash (images.unsplash.com) if you choose to use remote images with next/image.

Deployment
Build and start:


npm run build
npm run start# ODC-Frontend
