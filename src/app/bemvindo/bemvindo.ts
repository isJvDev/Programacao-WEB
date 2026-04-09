import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para o *ngIf
import { FormsModule } from '@angular/forms';   // Para o [(ngModel)]
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-bemvindo',
  imports: [CommonModule, FormsModule],
  templateUrl: './bemvindo.html',
  styleUrl: './bemvindo.css',
})
export class Bemvindo {
  mensagem:string="Ola, faça seu login!";
  obj: Cliente = new Cliente();

  ngOnInit(){
      let json = localStorage.getItem("Cliente");
      if(json != null){
        this.obj = JSON.parse(json);
        this.mensagem = "Ola, "+ this.obj.nome + " seja bem vindo, clique aqui para sair";
      } else {
        this.mensagem="Ola, faça seu login!";
      }
  }

  recuperarSenha() {
    // Lógica simples para o professor ver que funciona
    if (this.obj.email) {
      this.mensagem = "Enviamos um link para: " + this.obj.email;
    } else {
      this.mensagem = "Por favor, digite seu e-mail primeiro.";
    }
  }
  
}