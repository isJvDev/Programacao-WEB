import { Component } from '@angular/core';
import { Cliente} from '../model/cliente';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastrar',
  imports: [],
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css',
})
export class Cadastrar {

  cliente: Cliente = new Cliente();
  salvar() {
    localStorage.setItem("cliente", JSON.stringify(this.cliente));
    alert("Cadastro realizado com sucesso!");
  }
}
