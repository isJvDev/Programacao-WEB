import { Routes } from '@angular/router';
import { Cadastrar } from './cadastrar/cadastrar';
import { Produtos } from './produtos/produtos';
import { Contato } from './contato/contato';
import { Pesquisar} from './pesquisar/pesquisar';
import { Carrinho } from './carrinho/carrinho';
import { Login } from './login/login'
import { ReenviaSenha } from './reenvia-senha/reenvia-senha';

export const routes: Routes = [
  { path: 'cadastrar', component: Cadastrar },
  { path: 'produtos', component: Produtos },
  { path: 'contato', component: Contato },
  { path: 'pesquisar', component: Pesquisar },
  { path: 'carrinho', component: Carrinho },
  { path: 'login', component: Login },
  { path: 'reenvia-senha', component: ReenviaSenha },
];
