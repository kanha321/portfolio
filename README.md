# Shubham Gupta — Portfolio Website

A fast, decoupled personal portfolio and digital garden inspired by the design system of [taniarascia.com](https://github.com/taniarascia/taniarascia.com), built with modern **React 18 + Vite + React Router**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static production bundle in `dist/`, ready to deploy anywhere (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

---

## 🗂️ Data & Design Decoupling

All personal information, resume records, work experience, projects, skills, education, and links are **100% decoupled** from UI components and stored in `src/data/`:

| File | Content | What to update here |
| :--- | :--- | :--- |
| [`src/data/siteConfig.js`](src/data/siteConfig.js) | Site Metadata & Contact | Your name, tagline, email, phone, social handles, mascot speech bubble text |
| [`src/data/navigation.js`](src/data/navigation.js) | Nav Links | Header items, sidebar navigation, sub-links, and footer links |
| [`src/data/timeline.js`](src/data/timeline.js) | Hero "A brief timeline" | Career & education milestones shown in the hero section |
| [`src/data/projects.js`](src/data/projects.js) | Projects & Hackathons | Add/edit projects, GitHub URLs, live demo links, award badges, and case studies |
| [`src/data/experience.js`](src/data/experience.js) | Work History | Roles, companies, dates, locations, tech stack summaries, and bullet points |
| [`src/data/skills.js`](src/data/skills.js) | Categorized Skills | Android/Mobile, Languages, Backend, and Systems/AI skill tags |
| [`src/data/education.js`](src/data/education.js) | Academic Degrees | MCA (MNNIT Allahabad), BCA (St. Thomas College), CPI, and descriptions |
| [`src/data/achievements.js`](src/data/achievements.js) | Honors & Awards | DevJam 1st place, NIMCET AIR 190, Hack36 4th prize, CodeSangam finalist |
| [`src/data/about.js`](src/data/about.js) | Detailed Bio & Story | Long-form story, toolbox categories, and background narrative |

> [!TIP]
> To update any content, edit the corresponding file in `src/data/`. The UI components will dynamically render the updated content without touching any JSX/CSS!

---

## 🎨 Design System Features

- **Theme Switching**: Seamless light and dark mode toggling, persisted across sessions in `localStorage`.
- **Accent Color Picker**: 5 signature accent colors (Lavender, Pink, Yellow, Green, Blue) dynamically adjusting `--color-primary`.
- **Responsive Layout**:
  - **Desktop (`>= 1020px`)**: Two-column layout with a sticky left sidebar containing your avatar, bio snippet, navigation links, and social tooltips.
  - **Mobile (`< 1020px`)**: Compact header bar with an interactive slide-out navigation drawer.
- **Downloadable Resume**: Dedicated `/resume` page with direct PDF download linking to your CV.
- **Performance**: Zero GraphQL overhead, sub-second Vite production builds, and optimized font loading with Outfit & monospace fallbacks.
