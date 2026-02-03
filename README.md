# ReactifyAI - Astro 5 AI Startup Website

ReactifyAI is a high-performance, modern website designed for AI startups and tech companies. Originally a React application, it has been fully converted to **Astro 5** to leverage Static Site Generation (SSG), resulting in blazing-fast performance, superior SEO, and seamless content management via Sanity CMS.

[**🚀 Live Demo**](https://reactify-ai-astro.vercel.app)

## 🚀 Key Features

- **Astro 5 Architecture**: Zero-JavaScript frontend by default (Islands Architecture) for optimal performance.
- **Static Site Generation (SSG)**: All pages, including dynamic blog posts and case studies, are pre-rendered at build time.
- **Type-Safe Development**: Fully typed codebase using TypeScript for robustness and maintainability.
- **Interactive Islands**: React 19 components integrated for complex interactivity (Forms, Toggles, Dropdowns) only where needed.
- **Modern Styling**: Powered by **Tailwind CSS v4** and Vite.
- **CMS Integration**: Deeply integrated with **Sanity CMS** for managing Blogs, Projects, Services, Facts, and Team members.
- **Secure Contact Form**: Server-side email handling using EmailJS (Node.js SDK) to protect API keys.
- **SEO Optimized**: Dynamic metadata, OpenGraph tags, sitemap generation, and `robots.txt` configuration.
- **Optimized Assets**: Automatic image optimization using Astro Assets and `sharp`.

---

## 🛠 Tech Stack

| Category | Technology | Description |
|----------|------------|-------------|
| **Core** | [Astro 5](https://astro.build/) | The static site generator and main framework. |
| **UI** | [React 19](https://react.dev/) | Used for interactive components (Islands). |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework with Vite plugin. |
| **CMS** | [Sanity](https://www.sanity.io/) | Headless CMS for all dynamic content. |
| **Forms** | React Hook Form + Yup | Robust form handling and schema validation. |
| **Email** | EmailJS (Node.js) | Server-side email sending service. |
| **Animations** | AOS + Lenis | Animate On Scroll and smooth scrolling effects. |
| **Images** | Sharp | High-performance image processing for Astro Assets. |
| **Package Manager** | [pnpm](https://pnpm.io/) | Fast, disk space efficient package manager. |

---

## 📂 Project Structure

```bash
reactifyai-astro/
├── public/              # Static assets (fonts, rounded robots.txt, favicon)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── background_animation/ # Canvas/CSS background effects (Star fields, Glows)
│   │   ├── cards/       # UI Cards (BlogCard, ProjectCard, etc.)
│   │   ├── common/      # Generic UI (Headings, Buttons, Badges)
│   │   ├── homePageSections/ # Layout sections for the landing page
│   │   ├── interactive/ # React "Islands" (ContactForm, ThemeToggle, DropDown)
│   │   ├── Footer.astro # Site-wide Footer
│   │   └── Header.astro # Site-wide Header
│   ├── layouts/         # Main HTML wrapper (Layout.astro)
│   ├── lib/             # Sanity client configuration & helper functions
│   ├── pages/           # Astro file-based routing
│   │   ├── api/         # Server-side API endpoints (e.g., /api/contact)
│   │   ├── blog/        # Blog listing & [slug].astro for individual posts
│   │   ├── projects/    # Project listing & [slug].astro for details
│   │   ├── services/    # Services listing & [slug].astro for details
│   │   ├── index.astro  # Main Landing Page
│   │   ├── 404.astro    # Custom "Lost in Space" Error Page
│   │   └── ...          # Other content pages (about, team, faq, etc.)
│   ├── styles/          # Global CSS & Tailwind configuration
│   ├── utils/           # TypeScript interfaces, constants, and helper functions
│   └── scripts/         # Client-side initialization scripts (AOS, Lenis)
├── astro.config.mjs     # Astro configuration (Integrations, Image domains, Site URL)
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies & scripts
```

---

## ⚙️ Environment Variables

To run this project, you need to configure environment variables. Create a `.env` file in the root directory.

### 1. Sanity CMS (Public)
Required to fetch content for the site.
```env
PROJECT_ID=your_sanity_project_id
DATASET=production
API_VERSION=2024-02-01
SANITY_TOKEN=your_sanity_ro_token # Optional for public datasets, required for private
```

### 2. EmailJS (Private & Public)
Required for the Contact Form to function.
```env
# Client-side (if needed) & Server-side Service Config
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key

# CRITICAL: Security key for the server-side API route. DO NOT expose to client.
EMAILJS_PRIVATE_KEY=your_private_key 

# Validated Sender Name
FROM_NAME="ReactifyAI System"
```

### 3. Images (Public)
Default fallbacks or hero images.
```env
PUBLIC_HERO_IMAGE=/images/hero-bg.jpg
PUBLIC_ABOUT_IMAGE=/images/about.jpg
```

---

## 💻 All Commands

Available scripts in `package.json`:

| Command | Description |
|---------|-------------|
| `pnpm install` | Installs all dependencies. |
| `pnpm dev` | Starts the local development server at `localhost:4321`. |
| `pnpm build` | Compiles the site into static HTML/CSS/JS in `dist/`. |
| `pnpm preview` | Serves the built `dist/` folder locally to test production behavior. |
| `pnpm astro [cmd]` | Runs Astro CLI commands directly (e.g., `pnpm astro add sitemap`). |

---

## 🏃‍♂️ How to Run Locally

1.  **Clone & Install**:
    ```bash
    git clone <repo-url>
    cd reactifyai-astro
    pnpm install
    ```

2.  **Setup Environment**:
    - Copy `.env.example` (if exists) or create `.env` using the guide above.
    - Ensure your Sanity Project ID is correct.

3.  **Start Dev Server**:
    ```bash
    pnpm dev
    ```
    - Open `http://localhost:4321` in your browser.
    - The site supports Hot Module Replacement (HMR).

---

## 🔄 Project Flow & Architecture

### 1. Static Site Generation (SSG)
- **Hybrid Rendering**: Configured in `astro.config.mjs` with `output: 'server'` and `prerender: true` for most pages.
- **Build Process**: When you run `pnpm build`:
    1. Astro fetches all data from Sanity CMS.
    2. It generates static `.html` files for every route (Home, About, all Blog Posts, etc.).
    3. It optimizes all images using `sharp` to WebP/Avif.
    4. It generates a `sitemap-index.xml` and `robots.txt`.

### 2. The Contact Form Flow (Server-Side)
Unlike standard static forms, this uses a secure backend flow to hide API keys.
1.  **User Action**: User fills out the React form (`ContactForm.tsx`) and clicks Send.
2.  **Client Request**: The browser sends a `POST` request to `/api/contact` with the form data.
3.  **Server Action**:
    - The API route (`src/pages/api/contact.ts`) receives the data.
    - **Step A**: Saves the entry to your Sanity CMS as a `contact-form` document.
    - **Step B**: Uses the `EmailJS` Node.js SDK and your **Private Key** to send the email.
4.  **Response**: The server responds with 200 OK, and the client displays a success Toast.

### 3. Dynamic Routing
- **File**: `src/pages/blog/[slug].astro`
- **Mechanism**: The `getStaticPaths()` function queries Sanity for all blog slugs. Astro then creates a dedicated static HTML page for each one.
- **Fallbacks**: A custom `404.astro` page handles any unknown routes.

---

## 🚀 Deployment on Vercel

1.  **Push to Git**: Commit your code to GitHub/GitLab.
2.  **New Project**: In Vercel, "Add New Project" and import your repo.
3.  **Framework Detection**: Vercel will auto-detect **Astro**.
    - Build Command: `pnpm build`
    - Output Directory: `dist`
4.  **Environment Variables**:
    - **Very Important**: Go to "Settings" -> "Environment Variables" in Vercel.
    - Add all your `.env` keys (`PROJECT_ID`, `EMAILJS_PRIVATE_KEY`, etc.).
5.  **Deploy**: Click Deploy.

### ⚡ Handling Content Updates
Since the site is **Static (SSG)**, content updates in Sanity won't show up immediately. You must trigger a **Rebuild**.
- **The Fix**: Create a "Deploy Hook" in Vercel settings. Add this URL to your Sanity Project's Webhooks. Now, whenever you publish in Sanity, Vercel will automatically rebuild your site!

<!-- ---

## � License

This project is open-source and available under the [MIT License](LICENSE).
 -->