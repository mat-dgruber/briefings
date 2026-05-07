import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <header class="p-6 md:px-12 flex items-center justify-between bg-black">
      <div class="flex items-center gap-2">
        <img src="assets/logo.svg" alt="Logo" class="w-10 h-10 rounded-lg shadow-lg" />
        <span class="text-xl font-bold tracking-tight text-netflix-red"
          >MATHEUS<span class="text-white">DEV</span></span
        >
      </div>
    </header>

    <main class="flex-1 flex flex-col bg-black">
      <router-outlet />
    </main>

    <footer class="p-2 md:p-6 text-center text-soft-gray text-xs w-full relative z-10">
      &copy; 2026 Matheus Dev. Todos os direitos reservados.
    </footer>
  `,
  styles: [],
})
export class App {}
