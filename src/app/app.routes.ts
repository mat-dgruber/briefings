import { Routes } from '@angular/router';
import { StepContainerComponent } from './features/steps/step-container.component';
import { IdentityComponent } from './features/steps/identity';

export const routes: Routes = [
  { path: '', redirectTo: 'steps/identity', pathMatch: 'full' },
  {
    path: 'steps',
    component: StepContainerComponent,
    children: [
      { path: 'identity', component: IdentityComponent },
      {
        path: 'tech',
        loadComponent: () => import('./features/steps/tech').then((m) => m.TechComponent),
      },
      {
        path: 'requirements',
        loadComponent: () =>
          import('./features/steps/requirements').then((m) => m.RequirementsComponent),
      },
      {
        path: 'metrics',
        loadComponent: () => import('./features/steps/metrics').then((m) => m.MetricsComponent),
      },
      {
        path: 'logistics',
        loadComponent: () => import('./features/steps/logistics').then((m) => m.LogisticsComponent),
      },
    ],
  },
  {
    path: 'proposta',
    loadComponent: () =>
      import('./features/proposal/proposal.component').then((m) => m.ProposalComponent),
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./features/success/success.component').then((m) => m.SuccessComponent),
  },
];
