# Design Plan: Matheus Dev Briefing Site

> **For agentic workers:** REQUIRED: Use designpowers:designpowers-critique to review completed work against this plan.

**Goal:** Deliver a polished, multi-step briefing form in Angular 21 with a "Premium Dark" aesthetic and content in Brazilian Portuguese.

**Design Direction:** [Premium Dark / Netflix Style](docs/designpowers/briefs/2026-05-06-client-briefing-site.md)

**Personas:** [Therapists/Healthcare Professionals](design-state.md#personas)

---

## Task 1: Project Scaffolding (Angular 21 + Tailwind)
**Files:** `package.json`, `tailwind.config.js`, `src/styles.css`

- [ ] Initialize Angular 21 Standalone project.
- [ ] Install and configure Tailwind CSS 3.4.17.
- [ ] Setup base "Premium Dark" colors (`bg-charcoal`, `text-white`) and Netflix Red (`#E50914`) in Tailwind config.
- [ ] Configure Brazilian Portuguese as the default language (`lang="pt-BR"`).

**Accessibility check:** Base HTML structure includes `<main>` and `<footer>` landmarks.

**Verification:** Run `ng serve` and verify dark background and red primary color.

---

## Task 2: Multi-Step Router & Navigation (Portuguese)
**Files:** `src/app/app.routes.ts`, `src/app/components/progress-bar/`

- [ ] Create 5 distinct routes for the briefing steps.
- [ ] Implement a "Step Container" with a persistent progress bar using the Netflix Red accent.
- [ ] Setup "Voltar" and "Próximo" navigation buttons.

**Accessibility check:** Focus management on route change (move focus to the new section header).

**Verification:** Navigate between steps and see the progress bar update correctly.

---

## Task 3: Choice-Card UI Component
**Files:** `src/app/shared/choice-card/`

- [ ] Build a reusable "Choice Card" component.
- [ ] Implement hover and active states (Netflix Red border/glow).
- [ ] Support icons and descriptive text for each card.

**Accessibility check:** Use `role="radio"` or `role="checkbox"`; ensure keyboard `Space/Enter` selects the card.

**Verification:** Component renders correctly and is toggleable via keyboard.

---

## Task 4: Content Implementation (Brazilian Portuguese)
**Files:** `src/app/features/steps/`

- [ ] **Etapa 1: Identidade Visual** (Logo, paleta de cores, referências visuais).
- [ ] **Etapa 2: Contexto Técnico** (Migração vs. Do zero, objetivos da área de membros).
- [ ] **Etapa 3: Requisitos do Sistema** (Áudio/Vídeo, PDF, rastreamento de progresso).
- [ ] **Etapa 4: Escala e Métricas** (Volume de alunos, acessos simultâneos).
- [ ] **Etapa 5: Logística e Prazo** (Orçamento, data meta, manutenção).

**Accessibility check:** All inputs have `<label>` or `aria-label`.

**Verification:** Review all 15+ Portuguese questions for tone and clarity.

---

## Task 5: Formspree & Success State
**Files:** `src/app/services/form.service.ts`, `src/app/features/success/`

- [ ] Implement Formspree integration.
- [ ] Create a "Sucesso" page with the message: "Briefing enviado com sucesso. Matheus entrará em contato em breve."
- [ ] Add basic client-side validation for required fields.

**Accessibility check:** Validation errors use `aria-describedby`; success page uses `role="status"`.

**Verification:** Submit a test form and confirm email arrival at Formspree.
