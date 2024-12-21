import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '../dialogs/help-dialog/help-dialog.component'; // Importando HelpDialog
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component'; // Importando InfoDialog

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent {
  email: string = '';  // Propriedade para o e-mail
  password: string = '';  // Propriedade para a senha
  hide: boolean = true; // Controle de visibilidade da senha
  stayConnected: boolean = false; // Estado do checkbox "Manter conectado"

  constructor(public dialog: MatDialog) {}

  // Método para abrir o HelpDialog
  openHelpDialog(): void {
    this.dialog.open(HelpDialogComponent, {
      data: {
        dialogContent: 'Este é o conteúdo de ajuda para o login do aluno.'
      }
    });
  }

  // Método para abrir o InfoDialog
  openInfoDialog(): void {
    this.dialog.open(InfoDialogComponent, {
      data: {
        dialogContent: 'Este é o conteúdo das informações sobre o login do aluno.'
      }
    });
  }

  // Método para alternar a visibilidade da senha
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
}
