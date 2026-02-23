<div align="center">
  <img src="public/images/Dami1.jpg" alt="Dami Olatunji" width="300" style="border-radius: 20px; box-shadow: 0 10px 30px rgba(192, 38, 105, 0.2); margin-bottom: 20px;" />

  # Dami Olatunji - The Voice of Transformation
  
  *A premium, highly-optimized portfolio website built for Dami Olatunji and the impactful Herdentity movement.*
</div>

---

## 🌟 Overview

This is a modern, high-performance portfolio application designed to showcase Dami's speaking engagements, transformational content, and the **Herdentity** community. It serves as a central hub to equip people globally with identity-rooted confidence and leadership skills.

## ✨ Key Features & Enhancements

- **Stunning Split-Hero Video Carousel:** A beautifully engineered 3D vertical video carousel explicitly optimized to serve portrait videos rapidly across both desktop and mobile views.
- **Smart Routing Rules:** Enforces clean `BrowserRouter` (No HashRouter) rules so that URLs look exceptionally professional (e.g., `domain.com/about` rather than `domain.com/#/about`).
- **Global Contact Integration:** One-click integration directly embedded on the contact page and globally inside the footer that seamlessly connects users to `damiolatunji1406@gmail.com`.
- **Intelligent Responsive Design:** Crafted meticulously with raw Tailwind CSS to look pixel-perfect on every possible screen size. Built "mobile-first" but strictly enhanced for ultra-wide desktops.
- **Micro-Animations & Flourishes:** Uses `framer-motion` and custom CSS keyframes to provide soft, elegant fade-ins resulting in a "premium" user feel.

## 🛠️ Technology Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Language:** TypeScript (Strict Mode)
- **Routing:** React Router v7 (`BrowserRouter`)
- **Styling:** Tailwind CSS + Vanilla CSS (`index.css`)
- **Icons:** Custom SVG + Lucide React
- **Animations:** Framer Motion

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Quick Installation

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd dami-olatunji
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the local development server**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173` in your browser.

## 🏗️ Production Build Config

This project is exceptionally optimized to compile into a tiny payload. When pushing to Vercel/Netlify, simply use:
```bash
npm run build
```
It compiles in under ~4 seconds and runs full TypeScript typing and Linting checks automatically.

## 📁 Repository Architecture

```text
dami-olatunji/
├── public/                 
│   ├── images/             # Optimized image assets (e.g., Dami1.jpg)
│   └── videos/             # Source .mp4s for the Hero Carousel
├── src/                    
│   ├── components/         # Reusable globally injected UI elements (Navbar, Footer, VideoCarousel)
│   ├── pages/              # Primary routable views (Home, About, Messages, Contact)
│   ├── App.tsx             # Root Router Configuration
│   ├── index.css           # Core styling layer and Tailwind injection
│   └── main.tsx            # App Entry
├── .cursorrules            # Agentic memory/rules (e.g., Enforcing BrowserRouter)
├── .windsurfrules          # Global routing fallback rules
├── tailwind.config.js      # Custom theme setup (Colors: "Empowered Magenta", "Rose Essence")
└── vite.config.ts          # Core builder settings
```

## 📧 Direct Contact

To reach Dami Olatunji for speaking engagements or mentorship:
- **Email:** [damiolatunji1406@gmail.com](mailto:damiolatunji1406@gmail.com)
- **Instagram:** [@damiolatunji_](https://www.instagram.com/damiolatunji_)
- **YouTube:** [@damiolatunji](https://youtube.com/@damiolatunji)
- **TikTok:** [@damiolatunji_](https://www.tiktok.com/@damiolatunji_)
- **Facebook:** [Damilola Oladele](https://www.facebook.com/damilola.oladele.9026)

---
<div align="center">
  <small>Made with ❤️ by <a href="https://dpeluola.com">David Peluola</a></small>
</div>
