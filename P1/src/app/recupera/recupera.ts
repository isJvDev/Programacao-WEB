import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-recupera',
  standalone: true, // Adicione se estiver usando Angular moderno
  imports: [CommonModule, FormsModule],
  templateUrl: './recupera.html',
  styleUrl: './recupera.css',
})
export class Recupera {
  mensagem: string = "";
  obj: Cliente = new Cliente();

  recuperarSenha() {
    // 1. Busca o cliente cadastrado no LocalStorage
    const dadosSessao = localStorage.getItem("Cliente");

    if (dadosSessao) {
      // 2. Converte a string JSON para um objeto real
      const clienteCadastrado = JSON.parse(dadosSessao);

      // 3. Verifica se o e-mail digitado no campo (this.obj.email) 
      // é igual ao que está gravado (clienteCadastrado.email)
      if (this.obj.email === clienteCadastrado.email) {
        this.mensagem = "Sucesso! As instruções foram enviadas para o e-mail: " + this.obj.email;
      } else {
        this.mensagem = "Erro: O e-mail informado não foi encontrado em nossa base.";
      }
    } else {
      // Caso o usuário tente recuperar sem nunca ter cadastrado ninguém no navegador
      this.mensagem = "Erro: Nenhum usuário cadastrado neste dispositivo.";
    }
  }
}