# Design Brief: Proposal Page (/proposta)

## Problem Statement
After receiving briefing information, Matheus Dev needs a high-conversion, professional page to present the project proposal to the client (therapist). The page must clearly communicate scope, costs, timeline, and deliverables while maintaining the Premium Dark aesthetic to close the sale.

## Users
- **Primary:** Therapists and Healthcare Professionals who have already filled out the briefing.
- **Context:** Deciding whether to commit to the project investment. They need clarity, trust, and a low-friction way to say "yes".

## Design Direction: Project Dashboard (Approach 1)
- **Visuals:** Modular card-based layout (Dashboard style) consistent with the Premium Dark theme.
- **Layout:** 
  - **Header:** Project title and client name.
  - **Scope Block:** Modular list of what's included vs. not included.
  - **Timeline Block:** Visual roadmap/milestones.
  - **Investment Block:** Clear pricing and payment terms.
  - **Call to Action:** High-visibility WhatsApp button ("Aceitar Proposta").
- **Rationale:** Aligns with the visual language of the proposed system, providing a "preview" of the professional experience the client is buying.

## Constraints
- **Tech Stack:** Angular 21, Tailwind CSS.
- **Theme:** Charcoal/Black background, Netflix Red (#E50914) for highlights.
- **Interactivity:** WhatsApp deep link for acceptance.

## Existing Design System
- Inherits from `App` layout and `ChoiceCard` patterns established in the briefing flow.

## Taste Direction (Early Signal)
- **Aesthetic:** Modular, clean, "Pro SaaS" dashboard.
- **Feel:** Organized, transparent, and premium.

## Success Criteria
- **User acceptance:** Client clicks the WhatsApp button to confirm.
- **Clarity:** Zero confusion about what is included in the project.

## Out of Scope
- Dynamic proposal generation (data will be static/mocked for now).
- Online payment integration.
