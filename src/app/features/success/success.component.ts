import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="text-center max-w-2xl mx-auto flex flex-col items-center">
      <!-- Icon with Pulse Animation -->
      <div class="w-24 h-24 bg-netflix-red rounded-full flex items-center justify-center mb-8 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 class="text-4xl md:text-5xl font-bold mb-6">Briefing Recebido!</h1>
      <p class="text-soft-gray text-xl mb-12 leading-relaxed">
        Obrigado por compartilhar sua visão. Analisarei os detalhes e entrarei em contato em até 24 horas para agendarmos nossa primeira reunião técnica.
      </p>

      <div class="bg-white bg-opacity-5 p-8 rounded-lg border border-white border-opacity-10 w-full mb-12">
        <h2 class="text-lg font-bold mb-4 uppercase tracking-widest text-netflix-red">Próximos Passos</h2>
        <ul class="text-left space-y-4">
          <li class="flex items-start gap-3">
            <span class="text-netflix-red font-bold">01.</span>
            <span>Análise técnica dos requisitos e escala.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-netflix-red font-bold">02.</span>
            <span>Estimativa inicial de esforço e prazos.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-netflix-red font-bold">03.</span>
            <span>Agendamento de call via WhatsApp/E-mail.</span>
          </li>
        </ul>
      </div>

      <button 
        class="bg-white text-black hover:bg-netflix-red hover:text-white transition-all duration-300 font-bold py-4 px-12 rounded-sm"
        [routerLink]="['/']"
      >
        VOLTAR AO INÍCIO
      </button>

      <div role="status" class="sr-only">
        Formulário enviado com sucesso. Entraremos em contato em breve.
      </div>
    </div>
  `
})
export class SuccessComponent {}
