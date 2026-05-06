import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChoiceCardComponent } from '../../shared/components/choice-card.component';
import { BriefingService, BriefingData } from '../../core/services/briefing.service';

@Component({
  selector: 'app-step-identity',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ChoiceCardComponent],
  template: `
    <div class="step-fade-in">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Qual é a cara do seu projeto?</h1>
        <p class="text-soft-gray text-lg">Defina a identidade visual básica e referências.</p>
      </div>

      <div class="space-y-12">
        <section>
          <h2 class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center">
            Identidade Visual
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <app-choice-card
              title="Marca Própria"
              description="Já tenho logo, paleta de cores e guia de marca definido."
              [selected]="data.identity === 'existing'"
              (select)="update('identity', 'existing')"
            >
              <span icon>🎨</span>
            </app-choice-card>

            <app-choice-card
              title="Criação do Zero"
              description="Ainda não tenho cores nem logo. Preciso de auxílio visual."
              [selected]="data.identity === 'new'"
              (select)="update('identity', 'new')"
            >
              <span icon>✨</span>
            </app-choice-card>
          </div>
        </section>

        <section>
          <h2 class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center">
            Referência de Estilo
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <app-choice-card
              title="Estilo Netflix"
              description="Dark, premium, focado em capas grandes e navegação horizontal."
              [selected]="data.visualReference === 'netflix'"
              (select)="update('visualReference', 'netflix')"
            >
              <span icon>🍿</span>
            </app-choice-card>

            <app-choice-card
              title="Outras Referências"
              description="Gosto do estilo Netflix, mas tenho outras inspirações em mente."
              [selected]="data.visualReference === 'other'"
              (select)="update('visualReference', 'other')"
            >
              <span icon>📱</span>
            </app-choice-card>
          </div>

          <!-- Conditional Textarea -->
          <div *ngIf="data.visualReference === 'other'" class="mt-8 step-fade-in">
            <label
              for="visualReferenceNotes"
              class="block text-sm font-bold uppercase tracking-widest text-soft-gray mb-3"
            >
              Quais são as suas referências?
            </label>
            <textarea
              id="visualReferenceNotes"
              name="visualReferenceNotes"
              [(ngModel)]="data.visualReferenceNotes"
              (ngModelChange)="updateNotes()"
              rows="4"
              class="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-sm p-4 text-white focus:outline-none focus:border-netflix-red transition-colors placeholder:text-soft-gray"
              placeholder="Ex: Apple, Spotify, ou links de sites que você gosta..."
            ></textarea>
          </div>
        </section>
      </div>

      <div class="flex justify-between items-center mt-16">
        <button
          class="text-soft-gray hover:text-white transition-colors font-bold py-3 px-8"
          [routerLink]="['/']"
        >
          VOLTAR
        </button>
        <button
          class="bg-white text-black hover:bg-netflix-red hover:text-white transition-all duration-300 font-bold py-3 px-12 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="!isComplete"
          [routerLink]="['/steps/tech']"
        >
          PRÓXIMO
        </button>
      </div>
    </div>
  `,
})
export class IdentityComponent {
  private briefingService = inject(BriefingService);
  data = this.briefingService.getData();

  get isComplete() {
    const basicComplete = !!this.data.identity && !!this.data.visualReference;
    if (this.data.visualReference === 'other') {
      return basicComplete && !!this.data.visualReferenceNotes?.trim();
    }
    return basicComplete;
  }

  update(key: keyof BriefingData, value: string) {
    this.briefingService.updateData({ [key]: value });
    this.data = this.briefingService.getData();
  }

  updateNotes() {
    this.briefingService.updateData({ visualReferenceNotes: this.data.visualReferenceNotes });
  }
}
