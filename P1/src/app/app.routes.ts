import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Vitrine } from './vitrine/vitrine';
import { Contato } from './contato/contato';
import { Carrinho } from './carrinho/carrinho';
import { Login } from './login/login'
import { Detalhe } from './detalhe/detalhe';
import { Recupera } from './recupera/recupera';
import { Bemvindo} from './bemvindo/bemvindo';

export const routes: Routes = [
  { path: 'cadastro', component: Cadastro },
  { path: 'vitrine', component: Vitrine },
  { path: '', component: Vitrine },
  { path: 'fale-conosco', component: Contato },
  { path: 'contato', component: Contato },
  { path: 'carrinho', component: Carrinho },
  { path: 'login', component: Login },
  { path: 'detalhe', component: Detalhe },
  { path: 'recupera', component: Recupera }
];
