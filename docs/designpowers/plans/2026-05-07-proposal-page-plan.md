# Design Plan: Proposal Page (/proposta)

**Goal:** Implement a modular "Dashboard" style proposal page that serves as a visual preview of the final system while clearly communicating project details and enabling WhatsApp acceptance.

**Design Direction:** Project Dashboard (Approach 1) - Premium Dark style.

**Personas:** Healthcare Professional (Therapist).

---

## Task 1: Route and Component Scaffolding

**Files:**
- `src/app/app.routes.ts`
- `src/app/features/proposal/proposal.component.ts` (new)

**Steps:**
- [ ] Create `src/app/features/proposal` directory.
- [ ] Create `ProposalComponent` as a standalone component.
- [ ] Add `/proposta` route to `app.routes.ts` using lazy loading.
- [ ] Implement base layout with a centered container and the project title.

**Accessibility check:**
- Ensure the route has a unique and descriptive `<title>`.
- Use a semantic `<h1>` for the project proposal title.

**Verification:**
- Navigate to `/proposta` and see the "Proposta do Projeto" header.

---

## Task 2: Modular Scope Card

**Files:**
- `src/app/features/proposal/proposal.component.ts`

**Steps:**
- [ ] Create a "Escopo do Projeto" card section.
- [ ] List core features: Platform hosting (classes, courses, PDFs/Audio), Authentication, Dashboard, Polls.
- [ ] Separate "Software Development" from "Inclusions/Infrastructure" (Vimeo, Firebase setup).
- [ ] Use a clean grid layout for mobile and desktop.

**Accessibility check:**
- Use bulleted lists (`<ul>`/`<li>`) for items to ensure screen reader compatibility.
- Maintain high contrast ratios for text.

**Verification:**
- Scope is clearly visible and categorized on the page.

---

## Task 3: Visual Timeline and Investment Cards

**Files:**
- `src/app/features/proposal/proposal.component.ts`

**Steps:**
- [ ] Implement a "Cronograma Estimado" card with a simplified vertical or horizontal roadmap (8-12 weeks).
- [ ] Implement an "Investimento" card showing the MVP value and payment terms.
- [ ] Add a section for "Operational Costs" (Infrastructure) as discussed.

**Accessibility check:**
- Ensure any visual roadmap symbols have text equivalents.
- Use currency formatting that is readable by screen readers.

**Verification:**
- Timeline milestones and pricing details are clearly laid out.

---

## Task 4: WhatsApp Call to Action

**Files:**
- `src/app/features/proposal/proposal.component.ts`

**Steps:**
- [ ] Add a prominent fixed or bottom-aligned "Aceitar Proposta" button.
- [ ] Integrate WhatsApp deep link with a pre-filled professional message: "Olá Matheus! Gostaria de aceitar a proposta para o meu sistema de cursos. Podemos seguir?"
- [ ] Add Netflix Red accent and hover states.

**Accessibility check:**
- Ensure the button has sufficient touch target size (min 44x44px).
- Add `aria-label` to the WhatsApp button if using an icon.

**Verification:**
- Clicking the button opens WhatsApp with the correct message.
