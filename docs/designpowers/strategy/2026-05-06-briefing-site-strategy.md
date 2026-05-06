# Design Strategy: Matheus Dev - Client Briefing Site

## Design Principles

### 1. Respect the Cognitive Reserve
**The principle:** Never show more than one topic at a time.
**What this means in practice:** We will use a multi-step structure with clear thematic sections (Visuals, Tech, Volume, etc.). Navigation will be progressive.
**What this means we will NOT do:** We will not use massive scrolling pages or dense groups of text inputs.

### 2. Visual Validation
**The principle:** Show, don't just tell.
**What this means in practice:** Use "Choice Cards" with icons/mini-visuals for technical concepts (e.g., "Web App" vs "Mobile Store"). Use the "Netflix Red" as a thread of progress.
**What this means we will NOT do:** We will not use technical jargon without a visual or simple explanation.

### 3. Inclusive Authority
**The principle:** Accessibility is the ultimate mark of professionalism.
**What this means in practice:** High contrast by default (Premium Dark), clear focus states for keyboard/screen readers, and Grade 6-8 reading level for questions.
**What this means we will NOT do:** We will not use low-contrast "ghost" buttons or cryptic icons without labels.

## Competitive Position
We differentiate from generic form builders (Typeform, Google Forms) by providing a **bespoke, high-authority entry point** that feels like a premium SaaS application. This builds "technical trust" before the client even sees a proposal.

## Experience Map

| Stage | Emotional State | Journey Moment | Inclusive Design |
|-------|-----------------|----------------|------------------|
| **Entry** | Curious / Hopeful | Clicks WhatsApp link after meeting. | Fast load times; clear page title. |
| **Impression** | Impressed / Confident | Sees the "Premium Dark" dashboard-style intro. | High contrast; no flickering animations. |
| **Progress** | Focused | Moves through steps (Visuals -> Tech -> Volume). | Simple navigation; large touch targets. |
| **Friction Point** | Unsure | Questions about "simultaneous access" or "budget". | Explanatory tooltips; "Not sure" options. |
| **Exit** | Relieved / Professional | Reaches the Success Screen. Clear "Next Steps". | Clear feedback; aria-live announcement. |

## Success Metrics

| Metric | What It Measures | Target | How to Measure |
|--------|-----------------|--------|---------------|
| **Completion Rate** | Friction & Engagement | ≥ 70% | Formspree Analytics / Manual Log |
| **Time to Complete** | Cognitive Load | ≤ 8 minutes | Self-reporting / Tracking (optional) |
| **WCAG Compliance** | Inclusivity | Level AA | Lighthouse / Accessibility Audit |
| **Conversion (Lead)** | Trust | 100% (of completions) | Proposals sent following submission |

## Constraints and Trade-offs
- **Customization vs. Speed:** We are not building a form builder. We are building *this* specific form. We sacrifice flexibility for a perfectly polished therapist-centric experience.
- **Backend-less:** No database means no "save for later". We must ensure the form is short enough to finish in one sitting.
