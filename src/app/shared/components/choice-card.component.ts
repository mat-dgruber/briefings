import { Component, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choice-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative flex flex-col items-center justify-center p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 h-full group"
      [class.border-netflix-red]="selected"
      [class.bg-netflix-red]="selected"
      [class.bg-opacity-10]="selected"
      [class.border-white]="!selected"
      [class.border-opacity-20]="!selected"
      [class.hover:border-opacity-50]="!selected"
      role="radio"
      [attr.aria-checked]="selected"
      tabindex="0"
    >
      <div class="mb-4 text-3xl">
        <ng-content select="[icon]"></ng-content>
      </div>
      <h3 class="text-lg font-bold mb-2 text-center">{{ title }}</h3>
      <p 
        class="text-soft-gray text-sm text-center leading-relaxed group-hover:text-white transition-colors"
        [innerHTML]="description"
      ></p>
      
      <!-- Accessibility Strategy: Focus Indicator -->
      <div 
        *ngIf="selected" 
        class="absolute top-2 right-2 w-4 h-4 bg-netflix-red rounded-full flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
    :host:focus-visible > div {
      outline: 2px solid white;
      outline-offset: 4px;
    }
  `]
})
export class ChoiceCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() selected: boolean = false;
  @Output() select = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    this.select.emit();
  }

  @HostListener('keydown.space', ['$event'])
  @HostListener('keydown.enter', ['$event'])
  onKeydown(event: Event) {
    event.preventDefault();
    this.select.emit();
  }
}
