# Design Strategy: Proposal Page (/proposta)

## Design Principles

### 1. The "Sneak Peek" Principle
**The principle:** The proposal page must feel like a functional module of the final system.
**What this means in practice:** Use the same "Netflix Premium Dark" UI components (cards, progress bars, layout) that will be in the actual product.
**What this means we will NOT do:** Use generic document styles or simple text lists.

### 2. High-Trust Transparency
**The principle:** Costs and scope must be presented with zero ambiguity.
**What this means in practice:** Break down investment into "Software Development" vs "Operational Costs" (Firebase, Vimeo, etc.) and list explicit inclusions/exclusions.
**What this means we will NOT do:** Hide technical details or bundle infrastructure costs into the dev fee.

### 3. Frictionless Commitment
**The principle:** Moving from "Interested" to "Hired" should be a single tap.
**What this means in practice:** The WhatsApp button must pre-fill a professional acceptance message.
**What this means we will NOT do:** Force the client to download a PDF or sign in to accept.

## Experience Map

1. **Entry Point:** Client receives a direct link from Matheus via WhatsApp/Email.
2. **First Impression (0-5s):** "Wow, this looks like the system he's going to build for me." Emotional state: Impressed, Reassured.
3. **Core Journey:** Client scans the modular cards (Scope -> Timeline -> Investment).
4. **Moments of Friction:** Hesitation about costs or technical requirements. *Mitigation: Clear breakdown of operational vs dev costs.*
5. **Exit Point:** Client clicks "Aceitar Proposta" -> WhatsApp opens -> Confirmation sent.

## Success Metrics

| Metric | What It Measures | Target | How to Measure |
|--------|-----------------|--------|---------------|
| Acceptance Rate | Percentage of proposal views that lead to WhatsApp clicks | > 60% | Link tracking / User feedback |
| Clarity Score | Absence of follow-up questions about "what's included" | High | Qualitative (Matheus feedback) |
| Tech Perception | User perception of the "Premium Feel" | High | Client qualitative comments |

## Constraints and Trade-offs
- **Static Data:** For the MVP, data is hardcoded/mocked in the page to speed up delivery.
- **No In-app Signature:** Relying on WhatsApp for legal/verbal acceptance instead of an integrated e-signature tool to keep it simple.
