import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-detalhe',
  imports: [CommonModule],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css',
})

export class Detalhe {
    obj: Produto = new Produto();
    mensagem: string = "";

    ngOnInit(){
      this.carregar();
    }

    carregar(){
         let json = localStorage.getItem("ProdutoSelecionado");
      if(json != null){
        this.obj = JSON.parse(json);
      } else {
        this.mensagem = "Produto invalido, verifique!";
      }
    }
    
    adicionarItemCesta(obj: Produto) {
    let json = localStorage.getItem("carrinho");
    let lista: ItemCesta[] = [];

    if (json != null) {
        lista = JSON.parse(json);
    }

    // 1. Procuramos se o produto já está na lista
    // Usamos o codigo para comparar
    let itemExistente = lista.find(it => it.produto.codigo === obj.codigo);

    if (itemExistente) {
        // 2. Se achou, apenas aumenta a quantidade do que já está lá
        itemExistente.quantidade += 1;
    } else {
        // 3. Se NÃO achou, aí sim criamos um novo ItemCesta
        let novoItem: ItemCesta = new ItemCesta();
        novoItem.produto = obj;
        novoItem.quantidade = 1;
        novoItem.valor = obj.valor;
        lista.push(novoItem);
    }

    // 4. Salva a lista atualizada e vai para o carrinho
    localStorage.setItem("carrinho", JSON.stringify(lista));
    location.href = "carrinho";
}

}