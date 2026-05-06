import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-step-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="w-full max-w-4xl mx-auto flex flex-col min-h-[60vh]">
      <!-- Progress Bar -->
      <div class="w-full bg-white bg-opacity-10 h-1 mb-12 rounded-full overflow-hidden">
        <div 
          class="bg-netflix-red h-full transition-all duration-500 ease-out"
          [style.width.%]="progress"
        ></div>
      </div>

      <div class="flex-1 flex flex-col">
        <router-outlet></router-outlet>
      </div>
      
      <!-- Accessibility Strategy: Navigation Announcement -->
      <div aria-live="polite" class="sr-only">
        Passo {{ currentStep }} de 5: {{ stepTitle }}
      </div>
    </div>
  `,
  styles: []
})
export class StepContainerComponent {
  progress = 20;
  currentStep = 1;
  stepTitle = '';

  private stepMap: Record<string, { step: number; title: string }> = {
    '/steps/identity': { step: 1, title: 'Identidade Visual' },
    '/steps/tech': { step: 2, title: 'Contexto Técnico' },
    '/steps/requirements': { step: 3, title: 'Requisitos de Produto' },
    '/steps/metrics': { step: 4, title: 'Métricas e Escala' },
    '/steps/logistics': { step: 5, title: 'Logística e Fechamento' }
  };

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const config = this.stepMap[event.urlAfterRedirects];
      if (config) {
        this.currentStep = config.step;
        this.stepTitle = config.title;
        this.progress = (config.step / 5) * 100;
      }
    });
  }
}
