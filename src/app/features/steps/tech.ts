import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChoiceCardComponent } from '../../shared/components/choice-card.component';
import { BriefingService, BriefingData } from '../../core/services/briefing.service';

@Component({
  selector: 'app-step-tech',
  standalone: true,
  imports: [CommonModule, RouterLink, ChoiceCardComponent],
  template: `
    <div class="step-fade-in">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contexto e Objetivos</h1>
        <p class="text-soft-gray text-lg">De onde viemos e para onde vamos?</p>
      </div>

      <div class="space-y-12">
        <section>
          <h2 class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center">
            Origem do Projeto
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <app-choice-card
              title="Projeto Zero"
              description="Uma ideia nova, sem código anterior ou bases de usuários externas."
              [selected]="data.techOrigin === 'zero'"
              (select)="update('techOrigin', 'zero')"
            >
              <span icon>🌱</span>
            </app-choice-card>

            <app-choice-card
              title="Migração/Evolução"
              description="Já uso Hotmart/Kiwify ou outra plataforma e quero migrar para uma estrutura própria/melhor."
              [selected]="data.techOrigin === 'migration'"
              (select)="update('techOrigin', 'migration')"
            >
              <span icon>🚀</span>
            </app-choice-card>
          </div>
        </section>

        <section>
          <h2 class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center">
            Objetivo Principal
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <app-choice-card
              title="Premium Feel"
              description="Elevar a percepção de valor e autoridade visual da marca."
              [selected]="data.mainObjective === 'premium'"
              (select)="update('mainObjective', 'premium')"
            >
              <span icon>💎</span>
            </app-choice-card>

            <app-choice-card
              title="Reduzir Taxas"
              description="Parar de pagar as altas taxas de plataformas padrão."
              [selected]="data.mainObjective === 'fees'"
              (select)="update('mainObjective', 'fees')"
            >
              <span icon>📉</span>
            </app-choice-card>

            <app-choice-card
              title="Foco Mobile"
              description="Facilitar o consumo rápido e intuitivo no celular."
              [selected]="data.mainObjective === 'mobile'"
              (select)="update('mainObjective', 'mobile')"
            >
              <span icon>📱</span>
            </app-choice-card>
          </div>
        </section>
      </div>

      <div class="flex justify-between items-center mt-16">
        <button
          class="text-soft-gray hover:text-white transition-colors font-bold py-3 px-8"
          [routerLink]="['/steps/identity']"
        >
          VOLTAR
        </button>
        <button
          class="bg-white text-black hover:bg-netflix-red hover:text-white transition-all duration-300 font-bold py-3 px-12 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="!isComplete"
          [routerLink]="['/steps/requirements']"
        >
          PRÓXIMO
        </button>
      </div>
    </div>
  `,
})
export class TechComponent {
  private briefingService = inject(BriefingService);
  data = this.briefingService.getData();

  get isComplete() {
    return !!this.data.techOrigin && !!this.data.mainObjective;
  }

  update(key: keyof BriefingData, value: string) {
    this.briefingService.updateData({ [key]: value });
    this.data = this.briefingService.getData();
  }
}
