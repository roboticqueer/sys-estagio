import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Importação do MatIconModule
import { LoginSelectionRoutingModule } from './login-selection-routing.module';
import { LoginSelectionComponent } from './login-selection.component';
import { HelpDialogComponent } from '../dialogs/help-dialog/help-dialog.component';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';

@NgModule({
  declarations: [LoginSelectionComponent, HelpDialogComponent, InfoDialogComponent],
  imports: [
    CommonModule,
    LoginSelectionRoutingModule,
    MatIconModule, // Necessário para o <mat-icon>
  ],
})
export class LoginSelectionModule {}
