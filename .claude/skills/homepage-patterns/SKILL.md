---
name: homepage-patterns
description: Landing page and homepage patterns. Contains section templates, layout patterns, and content structure for marketing pages. Activated when building landing pages, homepages, or marketing sections.
allowed-tools: Read, Write, Glob, Grep
---

# Homepage Patterns

Templates and patterns for building landing pages and marketing websites.

**Live Reference:** See `/styleguide` for interactive examples

---

## Page Recipes

### Inner Page (Services, About, etc.)

```
Navigation (dark, sticky)
↓
PageHero (dark background with mesh gradient)
↓
Content sections with rhythm:
  - bg-white (intro)
  - bg-brand-surface (features/details)
  - bg-white (more content)
  - bg-brand-dark (CTA)
↓
Footer
```

### List Page (Blog, Resources)

```
Navigation
↓
PageHero (title + optional filters)
↓
Grid of cards (bg-white or bg-brand-surface)
↓
Pagination
↓
CTA section (bg-brand-dark)
↓
Footer
```

### Detail Page (Blog post, Team member)

```
Navigation
↓
PageHero (title, meta, breadcrumb)
↓
Content area (max-w-3xl prose)
↓
Related items grid
↓
CTA section
↓
Footer
```

### Landing Page (Homepage)

```
Navigation
↓
Hero (full viewport, dark with mesh)
↓
Social proof/Stats (bg-white)
↓
Services grid (bg-brand-surface)
↓
Process/How it works (bg-white)
↓
Testimonials (bg-brand-surface)
↓
Team (bg-white)
↓
CTA (bg-brand-dark with mesh)
↓
Footer
```

---

## Section Rhythm

### Background Alternation Pattern

```
bg-white        → Primary content
bg-brand-surface → Secondary/alternate content
bg-white        → More primary content
bg-brand-dark   → CTA or emphasis (always end with this before footer)
```

### Consistent Section Spacing

```tsx
// Standard section
<section className="py-20 lg:py-28">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>

// Content gap within sections
<div className="mt-12 lg:mt-16">
  {/* subsection */}
</div>
```

### Container Widths

- `max-w-3xl` - Prose content, forms
- `max-w-5xl` - Focused layouts
- `max-w-6xl` - Default sections (recommended)
- `max-w-7xl` - Wide layouts, grids

---

## Standard Homepage Sections (in order)

1. **Navigation** - Sticky header with logo and menu
2. **Hero** - Main value proposition with CTA
3. **Social Proof** - Stats and credibility indicators
4. **Services/Features** - What we offer
5. **Process/How It Works** - Steps or methodology
6. **Testimonials** - Customer quotes
7. **Team** - Key people (optional)
8. **CTA Section** - Final conversion push
9. **Footer** - Links, contact, legal

## Section Templates

### Navigation (Dark)

```tsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3">
        <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-white/70 hover:text-white transition-colors">
          Services
        </a>
        <a
          href="#contact"
          className="bg-brand-accent text-white px-5 py-2 rounded-xl font-semibold hover:bg-fuchsia-600 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</nav>
```

### Hero Section (Dark Background)

```tsx
<section className="relative min-h-screen bg-brand-dark overflow-hidden">
  {/* Mesh gradient background */}
  <div className="absolute inset-0 bg-brand-mesh opacity-40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
    <div className="max-w-4xl">
      {/* Overline */}
      <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
        <span className="text-brand-secondary text-sm font-medium">[Your tagline here]</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
        [Your headline]
        <span className="block bg-brand-gradient bg-clip-text text-transparent">
          [Highlighted text]
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed">
        [Your value proposition]
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="bg-brand-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-fuchsia-600 active:scale-[0.98] transition-all shadow-lg shadow-brand-accent/25 text-center"
        >
          Primary CTA
        </a>
        <a
          href="#services"
          className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 active:scale-[0.98] transition-all text-center"
        >
          Secondary CTA
        </a>
      </div>
    </div>
  </div>
</section>
```

### Stats/Social Proof Section

```tsx
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { number: '1000+', label: 'Customers' },
        { number: '50+', label: 'Projects' },
        { number: '5', label: 'Years Experience' },
        { number: '#1', label: 'In Our Market' },
      ].map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-display font-bold bg-brand-gradient bg-clip-text text-transparent mb-2">
            {stat.number}
          </div>
          <div className="text-slate-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Features Grid Section

```tsx
<section className="py-20 bg-brand-surface">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
        Our Services
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        [Brief description of your services]
      </p>
    </div>

    {/* Features grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-primary/50 hover:shadow-lg transition-all group"
        >
          {/* Icon */}
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
            <span className="text-2xl">{feature.icon}</span>
          </div>

          {/* Content */}
          <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">
            {feature.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### CTA Section (Dark)

```tsx
<section className="py-20 bg-brand-dark relative overflow-hidden">
  <div className="absolute inset-0 bg-brand-mesh opacity-30"></div>

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
      Ready to Get Started?
    </h2>
    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">[Your call to action message]</p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:hello@example.com"
        className="bg-brand-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-fuchsia-600 active:scale-[0.98] transition-all shadow-lg shadow-brand-accent/25"
      >
        Contact Us
      </a>
      <a
        href="tel:+1234567890"
        className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 active:scale-[0.98] transition-all"
      >
        Call Us
      </a>
    </div>
  </div>
</section>
```

### Footer

```tsx
<footer className="bg-brand-dark border-t border-white/10 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8">
      {/* Logo & Description */}
      <div className="md:col-span-2">
        <img src="/logo.svg" alt="Logo" className="h-8 w-auto mb-4" />
        <p className="text-white/60 max-w-md">[Your company description]</p>
      </div>

      {/* Links */}
      <div>
        <h4 className="text-white font-semibold mb-4">Services</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Service 1
            </a>
          </li>
          <li>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Service 2
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-white font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-white/60">
          <li>hello@example.com</li>
          <li>Your City, Country</li>
        </ul>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-white/40 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
          Privacy Policy
        </a>
        <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
          Terms
        </a>
      </div>
    </div>
  </div>
</footer>
```

---

## Responsive Breakpoints

```
sm:  640px  - Mobile landscape
md:  768px  - Tablet
lg:  1024px - Desktop
xl:  1280px - Large desktop
2xl: 1536px - Extra large
```

## Performance Patterns

- Lazy load images below fold
- Use `loading="lazy"` on images
- Preload critical fonts
- Minimize JavaScript for initial load
- Use CSS transitions over JS animations
