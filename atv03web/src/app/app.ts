import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // Organize os imports aqui
import { FormsModule } from '@angular/forms'; // 1. IMPORTAR O FORMS MODULE

@Component({
  selector: 'app-root',
  standalone: true, // Certifique-se de que isso aparece ou é assumido pelo Angular 17+
  imports: [
    RouterOutlet, 
    RouterModule, 
    FormsModule // 2. ADICIONAR NA LISTA DE IMPORTS
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primeiro-projeto');
  
  // Exemplo de variável para usar com o ngModel
  nome: string = ''; 
}