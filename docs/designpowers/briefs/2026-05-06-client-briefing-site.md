# Design Brief: Matheus Dev - Client Briefing Site

## Problem Statement
Matheus Dev (freelancer) needs a structured, professional, and automated way to collect project requirements from potential clients (primarily therapists and healthcare professionals) after an initial sales call. The current manual process via WhatsApp and unstructured meetings leads to imprecise proposals and a less professional image.

## Users
- **Primary:** Therapists, coaches, and psychologists (30–50 years old).
- **Context:** Mobile-first users, often with limited technical familiarity, filling the form under a state of intent to start a project.
- **Inclusive Design:** 
  - **Cognitive:** Clear, multi-step navigation to prevent overwhelm.
  - **Vision:** High contrast (Premium Dark) with large, readable typography.
  - **Motor:** Large touch targets for mobile users.

## Design Direction: Premium Dark
A "SaaS-style" aesthetic inspired by premium platforms like Netflix. 
- **Visuals:** Dark backgrounds (Charcoal/Deep Black), crisp typography, subtle gradients/shadows.
- **Accent Color:** Netflix Red (#E50914) for primary actions and progress highlights.
- **Feel:** Modern, expert, trustworthy, and efficient.
- **UX:** Multi-step form with a progress bar and interactive cards for choice-based questions.

## Constraints
- **Tech Stack:** Angular 21+ (Standalone), Tailwind CSS 3.4.17.
- **Infrastructure:** Firebase Hosting, Formspree (no custom backend).
- **Scope:** Public standalone page, no auth, no database, single vertical (initially).

## Existing Design System
None (starting from scratch).

## Taste Direction (Early Signal)
- **Aesthetic:** Clean, high-contrast, premium dark mode.
- **References:** Netflix (visual style), modern SaaS landing pages.

## Success Criteria
- **Completion Rate:** ≥ 70%.
- **Time to Complete:** ≤ 8 minutes.
- **Technical:** Structured responses delivered via Formspree in <30s.

## Out of Scope
- Internal CRM or project management tools.
- User login/authentication.
- Automated proposal generation.
- Multi-language support.
