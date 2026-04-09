import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Adicionei Router e RouterModule
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Adicione RouterModule aqui
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  mensagem: string = "";
  obj: Cliente = new Cliente();
  
  // Variáveis para o Login
  emailLogin: string = "";
  senhaLogin: string = "";
  
  // Controle de visualização
  exibirFormulario: boolean = false;

  constructor(private router: Router) {} // Injetando o Router

  ngOnInit() {
    // Busca se já existe um cliente salvo
    let json = localStorage.getItem("Cliente");
    if (json != null) {
      this.obj = JSON.parse(json);
    }
  }

  // Lógica de Cadastro
  cadastrar() {
    localStorage.setItem("Cliente", JSON.stringify(this.obj));
    this.mensagem = "Cadastro realizado com sucesso!";
    // Opcional: após cadastrar, podemos esconder o form e limpar a mensagem após 3 seg.
    setTimeout(() => { this.exibirFormulario = false; this.mensagem = ""; }, 3000);
  }

  // Lógica de Login integrada
  login() {
    const dados = localStorage.getItem("Cliente"); // Chave padronizada como "Cliente"

    if (dados) {
      const cliente: Cliente = JSON.parse(dados);
      if (cliente.email === this.emailLogin && cliente.senha === this.senhaLogin) {
        alert("Login realizado com sucesso!");
        this.router.navigate(['/vitrine']); // Redireciona para a home
      } else {
        alert("Email ou senha incorretos.");
      }
    } else {
      alert("Nenhum usuário cadastrado neste navegador.");
    }
  }
}