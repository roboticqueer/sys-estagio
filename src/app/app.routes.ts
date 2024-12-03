import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login-selection', pathMatch: 'full' },
  {
    path: 'login-selection',
    loadChildren: () =>
      import('./modules/login-selection/login-selection.module').then(
        (m) => m.LoginSelectionModule
      ),
  },
];
