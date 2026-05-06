import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChoiceCardComponent } from '../../shared/components/choice-card.component';
import { BriefingService, BriefingData } from '../../core/services/briefing.service';

@Component({
  selector: 'app-step-requirements',
  standalone: true,
  imports: [CommonModule, RouterLink, ChoiceCardComponent],
  template: `
    <div class="step-fade-in">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Funcionalidades</h1>
        <p class="text-soft-gray text-lg">O que o sistema precisa fazer?</p>
      </div>

      <div class="space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2
              class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center"
            >
              Suporte a Mídia
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <app-choice-card
                title="Apenas Áudio"
                description="Foco total em podcasts, meditações e áudios curtos."
                [selected]="data.mediaSupport === 'audio'"
                (select)="update('mediaSupport', 'audio')"
              >
                <span icon>🎙️</span>
              </app-choice-card>

              <app-choice-card
                title="Multimídia (Vídeo/PDF)"
                description="Suporte para vídeos, imagens, audios, materiais de apoio, pdfs e textos."
                [selected]="data.mediaSupport === 'multi'"
                (select)="update('mediaSupport', 'multi')"
              >
                <span icon>🎥</span>
              </app-choice-card>
            </div>
          </section>

          <section>
            <h2
              class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center"
            >
              Rastreamento de Progresso
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <app-choice-card
                title="Progresso Simples"
                description="Marcar módulos ou aulas como 'concluídos'."
                [selected]="data.progressTracking === 'simple'"
                (select)="update('progressTracking', 'simple')"
              >
                <span icon>✅</span>
              </app-choice-card>

              <app-choice-card
                title="Progresso Dinâmico"
                description="Salvar o minuto exato da pausa para continuar depois."
                [selected]="data.progressTracking === 'dynamic'"
                (select)="update('progressTracking', 'dynamic')"
              >
                <span icon>⏳</span>
              </app-choice-card>
            </div>
          </section>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2
              class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center"
            >
              Venda e Checkout
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <app-choice-card
                title="Checkout Externo"
                description="Venda via Hotmart/Kiwify. Nós apenas geramos o acesso."
                [selected]="data.checkoutType === 'external'"
                (select)="update('checkoutType', 'external')"
              >
                <span icon>🔗</span>
              </app-choice-card>

              <app-choice-card
                title="Checkout Próprio"
                description="Integração direta com Stripe ou Mercado Pago."
                [selected]="data.checkoutType === 'internal'"
                (select)="update('checkoutType', 'internal')"
              >
                <span icon>💳</span>
              </app-choice-card>
            </div>
          </section>

          <section>
            <h2
              class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center"
            >
              Gestão de Conteúdo
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <app-choice-card
                title="Gestão Simplificada"
                description="Subida manual de arquivos ou via suporte.<br>(Taxas adicionais ao realizar trocas)."
                [selected]="data.adminPanel === 'simple'"
                (select)="update('adminPanel', 'simple')"
              >
                <span icon>🛠️</span>
              </app-choice-card>

              <app-choice-card
                title="Painel Administrativo"
                description="Área amigável para o terapeuta subir áudios e módulos. (Aumenta o tempo de entrega e complexidade do projeto.)"
                [selected]="data.adminPanel === 'full'"
                (select)="update('adminPanel', 'full')"
              >
                <span icon>⚙️</span>
              </app-choice-card>
            </div>
          </section>
        </div>
      </div>

      <div class="flex justify-between items-center mt-16">
        <button
          class="text-soft-gray hover:text-white transition-colors font-bold py-3 px-8"
          [routerLink]="['/steps/tech']"
        >
          VOLTAR
        </button>
        <button
          class="bg-white text-black hover:bg-netflix-red hover:text-white transition-all duration-300 font-bold py-3 px-12 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="!isComplete"
          [routerLink]="['/steps/metrics']"
        >
          PRÓXIMO
        </button>
      </div>
    </div>
  `,
})
export class RequirementsComponent {
  private briefingService = inject(BriefingService);
  data = this.briefingService.getData();

  get isComplete() {
    return (
      !!this.data.mediaSupport &&
      !!this.data.progressTracking &&
      !!this.data.checkoutType &&
      !!this.data.adminPanel
    );
  }

  update(key: keyof BriefingData, value: string) {
    this.briefingService.updateData({ [key]: value });
    this.data = this.briefingService.getData();
  }
}
