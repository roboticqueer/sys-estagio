import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

// Caminhos corrigidos para os componentes de diálogo
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';
import { HelpDialogComponent } from './dialogs/help-dialog/help-dialog.component';



@Component({
  selector: 'app-login-selection',
  templateUrl: './login-selection.component.html',
  styleUrls: ['./login-selection.component.css'],
})
export class LoginSelectionComponent {
  constructor(private router: Router, private dialog: MatDialog) {}

  // Navegação para a rota de acordo com o papel selecionado
  navigateTo(role: string) {
    console.log('Navegando para:', role);
    switch (role) {
      case 'professor':
        this.router.navigate(['/login-selection/professor']);
        break;
      case 'aluno':
        this.router.navigate(['/login-selection/aluno']);
        break;
      case 'admin':
        this.router.navigate(['/login-selection/admin']);
        break;
      default:
        console.error('Opção de login inválida:', role);
    }
  }
  

  // Método para abrir o pop-up de informações
  openInfoDialog(): void {
    this.dialog.open(InfoDialogComponent, {
      width: '400px', // Define a largura do pop-up
    });
  }

  // Método para abrir o pop-up de ajuda
  openHelpDialog(): void {
    this.dialog.open(HelpDialogComponent, {
      width: '400px', // Define a largura do pop-up
    });
  }
}
