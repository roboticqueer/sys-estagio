import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importando MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importando MatInputModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // Importando MatCheckboxModule
import { MatIconModule } from '@angular/material/icon'; // Importando MatIconModule
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule, // Adicionando MatFormFieldModule
    MatInputModule, // Adicionando MatInputModule
    MatCheckboxModule, // Adicionando MatCheckboxModule
    MatIconModule, // Adicionando MatIconModule
    AdminRoutingModule
  ]
})
export class AdminModule {}
