import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';

@NgModule({
  declarations: [ProfessorComponent], // Declare aqui
  imports: [CommonModule, ProfessorRoutingModule],
})
export class ProfessorModule {}
