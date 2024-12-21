import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '../dialogs/help-dialog/help-dialog.component'; // Importando HelpDialog
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component'; // Importando InfoDialog

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  email: string = '';  // Propriedade para o e-mail
  password: string = '';  // Propriedade para a senha
  hide: boolean = true; // Controle de visibilidade da senha
  stayConnected: boolean = false; // Estado do checkbox "Manter conectado"

  constructor(public dialog: MatDialog) {}

  // Método para abrir o HelpDialog
  openHelpDialog(): void {
    this.dialog.open(HelpDialogComponent, {
      data: {
        dialogContent: 'Este é o conteúdo de ajuda para o login de administrador.'
      }
    });
  }

  // Método para abrir o InfoDialog
  openInfoDialog(): void {
    this.dialog.open(InfoDialogComponent, {
      data: {
        dialogContent: 'Este é o conteúdo das informações sobre o login de administrador.'
      }
    });
  }

  // Método para alternar a visibilidade da senha
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
}
