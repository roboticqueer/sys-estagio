import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessorComponent } from './professor.component';
import { ProfessorRoutingModule } from './professor-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import do MatCheckboxModule

@NgModule({
  declarations: [ProfessorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProfessorRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule // Adicionado aqui
  ]
})
export class ProfessorModule {}
