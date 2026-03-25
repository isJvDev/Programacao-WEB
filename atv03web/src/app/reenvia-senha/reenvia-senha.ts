import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1. Importar o FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reenvia-senha',
  standalone: true,
  imports: [FormsModule, CommonModule], // 2. Adicionar aqui
  templateUrl: './reenvia-senha.html',
  styleUrl: './reenvia-senha.css',
})
export class ReenviaSenha {
  email: string = '';
  mensagem: string = '';

  recuperar() {
    const dados = localStorage.getItem("cliente");

    if (dados) {
      const cliente = JSON.parse(dados);

      // Verificamos se o e-mail digitado é o mesmo que está cadastrado
      if (cliente.email === this.email) {
        this.mensagem = `Um link de recuperação foi enviado para ${this.email}!`;
      } else {
        this.mensagem = "E-mail não encontrado em nossa base de dados.";
      }
    } else {
      this.mensagem = "Não há usuários cadastrados neste navegador.";
    }
  }
}