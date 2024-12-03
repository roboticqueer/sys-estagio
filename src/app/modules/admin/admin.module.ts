import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent], // Certifique-se de que o componente está declarado aqui
  imports: [
    CommonModule, // Necessário para *ngIf, *ngFor, etc.
    AdminRoutingModule, // Certifique-se de que o roteamento está importado
  ],
})
export class AdminModule {}
