# PivotPoint AI Website

> **Enterprise-grade AI solutions website for emerging markets in the Caribbean and Africa**

## 🌟 Overview

PivotPoint AI is a Next.js-powered website showcasing AI implementation services for SMEs across emerging markets. The site features enterprise-grade design, mobile-first responsiveness, and strategic conversion optimization.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
website/
├── src/app/                    # Next.js 15 App Router pages
│   ├── page.tsx               # Homepage with enterprise hero section
│   ├── layout.tsx             # Root layout with metadata & favicons
│   ├── globals.css            # Global styles & animations
│   ├── Navbar.tsx             # Responsive navigation component
│   ├── Footer.tsx             # Site footer component
│   ├── about/page.tsx         # About us page
│   ├── services/page.tsx      # Services showcase with roadmap
│   ├── contact/page.tsx       # Contact page with email integration
│   ├── blog/page.tsx          # Blog listing page
│   ├── mentorship/page.tsx    # Mentorship program page
│   ├── plan/page.tsx          # 30-day implementation plan
│   └── get-started/page.tsx   # Lead capture form
├── public/                     # Static assets
│   ├── images/                # Logo, hero images, icons
│   ├── favicon.ico            # Website favicon (Africa logo)
│   ├── favicon-*.png          # Multi-size favicon variants
│   └── apple-touch-icon.png   # iOS home screen icon
├── docs/                       # Project documentation
│   ├── database/              # Database setup & SQL files
│   └── *.md                   # Implementation guides
├── content/                    # Markdown content files
├── legal/                      # Legal documents (privacy, terms)
└── data/                      # Static data files
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#1a237e` (Deep Blue)
- **Secondary**: `#d3e3fd` (Light Blue)
- **Accent**: `#0891b2` (Cyan)
- **Neutral**: `#4e4f4f` (Gray)

### Typography
- **Headings**: Geist Sans (Bold, Black weights)
- **Body**: Geist Sans (Regular, Medium weights)
- **Mobile**: Responsive scaling from 16px base

### Animations
- **Enterprise Gradients**: Flowing background animations
- **Blob Animations**: Organic floating effects
- **Fade-in-up**: Staggered content reveals
- **Mobile Optimized**: Reduced motion support

### Animations
- **Enterprise Gradients**: Flowing background animations
- **Blob Animations**: Organic floating effects
- **Fade-in-up**: Staggered content reveals
- **Mobile Optimized**: Reduced motion support

## 📱 Mobile-First Features

- ✅ **Responsive Design**: 320px - 1920px+ support
- ✅ **Touch Targets**: 44px minimum for mobile
- ✅ **Fast Loading**: Optimized images & animations
- ✅ **Accessible**: WCAG 2.1 compliance
- ✅ **Progressive**: Enhanced user experience

## 🔧 Key Components

### Homepage (`src/app/page.tsx`)
- Hero section with animated gradients
- Three pillars service showcase
- Enterprise-grade visual effects
- Mobile-optimized CTAs

### Services (`src/app/services/page.tsx`)
- AI implementation roadmap
- Market landscape analysis
- Multiple strategic CTAs
- Caribbean/Africa focus

### Navigation (`src/app/Navbar.tsx`)
- Responsive hamburger menu
- Mobile-optimized logo sizing
- Smooth animations

## 🗄️ Database Integration

The site integrates with Supabase for:
- Lead capture forms
- Blog content management
- User submissions
- Analytics tracking

Database setup files located in `docs/database/`

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to production
vercel --prod

# Preview deployment  
vercel
```

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key
```

## 👥 Team Handover Notes

### For Developers
- Built with Next.js 15 App Router
- TypeScript throughout
- Tailwind CSS for styling
- Mobile-first responsive design
- Component-based architecture

### For Designers
- Enterprise color palette defined
- Animation system in `globals.css`
- Image assets in `public/images/`
- Logo variants for different uses

### For Content Team
- Page content in `src/app/*/page.tsx`
- Blog content via Supabase
- Legal documents in `legal/`
- Static content in `content/`

## 📞 Support & Contact

- **Technical Issues**: Check `docs/` folder
- **Content Updates**: Edit respective page files
- **Database Issues**: See `docs/database/`
- **Design Changes**: Review `globals.css` animations

---

**Built with ❤️ for emerging markets across the Caribbean and Africa**
# pivotpointai
