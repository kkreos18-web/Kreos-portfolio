# Kreos Portfolio — Next.js

Premium redesign of the Kreos Roblox VFX portfolio, built with Next.js 15
(App Router), TypeScript, Tailwind CSS, Framer Motion, and Lenis.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> **Note:** This project was written in a sandboxed environment without
> access to the npm registry, so `npm install` has not been run or verified
> here. Please run it locally and let me know if anything comes up — happy
> to fix immediately.

## About the Lenis fix

The previous version loaded Lenis from a CDN `<script>` tag and called it as
a global (`new Lenis(...)`), which is what caused
`Uncaught ReferenceError: Lenis is not defined` — if that script tag hadn't
finished loading (or Next.js re-rendered before it attached to `window`),
the global simply didn't exist yet.

This version fixes it properly:

- `lenis` is a real dependency in `package.json`, installed via npm.
- It's imported as an ES module: `import Lenis from "lenis"` in
  `src/components/SmoothScroll.tsx`.
- It's only ever instantiated inside a `useEffect` inside a `"use client"`
  component — so it never runs during the Next.js build or on the server,
  only in the browser after mount. No `window`/`document` access happens
  outside that effect.
- Other components (the nav bar, scroll progress bar, footer's back-to-top
  button) don't create their own Lenis instances — they either listen for a
  `lenis-scroll` custom event, or call the single shared instance exposed at
  `window.lenis`.

## Project structure

```
src/
  app/
    layout.tsx        Root layout — fonts, metadata, mounts global widgets
    page.tsx           Assembles all sections
    globals.css         Tailwind + base styles
  components/
    SmoothScroll.tsx    Lenis provider (client-only)
    ScrollProgress.tsx  Top progress bar
    CursorGlow.tsx       Cursor-follow glow
    Loader.tsx           Dark premium loading screen
    Nav.tsx              Sticky nav + mobile menu
    MagneticButton.tsx    Reusable magnetic-hover CTA button
    Reveal.tsx            Framer Motion scroll-reveal wrapper
    BeamCanvas.tsx         Hero background particle/beam effect
    Hero.tsx / About.tsx / Process.tsx / Projects.tsx / Links.tsx /
    Contact.tsx / Footer.tsx    Page sections
  lib/
    data.ts              Projects, filters, and social links — a single
                         typed source that the admin CMS (next milestone)
                         can swap for live Supabase queries with no changes
                         to the components that consume it.
```

## What's next

This delivers the front-end from the redesign brief. The admin dashboard
(auth, database, project/pricing/testimonial CRUD, media manager) is a
separate build — see the original project scope for details. Once you're
happy with this front-end, we can wire up Supabase (or Firebase) + Clerk/
Supabase Auth next.
