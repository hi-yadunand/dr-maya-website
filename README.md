# Dr. Maya Reynolds Website Assignment

This website is my assignment project. I built it by cloning the homepage structure of the reference template, then redesigning it with a new therapist profile, custom copy, and a new visual theme.

## Live Website

- Vercel Link: https://dr-maya-website-rho.vercel.app/

## Template Reference

You will clone the **homepage** of this template:

- https://lilac-template.squarespace.com/
- Password: `lilac`

Assignment reference link used in the brief:

- https://gmt-task-vedrathavi.vercel.app/

---

## Assignment Breakdown

### Part 1: Clone the Homepage (UI Accuracy Test)

**Goal:** Test my frontend and UI replication skills.

I had to:

- Recreate the **layout, spacing, structure, and responsiveness**
- Match section order, grid systems, and hierarchy
- Ensure mobile responsiveness

**Checklist for Completion:**

- [x] My clone matches the original homepage layout and structure.
- [x] It is responsive across desktop, tablet, and mobile views.
- [x] It follows the same font style direction, typography rhythm, and section styling structure from the source.
- [x] I used reusable theme/color variables for maintainability.
- [x] I maintained consistent spacing, padding, and margins.

---

### Part 2: Redesign Using an Imaginary Therapist Profile

After cloning, I redesigned the homepage using Dr. Maya Reynolds' profile as the single source of truth for content.

- Profile Link: https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing

#### Theme and Color Palette

What I changed:

- Replaced the lilac theme with a new calm, cohesive palette
- Chose updated primary, secondary, and accent colors
- Used a new type pairing that fits the brand tone
- Kept readability and visual balance as priority

**Checklist for Theme and Colors:**

- [x] I replaced the existing lilac theme.
- [x] I changed the font direction to better match the new design.
- [x] I selected a new cohesive color palette (primary, secondary, accent).
- [x] I applied the new color system across images, backgrounds, text, buttons, and UI.
- [x] I maintained readability and contrast.
- [x] Theme consistency is applied across:
- [x] Text
- [x] Buttons
- [x] Sections
- [x] UI elements

#### Copywriting

I rewrote the homepage copy based on the profile, including:

- H1 and supporting text
- Services and descriptions
- About section
- FAQs
- CTA sections and button labels

I also optimized copy naturally for local SEO context (Santa Monica, CA) while keeping it human and readable.

**Checklist for Copywriting:**

- [x] All copy is derived from the profile.
- [x] Headings include relevant specialty + location intent.
- [x] Services are profile-aligned and clearly described.
- [x] About/FAQ sections are tailored to profile details.
- [x] Copy uses natural SEO best practices.

#### Images

I replaced the original images with images that match the new therapy brand tone and section message.

**Checklist for Images:**

- [x] All images were replaced with a new visual set.
- [x] Images support section meaning and profile direction.
- [x] Image choices are intentional and consistent.
- [x] Therapist image and profile-based bio were integrated.

---

### Part 3: Add One New Custom Section (Creative Thinking Test)

I added a new custom section that does not exist in the original template: **A Calm Space for Healing** (Our Office concept).

This section includes:

- A custom heading and supportive copy
- Office details and atmosphere messaging
- 2-3 supporting visuals
- Location and in-person/virtual context

**Checklist for New Section:**

- [x] I added a new Our Office-style section.
- [x] The section includes clear heading and copy.
- [x] Relevant office visuals are included.
- [x] Copy and imagery align with Dr. Maya Reynolds profile.
- [x] The section matches site spacing, typography, and design style.

---

### Part 4: Video Walkthrough (Communication Test)

Requirement in brief:

- Record a Loom walkthrough in client-demo style
- Show desktop and mobile versions
- Explain decisions in non-technical language

**Checklist for Video:**

- [ ] Video is 5-10 minutes long.
- [ ] Presented as a client-style walkthrough.
- [ ] Includes desktop and mobile demo.
- [ ] Design and copy decisions explained in plain language.
- [ ] Communication is clear and confident.

---

## Deliverables

1. Live website link: https://dr-maya-website-rho.vercel.app/
2. Public GitHub repository: this repository
3. Video walkthrough link: to be submitted

**Important assignment deadline note (as per brief):**

- Submission should be completed within 7 days from receiving the assignment on Internshala.
- Late submissions may not be considered.

---

## What Was Evaluated

| Area | Weight |
| --- | --- |
| UI cloning accuracy | 25% |
| Theme and design sense | 25% |
| Copywriting and images | 20% |
| New section creativity | 10% |
| Communication (video) | 20% |

---

## How I Built the Website (Technical Summary)

I built this project using:

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4

Key implementation choices:

- Reusable grid container for consistent 4/8/12 responsive layout structure
- Global design tokens via CSS variables for theme consistency
- Smooth scrolling for in-page navigation
- Mobile-specific spacing and overflow fixes section by section
- Next.js `Image` optimization with responsive `sizes`
- AVIF/WebP enabled in `next.config.ts`

---

## Local Setup

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

Build check:

```bash
npm run lint
npm run build
npm run start
```
