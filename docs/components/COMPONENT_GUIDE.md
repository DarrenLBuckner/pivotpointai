# Component Documentation

## Navigation Components

### Navbar.tsx
**Location:** `src/app/Navbar.tsx`
**Purpose:** Main site navigation with responsive mobile menu

#### Key Features:
- Responsive hamburger menu for mobile
- Logo sizing: 80px (mobile) → 110px (desktop)
- AI Toolbox pill highlight
- Backdrop blur effects
- Touch-optimized buttons (44px minimum)

#### Props: None (self-contained)

#### Mobile Breakpoints:
- `md:hidden` - Mobile menu button visible below 768px
- `hidden md:flex` - Desktop menu visible above 768px

---

### Footer.tsx  
**Location:** `src/app/Footer.tsx`
**Purpose:** Site footer with links and branding

---

## Page Components

### Homepage (page.tsx)
**Location:** `src/app/page.tsx`
**Purpose:** Enterprise-grade landing page with hero section

#### Key Sections:
1. **Hero Section**
   - Animated gradient backgrounds
   - Floating badge with pulse animation
   - Responsive typography scaling
   - Staggered content animations

2. **Service Cards**
   - Three-column responsive grid
   - Hover effects with transform/scale
   - Gradient overlays on interaction
   - Mobile-optimized sizing

#### Animation Classes Used:
- `animate-fade-in-up` - Content reveals
- `animation-delay-300` - Staggered timing
- `animate-pulse` - Floating badge
- `hover:scale-105` - Card interactions

---

### Services Page (services/page.tsx)
**Location:** `src/app/services/page.tsx`  
**Purpose:** Service showcase with roadmap and market analysis

#### Strategic Elements:
- Roadmap image positioned at top
- 4 strategically placed CTA buttons
- Market landscape analysis cards
- Mobile-optimized flowchart layout

#### CTA Button Locations:
1. Above roadmap image
2. After flowchart section  
3. After market landscape analysis
4. Final conversion button (premium styled)

---

### Contact Page (contact/page.tsx)
**Location:** `src/app/contact/page.tsx`
**Purpose:** Contact information with email integration

#### Features:
- Markdown content rendering
- Direct email link with pre-filled subject/body
- Mobile-optimized form layout

---

### About Page (about/page.tsx)
**Location:** `src/app/about/page.tsx`
**Purpose:** Company information and team background

#### Content Sections:
- Team photo display
- Company mission and values
- Founder backgrounds
- Regional focus areas

---

## Layout Components

### Root Layout (layout.tsx)
**Location:** `src/app/layout.tsx`
**Purpose:** Site-wide configuration, metadata, and structure

#### Key Configurations:
- Font loading (Geist Sans/Mono)
- SEO metadata and Open Graph
- Favicon configuration (multiple sizes)
- Google verification
- Viewport settings

#### Favicon Setup:
```typescript
icons: {
  icon: [
    { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
}
```

---

## Styling System

### Global Styles (globals.css)
**Location:** `src/app/globals.css`
**Purpose:** Animation definitions and mobile optimizations

#### Animation Keyframes:
- `@keyframes blob` - Organic floating effects (7s infinite)
- `@keyframes float` - Gentle up/down motion (6s infinite)  
- `@keyframes fade-in-up` - Content reveal animation (0.6s)

#### Mobile Optimizations:
- Touch target minimums (44px)
- Text readability improvements
- Reduced motion support
- iOS input field fixes (16px font-size)

#### Animation Classes:
- `.animate-blob` - Apply blob motion
- `.animate-float` - Apply floating motion
- `.animate-fade-in-up` - Apply fade-in-up
- `.animation-delay-300` - 300ms delay
- `.animation-delay-600` - 600ms delay

---

## Component Usage Guidelines

### Adding New Pages:
1. Create in `src/app/[pagename]/page.tsx`
2. Follow mobile-first responsive patterns
3. Include proper TypeScript types
4. Add to navigation if needed

### Styling Conventions:
- Use Tailwind utility classes
- Follow mobile-first approach (sm, md, lg, xl)
- Maintain consistent spacing (4, 6, 8, 12 scale)
- Apply enterprise color palette

### Animation Best Practices:
- Use staggered delays for content reveals
- Implement hover states for interactive elements
- Consider reduced motion preferences
- Test on mobile devices for performance

---

## Common Patterns

### Responsive Typography:
```typescript
className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
```

### Mobile-First Buttons:
```typescript
className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4"
```

### Content Containers:
```typescript
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

### Animated Reveals:
```typescript
className="animate-fade-in-up animation-delay-300"
```
