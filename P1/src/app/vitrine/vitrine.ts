import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Adicionado para navegação correta
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  listaExibida: Produto[] = [];
  mensagem: string = "";
  
  lista: Produto[] = [
  { 
    "codigo": 1, 
    "nome": "Nike Mercurial Superfly 9", 
    "descritivo": "Chuteira de alto desempenho com unidade Zoom Air específica para futebol no calcanhar, proporcionando um nível extra de amortecimento responsivo. O cabedal Vaporposite+ combina malha aderente com material premium para controle de bola ideal em altas velocidades. Oferece tração excepcional em gramados naturais e ajuste dinâmico com o icônico colarinho Dynamic Fit.", 
    "valor": 1899.90, 
    "promo": 1599.90, 
    "quantidade": 10, 
    "keywords": "nike, mercurial, campo, profissional, velocidade" 
  },
  { 
    "codigo": 2, 
    "nome": "Adidas Predator Accuracy", 
    "descritivo": "Desenvolvida para precisão absoluta e controle total nos chutes. Possui tecnologia High Definition Grip com elementos de borracha estrategicamente posicionados na zona de impacto para garantir aderência superior à bola. O cabedal HybridTouch oferece maciez e conforto, enquanto o solado facetado distribui o peso para maior estabilidade em qualquer condição climática.", 
    "valor": 1699.90, 
    "promo": 1450.00, 
    "quantidade": 8, 
    "keywords": "adidas, predator, precisão, controle, campo" 
  },
  { 
    "codigo": 3, 
    "nome": "Puma Future Ultimate", 
    "descritivo": "Equipada com tecnologia PWRTAPE para suporte estratégico e cabedal adaptativo FUZIONFIT360, que combina malha dupla elástica e suporte suplementar. Este design permite que o atleta jogue com ou sem cadarços, garantindo máxima agilidade e liberdade de movimento. O solado de dupla densidade Dynamic Motion System melhora a tração em mudanças rápidas de direção.", 
    "valor": 1499.90, 
    "promo": 1299.90, 
    "quantidade": 15, 
    "keywords": "puma, future, agilidade, criatividade, fuzionfit" 
  },
  { 
    "codigo": 4, 
    "nome": "Mizuno Morelia Neo IV", 
    "descritivo": "Representa a essência da velocidade japonesa e o artesanato de alta qualidade. Produzida com couro de canguru legítimo premium na parte frontal, oferece um toque de bola incomparável e durabilidade extrema. Seu design minimalista é focado em leveza, apresentando uma estrutura reforçada que mantém o pé firme durante corridas intensas e movimentos laterais.", 
    "valor": 1299.90, 
    "promo": 1199.90, 
    "quantidade": 5, 
    "keywords": "mizuno, morelia, couro, artesanal, clássica" 
  },
  { 
    "codigo": 5, 
    "nome": "Nike Phantom GX Elite", 
    "descritivo": "Apresenta o material Gripknit revolucionário, uma malha pegajosa que cobre a zona de impacto para melhor toque e domínio sob qualquer clima. O design assimétrico no calcanhar oferece conforto imediato e reduz o risco de irritações, enquanto as travas Tri-star trabalham em conjunto com as ranhuras de flexibilidade no antepé para permitir mudanças de direção explosivas.", 
    "valor": 1999.90, 
    "promo": 1799.00, 
    "quantidade": 12, 
    "keywords": "nike, phantom, elite, toque, gripknit" 
  },
  { 
    "codigo": 6, 
    "nome": "Adidas X Crazyfast", 
    "descritivo": "Construída para aceleração pura e velocidade máxima. O cabedal Aerocage ultraleve em malha revestida oferece suporte técnico apenas onde é necessário, mantendo o peso no mínimo. O solado Speedframe contém uma inserção elástica de carbono que proporciona propulsão instantânea em gramados naturais firmes, ideal para jogadores que dependem da explosão física.", 
    "valor": 1599.90, 
    "promo": 1399.90, 
    "quantidade": 20, 
    "keywords": "adidas, x, velocidade, leveza, aceleração" 
  },
  { 
    "codigo": 7, 
    "nome": "Umbro Pro 5 Bump (Futsal)", 
    "descritivo": "Referência absoluta no futsal profissional. Introduz a tecnologia BUMP na entressola de ponta a ponta, garantindo amortecimento superior e retorno de energia a cada passada. O cabedal combina couro natural na zona de chute para maior sensibilidade e tecido respirável nas laterais para manter os pés frescos. Solado em borracha non-marking com alta aderência em quadras internas.", 
    "valor": 499.90, 
    "promo": 449.90, 
    "quantidade": 30, 
    "keywords": "umbro, futsal, quadra, profissional, conforto" 
  },
  { 
    "codigo": 8, 
    "nome": "Nike Tiempo Legend 10", 
    "descritivo": "Apresentando o inovador FlyTouch Plus, um couro sintético projetado tecnicamente que é mais macio que o couro natural e se molda ao seu pé sem lacear excessivamente. Esta tecnologia não retém água, mantendo a chuteira leve mesmo em dias de chuva. As microesferas nas zonas de toque amplificam o controle para passes e dribles precisos, mantendo a tradição de conforto da linha Tiempo.", 
    "valor": 1399.90, 
    "promo": 1150.00, 
    "quantidade": 14, 
    "keywords": "nike, tiempo, toque, clássica, conforto" 
  },
  { 
    "codigo": 9, 
    "nome": "Adidas Copa Pure.1", 
    "descritivo": "Oferece um toque sedoso e um ajuste perfeito graças ao cabedal em couro Fusionskin de alta qualidade, que reduz a absorção de água e mantém a chuteira leve. Seu design sem costuras na zona de impacto proporciona uma sensibilidade pura com a bola, enquanto o solado leve Torsionframe garante estabilidade e tração superior em gramados naturais firmes, unindo a tradição da linha Copa com a tecnologia moderna.", 
    "valor": 1499.90, 
    "promo": 1299.00, 
    "quantidade": 0, 
    "keywords": "adidas, copa, clássica, couro, elegância" 
  },
  { 
    "codigo": 10, 
    "nome": "Puma King Top FG", 
    "descritivo": "O design icônico usado por lendas do futebol mundial, agora atualizado para o jogo moderno. Construída integralmente em couro bovino premium, proporciona um ajuste luxuoso que se molda ao formato do pé. Apresenta a tradicional língua dobrável que cobre os cadarços para uma zona de impacto limpa e solado leve em PU com travas cônicas, garantindo estabilidade e conforto excepcionais em gramados firmes.", 
    "valor": 899.90, 
    "promo": 899.90, 
    "quantidade": 7, 
    "keywords": "puma, king, clássica, lendária, couro" 
  }
]

  // Injetamos o Router no construtor
  constructor(private router: Router) {
    this.listaExibida = this.lista;
  }

  pesquisar(termo: string) {
    if (!termo.trim()) {
      this.listaExibida = this.lista;
      return;
    }
    const busca = termo.toLowerCase();
    this.listaExibida = this.lista.filter(item => 
      item.nome.toLowerCase().includes(busca) || 
      item.keywords.toLowerCase().includes(busca) ||
      item.descritivo.toLowerCase().includes(busca)
    );
  }

  redirecionar(obj: Produto) {
    localStorage.setItem("ProdutoSelecionado", JSON.stringify(obj));
    this.router.navigate(['/detalhe']); // Navegação padrão Angular
  }

  adicionarItemCesta(obj: Produto) {
    let json = localStorage.getItem("carrinho");
    let listaCesta: ItemCesta[] = [];

    if (json != null && json != "") {
      listaCesta = JSON.parse(json);
    }

    // Lógica para não duplicar itens
    let itemExistente = listaCesta.find(it => it.produto.codigo === obj.codigo);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      let novoItem: ItemCesta = new ItemCesta();
      novoItem.produto = obj;
      novoItem.quantidade = 1;
      novoItem.valor = obj.valor;
      listaCesta.push(novoItem);
    }

    localStorage.setItem("carrinho", JSON.stringify(listaCesta));
    this.router.navigate(['/carrinho']); // Navegação padrão Angular
  }
}