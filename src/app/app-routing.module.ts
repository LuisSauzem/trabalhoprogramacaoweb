import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componentes/pagina-inicial/pagina-inicial.component";
import {VisualizarTarefasComponent} from "./componentes/visualizar-tarefas/visualizar-tarefas.component";
import {CardapioComponent} from "./componentes/cardapio/cardapio.component";
import {CarrinhoComponent} from "./componentes/carrinho/carrinho.component";

const routes: Routes = [
  { path: "", redirectTo: "pagina-inicial", pathMatch: "full" },
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "cardapio", component: CardapioComponent },
  { path: "carrinho", component: CarrinhoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
