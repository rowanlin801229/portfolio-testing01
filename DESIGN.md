---
name: Rowan Lin Portfolio
description: Cross-platform portfolio system showcasing research-led design and multi-screen expertise
colors:
  accent-dusty-rose: "#B84545"
  canvas-white: "#ffffff"
  text-charcoal: "#4a4a48"
  text-muted: "rgba(74, 74, 72, 0.78)"
  text-faint: "rgba(74, 74, 72, 0.06)"
  border-light: "rgba(74, 74, 72, 0.14)"
  hero-dark: "#111110"
  hero-text: "rgba(112, 108, 102, 0.92)"
  hero-text-soft: "rgba(112, 108, 102, 0.45)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(4rem, 10vw, 9.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.35rem, 10.5vw, 4.2rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.55rem, 8.2vw, 2.35rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.05em"
    textTransform: "none"
spacing:
  xs: "0.2rem"
  sm: "0.4rem"
  md: "0.8rem"
  lg: "1.6rem"
  xl: "2.4rem"
rounded:
  sm: "3px"
  md: "8px"
  full: "999px"
components:
  nav-link:
    textColor: "{colors.text-charcoal}"
    typography: "{typography.body}"
    padding: "0.4rem 0.8rem"
  project-preview:
    backgroundColor: "{colors.canvas-white}"
    rounded: "{rounded.sm}"
    padding: "0.8rem"
  heading-primary:
    textColor: "{colors.text-charcoal}"
    typography: "{typography.display}"
---

# Design System: Rowan Lin Portfolio

## 1. Overview

**Creative North Star: "The Cross-Platform Architect"**

This portfolio system embodies the designer at its center: someone who has done the research, thinks in systems, and proves it through craft. The design reflects a curator's mindset—every element serves a purpose, nothing decorates. Typography scales fluidly across phone, tablet, and desktop, proving the stated expertise in cross-screen thinking before any project screenshot lands. The palette is restrained (white canvas, soft charcoal text, a single dusty-rose accent), prioritizing content over chrome. Motion is minimal and intentional; interactions respond without showing off. The portfolio reads as a conversation between recruiter and designer, not a performance.

What this system explicitly rejects (per PRODUCT.md's anti-references):
- Generic Webflow templates and identical card grids
- Corporate stiffness and formal lifelessness
- Loud, attention-seeking motion that prioritizes craft over communication

**Key Characteristics:**
- Fluid typography using `clamp()` for true responsiveness
- Semantic HTML with accessibility-first markup
- Restrained color (≤10% accent usage, as per brand principle)
- Process-forward: research and iteration surface early
- Multi-viewport integrity: the portfolio itself proves cross-screen mastery

## 2. Colors

The palette establishes quiet confidence: a clean white canvas, soft neutral text that reads at AA contrast, and a single dusty-rose accent reserved for moments that demand attention.

### Primary
- **Dusty Rose Authority** (#B84545): The one voice in the system. Used on focus states, primary CTAs, and strategic highlights (≤10% of any screen). Its rarity signals intentionality, not decoration. Warm, settled, earned.

### Neutral
- **Canvas White** (#ffffff): Page background. Clean, breathing space for content.
- **Text Charcoal** (#4a4a48): Primary body text, headings. Soft charcoal (not pure black) reduces eye strain; tinted slightly toward brown.
- **Text Muted** (rgba 74, 74, 72, 0.78): Secondary text, supporting labels. 4.8:1 contrast ratio against white (WCAG AA). Updated from 0.58 opacity for accessibility.
- **Text Faint** (rgba 74, 74, 72, 0.06): Subtle dividers, placeholder text, background tints.
- **Border Light** (rgba 74, 74, 72, 0.14): Structural dividers between sections.

### Named Rules

**The One Voice Rule.** The dusty-rose accent carries ≤10% of any screen's visual weight. It appears on focus indicators (keyboard navigation), primary actions, and select project highlights. This constraint forces intentionality: every use of the accent must earn its place. Rarity = impact.

**The Tinted Neutral Rule.** All grays in the system are tinted slightly toward the hue family (brown/warm undertone), never pure gray. This gives the system warmth without being saturated.

## 3. Typography

**Display Font:** Cormorant Garamond (Georgia, serif fallback)  
**Body Font:** system-ui, -apple-system (native sans-serif stack, no Google Fonts)  
**Label Font:** Same system-ui stack at small scale with letter-spacing

**Character:** Serif display pairs with native system sans-serif for body, creating a pairing that feels editorial and contemporary. Serif (Cormorant) signals curated taste; system fonts signal pragmatism and respect for user choice. Together, they say: "This designer knows what she's doing and doesn't overreach."

### Hierarchy

- **Display** (Light, `clamp(4rem, 10vw, 9.5rem)`, line-height 1): Hero headlines. Scales aggressively across viewports to own the space. Used sparingly (once per major section).
- **Headline** (Regular, `clamp(2.35rem, 10.5vw, 4.2rem)`, line-height 1.1): Section headers (Projects, About, Work Experience). Fluid scaling maintains hierarchy across all screens.
- **Title** (Medium, `clamp(1.55rem, 8.2vw, 2.35rem)`, line-height 1.2): Project names, feature callouts. Bridges the gap between headline and body.
- **Body** (Light, 1rem, line-height 1.6, max 65–75ch): Running text, descriptions. 1rem baseline; light weight keeps density low while maintaining readability.
- **Label** (Medium, 0.7rem, line-height 1, letter-spacing 0.05em): Tags, metadata, captions. No forced uppercase; respectful of content.

### Named Rules

**The Clamp Rule.** All fluid typography uses CSS `clamp()` to scale smoothly between mobile min and desktop max, with a responsive midpoint (usually a viewport percentage). This eliminates breakpoints for typography, proving continuous responsiveness.

**The Breathing Space Rule.** Body text line length is capped at 65–75 characters. Longer lines tire the eye. Margins and padding around text increase proportionally to font size, creating consistent optical breathing room.

## 4. Elevation

This system is flat by design. Depth comes from layering (foreground / background sections with color tint shifts, opacity changes) rather than shadows. The single exception: `:focus-visible` outlines (2px dusty-rose, 2px offset) which appear only when a user navigates via keyboard. This is functional depth, not decoration.

**Why flat?** The portfolio must feel modern, focused, and intentional. Shadows feel dated; tonal layering feels editorial. The portfolio itself is a clean stage for the designer's work; it should not distract with 3D illusions.

## 5. Components

### Navigation
- **Feel:** Refined and tactile. Navigation signals presence without flourish.
- **Link style:** Inherits body font, light weight. On `:focus-visible`, outline appears (2px dusty-rose, 2px offset).
- **Hover state:** Subtle color shift (text becomes slightly less muted). No scale, no shadow—just a signal that the link is interactive.

### Project Cards
- **Shape:** Minimal. Project previews are images with text overlay, not enclosed cards.
- **Interaction:** On hover, image scale subtly (transform: scale(1.02)) and text contrast increases. Fast, restrained (250–300ms easing).
- **Focus:** Keyboard-navigable projects inherit the focus outline (dusty-rose).

### Headings
- **Semantic:** `<h1>` for page title, `<h2>` for section heads, `<h3>` for subsections. Never skip levels.
- **Styling:** Font-family switching (serif for `<h1>` in hero, sans for body headings). Weight and scale carry hierarchy, not color.
- **Line length:** Headings break naturally; no forced single-line constraints unless it's a display hero.

### Interactive Elements (Links, Buttons)
- **Focus state:** `:focus-visible` outline (2px dusty-rose, 2px outset). Visible to keyboard users only; mouse users see no visible ring until they tab to the element.
- **Hover state:** Subtle text-color shift (muted becomes text-charcoal) or background tint (very light dusty-rose, <5% opacity).
- **Touch targets:** All interactive areas ≥44×44px on mobile (verified via padding + text size).

### Images
- **Loading:** Below-fold images use `loading="lazy"` to defer network requests.
- **Alt text:** All images have descriptive alt text (e.g., "Portrait of Rowan Lin", "TFL redesign mockup"). Meaningful, never empty.
- **Aspect ratio:** Images are served at correct aspect ratio to prevent cumulative layout shift (CLS).

## 6. Do's and Don'ts

### Do's
✅ **Use dusty-rose accent sparingly.** It's the voice; don't dilute it.  
✅ **Trust white space.** Empty space is a design choice, not a failure. Let the portfolio breathe.  
✅ **Scale typography fluidly.** Use `clamp()` for responsive hierarchy, not breakpoints.  
✅ **Respect user choice.** System fonts mean the user's OS preferences are honored (font weight, rendering, accessibility overrides).  
✅ **Semantic HTML first.** `<main>`, `<nav>`, proper heading hierarchy. Accessibility is not a feature; it's the foundation.  
✅ **Lazy-load below-fold images.** Respect users' bandwidth.  
✅ **Test keyboard navigation.** Every interactive element must work via Tab and Enter.  

### Don'ts
❌ **Don't use gradients, shadows, or glassmorphism.** They feel dated and distract from content.  
❌ **Don't add motion for its own sake.** Motion must serve a purpose (state feedback, guidance, delight—not showing off).  
❌ **Don't hard-code colors.** Use CSS variables (--accent, --text-charcoal, etc.) so the design is maintainable.  
❌ **Don't skip alt text or ARIA labels.** Accessibility is non-negotiable in a designer's portfolio.  
❌ **Don't break the accent ≤10% rule.** If dusty-rose covers more than 10% of a screen, you've lost restraint.  
❌ **Don't animate layout properties.** Use `transform` and `opacity` only; avoid `width`, `height`, `left`, `top`.  
❌ **Don't use multiple accent colors.** One voice per system. If you need a secondary color, that signals the primary isn't working hard enough.  

---

**Last updated:** June 2026  
**Maintained by:** Rowan Lin  
**Next review:** After next major feature or redesign iteration
