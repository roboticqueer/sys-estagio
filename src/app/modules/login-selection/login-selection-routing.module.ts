import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSelectionComponent } from './login-selection.component';

const routes: Routes = [
  { path: '', component: LoginSelectionComponent },
  {
    path: 'aluno',
    loadChildren: () =>
      import('../aluno/aluno.module').then((m) => m.AlunoModule),
  },
  {
    path: 'professor',
    loadChildren: () =>
      import('../professor/professor.module').then((m) => m.ProfessorModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule), // Certifique-se de que o nome do módulo está correto
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSelectionRoutingModule {}
