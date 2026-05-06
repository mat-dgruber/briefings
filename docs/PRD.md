# PRD — Site de Briefing para Clientes (Matheus Dev)

## 1. Overview

Site público standalone criado por Matheus (freelancer web) para coletar briefings de potenciais clientes de forma estruturada, profissional e automatizada. O produto principal é um formulário multi-etapas que o cliente (ex: terapeuta) preenche após uma conversa inicial de vendas. Ao finalizar, as respostas chegam automaticamente para Matheus por e-mail, permitindo elaborar uma proposta técnica e comercial precisa sem ligações demoradas ou planilhas manuais.

Sucesso = cliente preenche o formulário completo e Matheus recebe as respostas estruturadas no e-mail em menos de 30 segundos.

---

## 2. Problem Statement

Hoje, quando Matheus fecha uma reunião de prospecção com um cliente local, o processo de levantamento de requisitos é feito por mensagens avulsas de WhatsApp, reuniões longas sem estrutura e anotações esparsas. Isso resulta em:

- Propostas imprecisas por falta de informações técnicas (volume de usuários, tipo de conteúdo, checkout, etc.)
- Tempo perdido em idas e vindas de perguntas
- Aparência menos profissional frente a concorrentes maiores
- Dificuldade de comparar projetos entre si

Sem esse site, Matheus continua dependendo de improviso no levantamento de requisitos, perdendo tempo e transmitindo menos credibilidade.

---

## 3. Target Users

**Quem preenche o formulário:**

- Terapeutas, coaches, psicólogos e profissionais de saúde mental
- Perfil: 30–50 anos, pouca familiaridade técnica, acessa pelo celular
- Contexto: recebeu o link de Matheus via WhatsApp ou e-mail após uma primeira conversa
- Intenção: entender como vai ser o processo e deixar as informações do projeto

**Quem usa as respostas:**

- Matheus — para elaborar PRD, ARCHITECTURE e proposta comercial do projeto do cliente

---

## 4. O que este produto É

- Uma página web pública com formulário multi-etapas de briefing
- Formulário focado em projetos de sites/plataformas para terapeutas e profissionais de saúde
- Coleta: identidade visual, objetivos do projeto, requisitos técnicos, volume, prazo e orçamento
- Envio das respostas para o e-mail de Matheus via Formspree (sem backend)
- Design que transmite profissionalismo e credibilidade
- 100% responsivo, funciona perfeitamente no celular

---

## 5. O que este produto NÃO É

- Não é uma plataforma de gestão de projetos ou CRM
- Não tem área de login ou autenticação
- Não armazena respostas em banco de dados próprio
- Não gera propostas automáticas (Matheus elabora a proposta manualmente após receber o e-mail)
- Não é um site institucional de Matheus (portfólio, sobre, serviços, etc.)
- Não tem versão multi-idioma
- Não é um sistema de agendamento

---

## 6. Core Features (MVP)

| Feature                        | Descrição                                                        | Prioridade |
| ------------------------------ | ---------------------------------------------------------------- | ---------- |
| Formulário multi-etapas        | 5 seções organizadas por tema com navegação Anterior / Próximo   | Alta       |
| Barra de progresso             | Indicador visual de etapa atual (1 de 5, etc.)                   | Alta       |
| Campos de múltipla escolha     | Radio buttons e checkboxes estilizados como cards clicáveis      | Alta       |
| Campos de texto livre          | Inputs e textareas para referências, data, observações           | Alta       |
| Validação básica               | Campos obrigatórios validados antes de avançar/enviar            | Alta       |
| Envio via Formspree            | POST das respostas para e-mail de Matheus sem backend            | Alta       |
| Tela de sucesso                | Feedback visual claro após envio com mensagem de próximos passos | Alta       |
| Design responsivo mobile-first | Layout otimizado para preenchimento no celular                   | Alta       |
| Tipografia e identidade visual | Estética profissional que transmite confiança e modernidade      | Média      |
| Favicon e meta tags            | SEO básico e aparência cuidada no compartilhamento               | Média      |

---

## 7. Success Metrics

- **Primário:** Taxa de conclusão do formulário ≥ 70% dos clientes que abrem o link
- **Secundário:** Tempo médio de preenchimento ≤ 8 minutos
- **Secundário:** E-mail de briefing recebido em ≤ 30 segundos após envio
- **Qualitativo:** Matheus consegue elaborar proposta completa sem precisar pedir mais informações

---

## 8. Constraints & Assumptions

- **Sem backend:** Integração de formulário via Formspree (plano gratuito suporta 50 envios/mês, suficiente para volume de prospecção de freelancer)
- **Deploy estático:** Firebase Hosting (stack padrão de Matheus) — sem servidor, sem banco de dados
- **Stack obrigatória:** Angular 21+ standalone + Tailwind CSS 3.4.17 (padrão Matheus)
- **Sem autenticação:** Link público — qualquer pessoa com o link pode preencher
- **Formulário único:** Versão inicial focada em terapeutas/saúde mental; outras verticais podem ser adicionadas futuramente
- **Matheus é o único desenvolvedor:** Código deve ser simples e fácil de manter
