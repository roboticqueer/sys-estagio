import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Necessário para o mat-icon
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    HelpDialogComponent,
    InfoDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule // Importar módulo do Angular Material
  ],
  exports: [
    HelpDialogComponent,
    InfoDialogComponent // Exportar os componentes
  ]
})
export class DialogsModule { }
