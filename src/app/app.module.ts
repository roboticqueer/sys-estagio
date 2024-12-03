import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

/* Angular Material Modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necessário para animações
import { MatDialogModule } from '@angular/material/dialog'; // Para os pop-ups (Diálogos)
import { MatButtonModule } from '@angular/material/button'; // Botões estilizados
import { MatIconModule } from '@angular/material/icon'; // Ícones

@NgModule({
  declarations: [
    AppComponent // Declaramos o componente raiz aqui
  ],
  imports: [
    BrowserModule, // Importamos o módulo necessário para rodar no navegador
    BrowserAnimationsModule, // Ativamos as animações do Angular Material
    MatDialogModule, // Módulo de Diálogos
    MatButtonModule, // Módulo de Botões
    MatIconModule // Módulo de Ícones
  ],
  providers: [
    provideRouter(routes) // Fornecemos o roteamento definido em app.routes.ts
  ],
  bootstrap: [AppComponent] // Bootstrap define o componente inicial da aplicação
})
export class AppModule { }
