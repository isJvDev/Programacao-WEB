import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';

export class Login {
   email: string = '';
   senha: string = '';
  
  login() {
  let cliente = JSON.parse(localStorage.getItem("cliente")!);

  if(cliente.email === this.email && cliente.senha === this.senha) {
    alert("Login realizado com sucesso!");
  } else {
    alert("Email ou senha incorretos. Tente novamente.");
  }
      }
}