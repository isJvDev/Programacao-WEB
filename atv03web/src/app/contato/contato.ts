import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-contato',
  imports: [FormsModule, CommonModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  public mensagem : string = '';
  public titulo: string = '';
  public nome: string = '';
  public telefone: string = '';
  public email: string = '';
  public texto: string = '';
  public copia: String = '';

  public obj:Cliente = new Cliente();
  
  public enviar() {
      this.mensagem = 'A sua mensagem foi enviada com sucesso!';
      let corpoMensagem = "titulo="+ this.titulo + ", " +
                        "nome="+ this.nome + ", " +
                        "email="+ this.email + ", " +
                        "copia="+ this.copia + ", " +
                        "telefone="+ this.telefone + ", " +
                        "texto="+ this.texto;
      localStorage.setItem("mensagemContato", corpoMensagem);
  
    this.obj.nome = this.nome;
    this.obj.email = this.email;
    this.obj.telefone = this.telefone;

  let jason = JSON.stringify(this.obj);
  localStorage.setItem("cliente", jason);
 }

}
