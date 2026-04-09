import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // 1. Importe o Router
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  senha: string = '';

  // 2. Injete o Router no construtor
  constructor(private router: Router) {}

  login() {
    // 3. Use a chave "Cliente" (com C maiúsculo) para bater com o Cadastro
    const dados = localStorage.getItem("Cliente");

    if (dados) {
      const cliente: Cliente = JSON.parse(dados);

      if (cliente.email === this.email && cliente.senha === this.senha) {
        alert("Login realizado com sucesso!");
        
        // 4. Redireciona o usuário para a vitrine
        this.router.navigate(['/vitrine']); 
      } else {
        alert("Email ou senha incorretos.");
      }
    } else {
      alert("Nenhum usuário encontrado neste navegador. Por favor, cadastre-se primeiro.");
    }
  }
}