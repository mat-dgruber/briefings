import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChoiceCardComponent } from '../../shared/components/choice-card.component';
import { BriefingService, BriefingData } from '../../core/services/briefing.service';

@Component({
  selector: 'app-step-metrics',
  standalone: true,
  imports: [CommonModule, RouterLink, ChoiceCardComponent],
  template: `
    <div class="step-fade-in">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Volume e Escala</h1>
        <p class="text-soft-gray text-lg">Qual é a carga esperada para o servidor?</p>
      </div>

      <div class="space-y-12">
        <section>
          <h2 class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center">Quantidade de Alunos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <app-choice-card 
              title="Até 1.000 Alunos" 
              description="Foco em validação de MVP e grupos menores de mentoria."
              [selected]="data.userVolume === 'small'"
              (select)="update('userVolume', 'small')"
            >
              <span icon>👶</span>
            </app-choice-card>

            <app-choice-card 
              title="10.000+ Alunos" 
              description="Lançamentos grandes com base de usuários consolidada."
              [selected]="data.userVolume === 'large'"
              (select)="update('userVolume', 'large')"
            >
              <span icon>🏢</span>
            </app-choice-card>
          </div>
        </section>

        <section>
          <h2 class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center">Acessos Simultâneos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <app-choice-card 
              title="Acesso Distribuído" 
              description="Os alunos entram em horários diferentes ao longo do dia."
              [selected]="data.simultaneousAccess === 'distributed'"
              (select)="update('simultaneousAccess', 'distributed')"
            >
              <span icon>☁️</span>
            </app-choice-card>

            <app-choice-card 
              title="Pico de Acessos" 
              description="Muitos acessos ao mesmo tempo (ex: logo após uma live)."
              [selected]="data.simultaneousAccess === 'peak'"
              (select)="update('simultaneousAccess', 'peak')"
            >
              <span icon>⚡</span>
            </app-choice-card>
          </div>
        </section>
      </div>

      <div class="flex justify-between items-center mt-16">
        <button 
          class="text-soft-gray hover:text-white transition-colors font-bold py-3 px-8"
          [routerLink]="['/steps/requirements']"
        >
          VOLTAR
        </button>
        <button 
          class="bg-white text-black hover:bg-netflix-red hover:text-white transition-all duration-300 font-bold py-3 px-12 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="!isComplete"
          [routerLink]="['/steps/logistics']"
        >
          PRÓXIMO
        </button>
      </div>
    </div>
  `
})
export class MetricsComponent {
  private briefingService = inject(BriefingService);
  data = this.briefingService.getData();

  get isComplete() {
    return !!this.data.userVolume && !!this.data.simultaneousAccess;
  }

  update(key: keyof BriefingData, value: string) {
    this.briefingService.updateData({ [key]: value });
    this.data = this.briefingService.getData();
  }
}
