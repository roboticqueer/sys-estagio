import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './professor.component';

const routes: Routes = [
  { path: '', component: ProfessorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], // Certifique-se de exportar o RouterModule
})
export class ProfessorRoutingModule {} // Exporte o módulo corretamente
