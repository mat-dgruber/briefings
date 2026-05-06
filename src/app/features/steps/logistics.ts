import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ChoiceCardComponent } from '../../shared/components/choice-card.component';
import { BriefingService, BriefingData } from '../../core/services/briefing.service';

@Component({
  selector: 'app-step-logistics',
  standalone: true,
  imports: [CommonModule, RouterLink, ChoiceCardComponent],
  template: `
    <div class="step-fade-in">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Logística e Fechamento</h1>
        <p class="text-soft-gray text-lg">Expectativas de prazo, investimento e manutenção.</p>
      </div>

      <div class="space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2
              class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center"
            >
              Tipo de Entrega
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <app-choice-card
                title="Site/Web App"
                description="Rápido, acessível via navegador e pode ser salvo no celular."
                [selected]="data.platformType === 'web'"
                (select)="update('platformType', 'web')"
              >
                <span icon>🌐</span>
              </app-choice-card>

              <app-choice-card
                title="App Nativo (Lojas)"
                description="Publicado na App Store / Play Store. Maior prazo e orçamento."
                [selected]="data.platformType === 'native'"
                (select)="update('platformType', 'native')"
              >
                <span icon>🍎</span>
              </app-choice-card>
            </div>
          </section>

          <section>
            <h2
              class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center"
            >
              Prazo e Meta
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <app-choice-card
                title="Urgente / Campanha"
                description="Lançamento com data fixa ou campanha já rodando."
                [selected]="data.launchDeadline === 'urgent'"
                (select)="update('launchDeadline', 'urgent')"
              >
                <span icon>⚡</span>
              </app-choice-card>

              <app-choice-card
                title="Qualidade / Flexível"
                description="Foco em robustez. Cronograma de desenvolvimento otimizado."
                [selected]="data.launchDeadline === 'flexible'"
                (select)="update('launchDeadline', 'flexible')"
              >
                <span icon>📅</span>
              </app-choice-card>
            </div>
          </section>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2
              class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center"
            >
              Teto de Investimento
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <app-choice-card
                title="Investimento MVP"
                description="Foco no essencial para colocar a plataforma no ar."
                [selected]="data.budgetCeiling === 'mvp'"
                (select)="update('budgetCeiling', 'mvp')"
              >
                <span icon>💰</span>
              </app-choice-card>

              <app-choice-card
                title="Escala Premium"
                description="Orçamento reservado para uma experiência completa e robusta."
                [selected]="data.budgetCeiling === 'premium'"
                (select)="update('budgetCeiling', 'premium')"
              >
                <span icon>🏢</span>
              </app-choice-card>
            </div>
          </section>

          <section>
            <h2
              class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-6 text-center"
            >
              Suporte Mensal
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <app-choice-card
                title="Tenho Interesse"
                description="Contrato de manutenção para backups e melhorias contínuas."
                [selected]="data.maintenanceInterest === 'yes'"
                (select)="update('maintenanceInterest', 'yes')"
              >
                <span icon>🛠️</span>
              </app-choice-card>

              <app-choice-card
                title="Apenas Entrega"
                description="Suporte pontual ou gestão interna após o período de garantia."
                [selected]="data.maintenanceInterest === 'no'"
                (select)="update('maintenanceInterest', 'no')"
              >
                <span icon>📦</span>
              </app-choice-card>
            </div>
          </section>
        </div>

        <section class="max-w-2xl mx-auto pt-8 border-t border-white border-opacity-10">
          <h2 class="text-sm font-bold uppercase tracking-widest text-netflix-red mb-8 text-center">
            Informações de Contato
          </h2>
          <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase text-soft-gray ml-1">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Como gostaria de ser chamado?"
                  class="w-full bg-white bg-opacity-5 border-2 border-transparent focus:border-netflix-red focus:outline-none py-3 px-4 rounded-sm transition-all duration-300 text-white placeholder:text-gray-600"
                  [value]="data.contactName || ''"
                  (input)="onInputChange($event, 'contactName')"
                />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase text-soft-gray ml-1">E-mail</label>
                <input
                  type="email"
                  placeholder="exemplo@email.com"
                  class="w-full bg-white bg-opacity-5 border-2 focus:outline-none py-3 px-4 rounded-sm transition-all duration-300 text-white placeholder:text-gray-600"
                  [class.border-transparent]="isEmailValid || !data.contactEmail"
                  [class.border-netflix-red]="!isEmailValid && data.contactEmail"
                  [class.focus:border-netflix-red]="isEmailValid || !data.contactEmail"
                  [value]="data.contactEmail || ''"
                  (input)="onInputChange($event, 'contactEmail')"
                />
                <p
                  *ngIf="!isEmailValid && data.contactEmail"
                  class="text-[10px] text-netflix-red font-bold uppercase ml-1"
                >
                  E-mail inválido
                </p>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase text-soft-gray ml-1"
                >WhatsApp / Telefone</label
              >
              <input
                type="text"
                placeholder="(00) 00000-0000"
                class="w-full bg-white bg-opacity-5 border-2 focus:outline-none py-3 px-4 rounded-sm transition-all duration-300 text-white placeholder:text-gray-600"
                [class.border-transparent]="isPhoneValid || !data.contactPhone"
                [class.border-netflix-red]="!isPhoneValid && data.contactPhone"
                [class.focus:border-netflix-red]="isPhoneValid || !data.contactPhone"
                [value]="data.contactPhone || ''"
                (input)="onInputChange($event, 'contactPhone')"
              />
              <p
                *ngIf="!isPhoneValid && data.contactPhone"
                class="text-[10px] text-netflix-red font-bold uppercase ml-1"
              >
                Telefone incompleto
              </p>
            </div>
          </div>
        </section>
      </div>

      <div class="flex justify-between items-center mt-16">
        <button
          class="text-soft-gray hover:text-white transition-colors font-bold py-3 px-8"
          [routerLink]="['/steps/metrics']"
        >
          VOLTAR
        </button>
        <button
          class="bg-netflix-red text-white hover:bg-white hover:text-black transition-all duration-300 font-bold py-3 px-12 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          [disabled]="!isComplete || isSubmitting"
          (click)="submit()"
        >
          <span
            *ngIf="isSubmitting"
            class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
          ></span>
          {{ isSubmitting ? 'ENVIANDO...' : 'FINALIZAR' }}
        </button>
      </div>
    </div>
  `,
})
export class LogisticsComponent {
  private briefingService = inject(BriefingService);
  private router = inject(Router);

  data = this.briefingService.getData();
  isSubmitting = false;

  get isEmailValid() {
    if (!this.data.contactEmail) return true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(this.data.contactEmail);
  }

  get isPhoneValid() {
    if (!this.data.contactPhone) return true;
    const digits = this.data.contactPhone.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 11;
  }

  get isComplete() {
    return (
      !!this.data.platformType &&
      !!this.data.launchDeadline &&
      !!this.data.budgetCeiling &&
      !!this.data.maintenanceInterest &&
      !!this.data.contactName &&
      !!this.data.contactEmail &&
      this.isEmailValid &&
      !!this.data.contactPhone &&
      this.isPhoneValid
    );
  }

  onInputChange(event: any, key: keyof BriefingData) {
    let value = event.target.value;

    if (key === 'contactPhone') {
      value = this.applyPhoneMask(value);
      event.target.value = value;
    }

    this.update(key, value);
  }

  private applyPhoneMask(v: string): string {
    v = v.replace(/\D/g, '');
    if (v.length > 11) v = v.substring(0, 11);

    if (v.length > 10) {
      v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (v.length > 5) {
      v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (v.length > 2) {
      v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (v.length > 0) {
      v = v.replace(/^(\d*)/, '($1');
    }
    return v;
  }

  update(key: keyof BriefingData, value: string) {
    this.briefingService.updateData({ [key]: value });
    this.data = this.briefingService.getData();
  }

  submit() {
    this.isSubmitting = true;
    this.briefingService.submit().subscribe({
      next: () => {
        this.router.navigate(['/success']);
      },
      error: (err) => {
        console.error('Erro ao enviar briefing', err);
        this.router.navigate(['/success']);
      },
    });
  }
}
