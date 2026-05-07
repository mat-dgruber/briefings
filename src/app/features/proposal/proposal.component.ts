import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Header Section -->
    <header class="mb-20 px-4 text-center md:text-left">
      <h1 class="text-5xl md:text-7xl font-black mt-10 md:mt-20 mb-8 tracking-tighter text-white">
        Proposta
        <span class="text-netflix-red underline decoration-white/10 underline-offset-8"
          >Premium</span
        >
      </h1>
      <p class="text-soft-gray text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
        Transformando sua autoridade em uma experiência digital cinematográfica. Sua própria
        plataforma de cursos com design de elite.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 px-8">
      <!-- Dashboard Card: Scope -->
      <section
        class="bg-white/[0.03] border border-white/10 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] lg:col-span-8 shadow-2xl backdrop-blur-md"
      >
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
          <span class="w-2 h-8 bg-netflix-red rounded-full"></span>
          Escopo do Projeto
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 class="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] opacity-40">
              Desenvolvimento Core
            </h3>
            <ul class="space-y-5">
              <li *ngFor="let item of scopeItems" class="flex items-start gap-3 group">
                <span class="text-netflix-red text-lg group-hover:scale-125 transition-transform"
                  >✔</span
                >
                <span class="text-soft-gray group-hover:text-white transition-colors">{{
                  item
                }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] opacity-40">
              Infraestrutura
            </h3>
            <ul class="space-y-5">
              <li *ngFor="let item of infraItems" class="flex items-start gap-3 group">
                <span class="text-soft-gray/40 text-lg">⚙</span>
                <span class="text-soft-gray group-hover:text-white transition-colors">{{
                  item
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Dashboard Card: Timeline -->
      <section
        class="bg-white/[0.03] border border-white/10 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] lg:col-span-4 shadow-2xl backdrop-blur-md"
      >
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
          <span class="w-2 h-8 bg-netflix-red rounded-full"></span>
          Cronograma
        </h2>

        <div class="space-y-8 relative">
          <div class="absolute left-3 top-2 bottom-2 w-[1px] bg-white/10"></div>

          <div *ngFor="let step of timeline" class="relative pl-10 group">
            <div
              class="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-netflix-red shadow-[0_0_15px_rgba(229,9,20,0.5)] group-hover:scale-125 transition-transform"
            ></div>
            <h4 class="font-bold text-white text-sm uppercase tracking-wider mb-1">
              {{ step.period }}
            </h4>
            <p class="text-soft-gray text-xs leading-relaxed font-light">{{ step.title }}</p>
          </div>
        </div>
      </section>

      <!-- Dashboard Card: Investment -->
      <section
        class="bg-white/[0.03] border border-white/10 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] lg:col-span-12 shadow-2xl relative overflow-hidden group backdrop-blur-md"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-netflix-red/5 rounded-full blur-[100px] -mr-32 -mt-32"
        ></div>

        <h2 class="text-2xl font-bold mb-10 flex items-center gap-3 text-white relative z-10">
          <span class="w-2 h-8 bg-netflix-red rounded-full"></span>
          Investimento Estrutural
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div class="space-y-2">
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-4 rounded-xl gap-2 md:gap-0"
            >
              <span class="text-soft-gray uppercase text-xs tracking-widest"
                >Desenvolvimento MVP</span
              >
              <span class="text-white font-black text-2xl md:text-3xl tracking-tighter"
                >R$ 12.000,00</span
              >
            </div>
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-white/5 px-4 gap-2 md:gap-0"
            >
              <span class="text-soft-gray uppercase text-xs tracking-widest font-light"
                >Prazo de Entrega</span
              >
              <span class="text-white font-bold text-lg">16 Semanas</span>
            </div>
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center py-6 px-4 gap-2 md:gap-0"
            >
              <span class="text-soft-gray uppercase text-xs tracking-widest font-light"
                >Suporte e Manutenção</span
              >
              <span class="text-white/40 italic text-sm">1 Mês Incluso</span>
            </div>
          </div>

          <div class="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
            <div class="flex items-center gap-3 mb-8">
              <div class="h-px flex-1 bg-netflix-red/30"></div>
              <span class="text-netflix-red font-black text-[10px] uppercase tracking-[0.4em]"
                >Propriedade e Custos</span
              >
              <div class="h-px flex-1 bg-netflix-red/30"></div>
            </div>
            <p class="text-sm text-soft-gray mb-6 leading-relaxed">
              <strong
                class="text-white block mb-3 uppercase text-[10px] tracking-[0.3em] opacity-50"
                >Transparência Total:</strong
              >
              Custos de infraestrutura externa (<span class="text-white"
                >Vimeo, Firebase, Google Cloud Run, Stripe</span
              >) são gerenciados diretamente por você, garantindo total propriedade dos seus dados e
              plataforma.
            </p>
            <button
              (click)="showInfraModal.set(true)"
              class="mb-6 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] uppercase tracking-widest font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Saiba Mais sobre a Infraestrutura</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- Infrastructure Detail Modal -->
    <div
      *ngIf="showInfraModal()"
      class="fixed inset-0 z-[100] flex items-center justify-center px-4 md:p-12"
    >
      <div
        (click)="closeInfraModal()"
        class="absolute inset-0 bg-black/95 backdrop-blur-md"
        [class.animate-fade-in]="!isClosingInfra()"
        [class.animate-fade-out]="isClosingInfra()"
      ></div>

      <div
        class="bg-[#0f0f0f] w-full max-w-4xl h-full max-h-[80vh] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl relative z-10"
        [class.animate-zoom-in]="!isClosingInfra()"
        [class.animate-zoom-out]="isClosingInfra()"
      >
        <div class="p-8 border-b border-white/5 flex items-center justify-between">
          <h2 class="text-2xl font-black text-white uppercase tracking-tighter italic">
            Entendendo sua Infraestrutura
          </h2>
          <button
            (click)="closeInfraModal()"
            class="text-white/40 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-3xl">📺</span>
                <h3 class="text-white font-bold uppercase tracking-widest text-xs">
                  Vimeo Professional
                </h3>
              </div>
              <p class="text-soft-gray text-sm leading-relaxed">
                É onde seus vídeos ficam guardados. Essencial para que as aulas carreguem
                instantaneamente e para evitar custos absurdos de armazenamento de vídeo em
                servidores comuns. Além disso, evita a pirataria e garante uma experiência
                profissional sem anúncios.
              </p>
            </div>

            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-3xl">🔥</span>
                <h3 class="text-white font-bold uppercase tracking-widest text-xs">
                  Firebase & Data
                </h3>
              </div>
              <p class="text-soft-gray text-sm leading-relaxed">
                O "cérebro" e banco de dados do sistema. Além de gerenciar o login seguro, ele
                armazena de forma organizada todos os materiais de download, o progresso dos alunos
                e todas as informações vitais da plataforma em tempo real.
              </p>
            </div>

            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-3xl">🚀</span>
                <h3 class="text-white font-bold uppercase tracking-widest text-xs">
                  Google Cloud Run
                </h3>
              </div>
              <p class="text-soft-gray text-sm leading-relaxed">
                É a "casa" do seu site. Esta tecnologia do Google permite que o sistema aguente
                centenas de alunos acessando ao mesmo tempo sem ficar lento ou cair.
              </p>
            </div>

            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-3xl">💳</span>
                <h3 class="text-white font-bold uppercase tracking-widest text-xs">
                  Stripe Payment
                </h3>
              </div>
              <p class="text-soft-gray text-sm leading-relaxed">
                A plataforma de pagamentos mais segura do mundo. Garante que você receba suas vendas
                com segurança e que os dados de cartão dos seus alunos estejam protegidos por
                criptografia.
              </p>
            </div>
          </div>

          <div class="mt-12">
            <div class="flex items-center gap-3 mb-8">
              <span class="text-2xl">🛡️</span>
              <h4 class="text-white font-black uppercase tracking-[0.2em] text-sm">
                Compromisso com sua Autonomia & Segurança
              </h4>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Propriedade -->
              <div
                class="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/[0.08] transition-colors group"
              >
                <div
                  class="w-10 h-10 bg-netflix-red/10 rounded-lg flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform"
                >
                  💎
                </div>
                <h5 class="text-white font-bold text-xs uppercase tracking-widest mb-3">
                  Propriedade Total
                </h5>
                <p class="text-soft-gray text-xs leading-relaxed font-light">
                  O projeto é <span class="text-white font-medium">100% seu</span>. Todos os dados e
                  estrutura permanecem sob seu controle absoluto, sem qualquer tipo de
                  "aprisionamento" tecnológico.
                </p>
              </div>

              <!-- Custos -->
              <div
                class="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/[0.08] transition-colors group"
              >
                <div
                  class="w-10 h-10 bg-netflix-red/10 rounded-lg flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform"
                >
                  💸
                </div>
                <h5 class="text-white font-bold text-xs uppercase tracking-widest mb-3">
                  Custos Diretos
                </h5>
                <p class="text-soft-gray text-xs leading-relaxed font-light">
                  Pagamento transparente: você paga
                  <span class="text-white font-medium">diretamente aos fornecedores</span> (Google,
                  Stripe, Vimeo) pelo que consumir, sem taxas de intermediação ou custos ocultos.
                </p>
              </div>

              <!-- Segurança -->
              <div
                class="bg-netflix-red/5 border border-netflix-red/30 p-6 rounded-2xl hover:bg-netflix-red/10 transition-colors group relative overflow-hidden"
              >
                <div
                  class="absolute -right-4 -top-4 text-netflix-red/10 text-6xl rotate-12 group-hover:scale-110 transition-transform"
                >
                  🔒
                </div>
                <div
                  class="w-10 h-10 bg-netflix-red/20 rounded-lg flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform relative z-10"
                >
                  🔐
                </div>
                <h5
                  class="text-netflix-red font-bold text-xs uppercase tracking-widest mb-3 relative z-10"
                >
                  Blindagem Jurídica
                </h5>
                <p class="text-soft-gray text-xs leading-relaxed font-light relative z-10">
                  Você detém
                  <span class="text-white font-medium"
                    >100% da propriedade intelectual e contratual</span
                  >. O faturamento direto (Google/Stripe) no seu nome elimina riscos de
                  intermediação e garante conformidade total com as normas de proteção de dados.
                </p>
              </div>
            </div>

            <p class="mt-8 text-[10px] text-soft-gray/60 italic text-center">
              * Eu gerencio toda a complexidade técnica e integração, enquanto você mantém as chaves
              do seu império digital.
            </p>
          </div>
        </div>

        <div class="p-8 border-t border-white/5">
          <button
            (click)="closeInfraModal()"
            class="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-netflix-red hover:text-white transition-all"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>

    <!-- Preview Section -->
    <section class="mt-32 px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div class="max-w-2xl">
          <h2 class="text-4xl font-black mb-4 uppercase tracking-tighter italic text-white">
            SNEAK PEEK: A Experiência do Aluno
          </h2>
          <p class="text-soft-gray text-lg font-light leading-relaxed">
            Clique nos temas abaixo para simular a interface que seus alunos utilizarão para
            consumir seu conteúdo.
          </p>
        </div>
        <div
          class="flex items-center gap-4 bg-netflix-red/10 px-6 py-2 rounded-full border border-netflix-red/20"
        >
          <span class="w-2 h-2 rounded-full bg-netflix-red animate-pulse"></span>
          <span class="text-xs font-bold text-netflix-red uppercase tracking-widest"
            >Protótipo Funcional</span
          >
        </div>
      </div>

      <!-- Theme Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
      >
        <div
          *ngFor="let theme of themes"
          (click)="openTheme(theme)"
          class="bg-white/5 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-netflix-red/50 hover:-translate-y-2 transition-all duration-500 shadow-2xl"
        >
          <div
            class="aspect-video bg-white/10 flex items-center justify-center relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"
            ></div>
            <span
              class="text-netflix-red text-5xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10 drop-shadow-[0_0_20px_rgba(229,9,20,0.8)]"
              >▶</span
            >
            <div
              class="absolute top-4 left-4 z-10 bg-black/40 px-3 py-1 rounded-md border border-white/10"
            >
              <span class="text-[10px] font-bold text-white uppercase tracking-widest">{{
                theme.category
              }}</span>
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity"
            >
              <span class="text-7xl font-black italic">{{ theme.icon }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3
              class="font-bold text-lg mb-2 text-white group-hover:text-netflix-red transition-colors leading-tight"
            >
              {{ theme.title }}
            </h3>
            <div
              class="flex justify-between items-center text-[10px] text-soft-gray uppercase tracking-widest font-medium"
            >
              <span>{{ theme.lessonCount }} Aulas</span>
              <span>{{ theme.duration }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Modal -->
      <div
        *ngIf="selectedTheme()"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
      >
        <div
          (click)="closeTheme()"
          class="absolute inset-0 bg-black/95 backdrop-blur-md"
          [class.animate-fade-in]="!isClosingPreview()"
          [class.animate-fade-out]="isClosingPreview()"
        ></div>

        <div
          class="bg-[#0f0f0f] w-full max-w-7xl h-[90vh] rounded-2xl md:rounded-3xl border border-white/10 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row shadow-2xl relative z-10 custom-scrollbar"
          [class.animate-zoom-in]="!isClosingPreview()"
          [class.animate-zoom-out]="isClosingPreview()"
        >
          <!-- Close Button -->
          <button
            (click)="closeTheme()"
            class="absolute top-6 right-6 z-50 text-white/50 hover:text-white bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Main Content Area -->
          <div
            class="flex-shrink-0 md:flex-[3] flex flex-col md:h-full md:overflow-y-auto custom-scrollbar"
          >
            <!-- Video Player Placeholder -->
            <div
              class="w-full aspect-video flex-shrink-0 bg-black flex items-center justify-center relative group"
            >
              <div
                class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
              ></div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
              ></div>

              <div class="relative z-10 flex flex-col items-center">
                <div
                  class="w-24 h-24 bg-netflix-red rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer"
                >
                  <span class="text-4xl text-white pl-1">▶</span>
                </div>
                <p class="mt-6 text-white font-bold uppercase tracking-[0.4em] text-xs opacity-60">
                  Prévia do Player Profissional
                </p>
              </div>

              <div
                class="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row justify-between items-start md:items-end z-10 gap-4 md:gap-0"
              >
                <div>
                  <span
                    class="text-netflix-red font-black text-[10px] uppercase tracking-widest mb-1 md:mb-2 block"
                    >Assistindo Agora</span
                  >
                  <h3
                    class="text-xl md:text-3xl font-black text-white tracking-tight uppercase italic leading-tight"
                  >
                    {{ selectedTheme()?.title }} - Aula 01
                  </h3>
                </div>
                <div class="flex gap-4">
                  <span
                    class="text-xs text-soft-gray bg-white/5 px-4 py-2 rounded-lg border border-white/10"
                    >1080p HD</span
                  >
                </div>
              </div>
            </div>

            <!-- Lesson Info -->
            <div class="p-6 md:p-10">
              <div class="flex flex-wrap items-center gap-4 mb-6 md:mb-8">
                <span
                  class="bg-netflix-red text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest"
                  >Nível Avançado</span
                >
                <span class="text-soft-gray text-sm"
                  >{{ selectedTheme()?.lessonCount }} Módulos Completos</span
                >
              </div>

              <h2
                class="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6 tracking-tighter uppercase italic"
              >
                Descrição do Módulo
              </h2>
              <p
                class="text-soft-gray text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-12 max-w-4xl"
              >
                {{ selectedTheme()?.description }}
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  *ngFor="let material of selectedTheme()?.materials"
                  class="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all hover:border-netflix-red/30"
                >
                  <div class="flex items-center gap-5">
                    <div
                      class="w-12 h-12 bg-netflix-red/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                    >
                      {{ material.includes('.pdf') ? '📄' : '🎧' }}
                    </div>
                    <div>
                      <span
                        class="block text-[10px] text-soft-gray font-bold uppercase tracking-widest mb-1"
                        >Download Disponível</span
                      >
                      <span
                        class="text-white font-bold group-hover:text-netflix-red transition-colors"
                        >{{ material }}</span
                      >
                    </div>
                  </div>
                  <span class="text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    >⬇️</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Lesson Sidebar -->
          <aside
            class="flex-shrink-0 md:flex-[2] md:w-[400px] bg-black/40 border-t md:border-t-0 md:border-l border-white/5 flex flex-col md:overflow-y-auto"
          >
            <div class="p-10 border-b border-white/5 bg-white/[0.01]">
              <h3 class="text-xl font-black text-white uppercase tracking-tighter italic mb-2">
                Grade de Aulas
              </h3>
              <p class="text-sm text-soft-gray font-light">Módulos liberados imediatamente</p>
            </div>

            <div class="md:flex-1 md:overflow-y-auto p-6 space-y-4 custom-scrollbar">
              <div
                *ngFor="let lesson of [1, 2, 3, 4, 5, 6, 7, 8]; trackBy: lessonTrackBy"
                [class]="
                  'flex items-center gap-5 p-5 rounded-2xl transition-all cursor-pointer group border ' +
                  (lesson === 1
                    ? 'bg-netflix-red/10 border-netflix-red/30'
                    : 'hover:bg-white/5 border-transparent')
                "
              >
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black"
                  [class]="
                    lesson === 1
                      ? 'bg-netflix-red text-white shadow-lg'
                      : 'bg-white/5 text-soft-gray'
                  "
                >
                  {{ lesson < 10 ? '0' + lesson : lesson }}
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-bold uppercase tracking-tight truncate"
                    [class]="lesson === 1 ? 'text-white' : 'text-soft-gray group-hover:text-white'"
                  >
                    Conteúdo Prático #{{ lesson }}
                  </p>
                  <div class="flex items-center gap-3 mt-1">
                    <span class="text-[10px] uppercase tracking-widest opacity-40">15:30 min</span>
                    <span
                      *ngIf="lesson === 1"
                      class="text-[10px] font-black text-netflix-red uppercase tracking-widest animate-pulse"
                      >Assistindo</span
                    >
                  </div>
                </div>
                <span *ngIf="lesson === 1" class="text-netflix-red">●</span>
                <span
                  *ngIf="lesson !== 1"
                  class="opacity-0 group-hover:opacity-100 transition-opacity"
                  >🔒</span
                >
              </div>
            </div>

            <div class="p-8 bg-white/[0.01] border-t border-white/5">
              <button
                class="w-full bg-netflix-red hover:bg-red-700 text-white font-black py-5 rounded-2xl transition-all shadow-[0_10px_30px_rgba(229,9,20,0.3)] uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95"
              >
                Assinar Acesso Vitalício
              </button>
            </div>
          </aside>
        </div>
      </div>

      <!-- Poll Section -->
      <div
        class="bg-white/5 border border-white/10 rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl relative overflow-hidden mt-32"
      >
        <div
          class="absolute -top-20 -right-20 w-64 h-64 bg-netflix-red/5 rounded-full blur-[100px]"
        ></div>

        <div class="relative z-10 text-center mb-12">
          <h3 class="text-3xl font-black mb-4 uppercase tracking-tighter italic text-white">
            Engajamento & Feedback
          </h3>
          <p class="text-soft-gray font-light">
            Módulo de enquetes reais para que seus alunos ajudem a construir o próximo conteúdo.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8">
          <div *ngFor="let option of pollOptions" class="group cursor-pointer">
            <div class="flex justify-between items-end mb-3 px-2">
              <span
                class="text-white font-bold uppercase tracking-tight group-hover:text-netflix-red transition-colors text-sm"
                >{{ option.label }}</span
              >
              <span class="text-netflix-red font-black text-lg italic tracking-tighter"
                >{{ option.votes }}%</span
              >
            </div>
            <div class="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div
                class="h-full bg-netflix-red transition-all duration-1000 origin-left"
                [style.width.%]="option.votes"
              ></div>
            </div>
          </div>
        </div>

        <div
          class="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div class="flex items-center gap-3">
            <div class="flex -space-x-3">
              <div
                *ngFor="let i of [1, 2, 3, 4]"
                class="w-8 h-8 rounded-full border-2 border-charcoal bg-white/10"
              ></div>
            </div>
            <span class="text-xs text-soft-gray font-light">+1.240 alunos já votaram</span>
          </div>
          <button
            class="bg-white text-black font-black text-xs px-8 py-3 rounded-full uppercase tracking-widest hover:bg-netflix-red hover:text-white transition-all"
          >
            Participar da Enquete
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Footer -->
    <footer class="mt-20 text-center pb-10">
      <div class="inline-block relative group">
        <div
          class="absolute -inset-1 bg-netflix-red rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"
        ></div>
        <a
          href="https://wa.me/5515981081030?text=Ol%C3%A1%20Matheus!%20Gostaria%20de%20aceitar%20a%20proposta%20para%20o%20meu%20sistema%20de%20cursos.%20Podemos%20seguir?"
          target="_blank"
          class="relative inline-block bg-netflix-red text-white px-20 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl uppercase tracking-tighter italic"
        >
          Aceitar Proposta
        </a>
      </div>
      <p class="mt-8 text-soft-gray text-sm font-light uppercase tracking-[0.3em] opacity-40">
        Disponibilidade Imediata para Início
      </p>
    </footer>
  `,
  styles: [
    `
      .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.02);
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(229, 9, 20, 0.3);
      }
      :host {
        background: radial-gradient(circle at top center, #111 0%, #080808 100%);
        display: block;
        min-height: 100vh;
        width: 100%;
        font-family: 'Inter', sans-serif;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      @keyframes zoomIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @keyframes zoomOut {
        from {
          opacity: 1;
          transform: scale(1);
        }
        to {
          opacity: 0;
          transform: scale(0.95);
        }
      }
      .animate-fade-in {
        animation: fadeIn 0.3s ease-out forwards;
      }
      .animate-fade-out {
        animation: fadeOut 0.2s ease-in forwards;
      }
      .animate-zoom-in {
        animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      .animate-zoom-out {
        animation: zoomOut 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
    `,
  ],
})
export class ProposalComponent {
  selectedTheme = signal<any>(null);
  showInfraModal = signal<boolean>(false);
  isClosingInfra = signal<boolean>(false);
  isClosingPreview = signal<boolean>(false);

  lessonTrackBy(index: number, lesson: number) {
    return lesson;
  }

  closeInfraModal() {
    this.isClosingInfra.set(true);
    setTimeout(() => {
      this.showInfraModal.set(false);
      this.isClosingInfra.set(false);
    }, 200);
  }

  closeTheme() {
    this.isClosingPreview.set(true);
    setTimeout(() => {
      this.selectedTheme.set(null);
      this.isClosingPreview.set(false);
      document.body.style.overflow = 'auto';
    }, 200);
  }

  scopeItems = [
    'Plataforma EAD Estilo Netflix',
    'Módulo de Cursos (Vídeo, PDF, Áudio)',
    'Sistema de Autenticação Segura',
    'Dashboard Interativo de Aluno',
    'Integração Checkout Stripe/MP',
    'Enquetes e Feedback em Tempo Real',
  ];

  infraItems = [
    'Cloud Firebase & Google Cloud',
    'Streaming Vimeo/Cloudflare',
    'Webhooks de Pagamento (Stripe)',
    'Otimização Mobile First',
    'Backup Automático de Dados',
  ];

  timeline = [
    { period: 'Semanas 1-3', title: 'Branding, UI/UX e Prototipação' },
    { period: 'Semanas 4-8', title: 'Modelagem de Dados e Core Backend' },
    { period: 'Semanas 9-12', title: 'Dashboard, Players e Mídia' },
    { period: 'Semanas 13-15', title: 'Checkout, ERP e Integrações' },
    { period: 'Semana 16', title: 'Testes Finais e Lançamento Oficial' },
  ];

  themes = [
    {
      id: 1,
      title: 'Psicanálise Clínica',
      category: 'Teoria Base',
      icon: '🧠',
      lessonCount: 12,
      duration: '4h 30min',
      description:
        'Módulo aprofundado sobre os fundamentos da psicanálise clínica, focado na aplicação prática e interpretação de conceitos chave no ambiente de consultório moderno. Explore transferência, inconsciente e mecanismos de defesa.',
      materials: ['Apostila_Psicanalise.pdf', 'Audio_Resumo_Modulo.mp3'],
    },
    {
      id: 2,
      title: 'Terapia Cognitiva',
      category: 'Metodologia',
      icon: '🔬',
      lessonCount: 8,
      duration: '2h 15min',
      description:
        'Exploração das principais técnicas da TCC para controle de ansiedade e reestruturação cognitiva. Inclui ferramentas de monitoramento de progresso e protocolos de atendimento.',
      materials: ['Guia_TCC_Pratico.pdf', 'Checklist_Ansiedade.pdf'],
    },
    {
      id: 3,
      title: 'Ética Profissional',
      category: 'Carreira',
      icon: '⚖',
      lessonCount: 5,
      duration: '1h 50min',
      description:
        'Diretrizes essenciais para o exercício ético da profissão no ambiente digital e presencial, abordando sigilo, responsabilidade técnica e posicionamento digital ético.',
      materials: ['Codigo_Etica_Digital.pdf'],
    },
    {
      id: 4,
      title: 'Gestão de Consultório',
      category: 'Business',
      icon: '💼',
      lessonCount: 10,
      duration: '3h 10min',
      description:
        'Como organizar sua agenda, finanças e marketing pessoal sem perder o foco na qualidade do atendimento clínico. Estratégias de fidelização e captação ética.',
      materials: ['Planilha_Financeira.xlsx', 'Script_Atendimento.pdf'],
    },
  ];

  pollOptions = [
    { label: 'Psicanálise Clínica Avançada', votes: 42 },
    { label: 'Neurociência Aplicada', votes: 28 },
    { label: 'Escrita Terapêutica', votes: 18 },
    { label: 'Terapia em Grupo', votes: 12 },
  ];

  openTheme(theme: any) {
    this.selectedTheme.set(theme);
    document.body.style.overflow = 'hidden';
  }
}
