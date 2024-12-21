import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '../dialogs/help-dialog/help-dialog.component';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent {
  email: string = '';  // Adicionada a propriedade 'email'
  password: string = '';  // Adicionada a propriedade 'password'
  hide: boolean = true; // Controle da visibilidade da senha
  stayConnected: boolean = false; // Estado do checkbox "Manter conectado"

  constructor(public dialog: MatDialog) {}

  // Método para abrir o HelpDialog
  openHelpDialog(): void {
    this.dialog.open(HelpDialogComponent);
  }

  // Método para abrir o InfoDialog
  openInfoDialog(): void {
    this.dialog.open(InfoDialogComponent);
  }

  // Método para alternar a visibilidade da senha
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
}
