import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <header class="p-6 md:px-12 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 bg-netflix-red rounded-sm flex items-center justify-center font-bold text-lg"
        >
          M
        </div>
        <span class="text-xl font-bold tracking-tight"
          >MATHEUS<span class="text-netflix-red">DEV</span></span
        >
      </div>
    </header>

    <main class="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
      <router-outlet />
    </main>

    <footer class="p-6 text-center text-soft-gray text-sm">
      &copy; 2026 Matheus Dev. Todos os direitos reservados.
    </footer>
  `,
  styles: [],
})
export class App {}
