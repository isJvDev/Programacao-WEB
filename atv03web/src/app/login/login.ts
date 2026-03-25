import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  
  login() {
    const dados = localStorage.getItem("cliente");

    if (dados) {
      // 2. DIZER QUE O OBJETO É DO TIPO CLIENTE
      const cliente: Cliente = JSON.parse(dados);

      // Agora o VS Code vai te mostrar as opções quando você digitar 'cliente.'
      if (cliente.email === this.email && cliente.senha === this.senha) {
        alert("Login realizado com sucesso!");
      } else {
        alert("Email ou senha incorretos.");
      }
    } else {
      alert("Usuário não encontrado.");
    }
  }
}