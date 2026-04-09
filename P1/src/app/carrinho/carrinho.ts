import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho implements OnInit {
  // Ajustado para bater com o HTML:
  public lista: any[] = [];
  public total: number = 0;
  public pedidoFinalizado: boolean = false;
  public mensagem: string = "Seu carrinho está vazio";

  ngOnInit() {
    this.carregarCarrinho();
  }

  carregarCarrinho() {
    const dados = localStorage.getItem("carrinho");
    if (dados) {
      this.lista = JSON.parse(dados);
      this.calcularTotal();
    }
  }

  alterarQuantidade(index: number, acao: number) {
    this.lista[index].quantidade += acao;

    if (this.lista[index].quantidade <= 0) {
      this.lista.splice(index, 1);
    }

    localStorage.setItem("carrinho", JSON.stringify(this.lista));
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.lista.reduce((acc: number, item: any) => {
      // Usamos item.produto.valor ou item.produto.promo conforme sua estrutura
      const preco = item.produto.promo || item.produto.valor;
      return acc + (preco * item.quantidade);
    }, 0);
  }

  limparCarrinho() {
    this.lista = [];
    this.total = 0;
    localStorage.removeItem("carrinho");
  }

  gravarPedido() {
    // Simula a gravação e limpa o carrinho
    localStorage.removeItem("carrinho");
    this.lista = [];
    this.pedidoFinalizado = true;
  }
}