import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppGithubComponent } from './app-github/app-github.component';

import { AppSorteioComponent } from './app-sorteio/app-sorteio.component';
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Route[] = [
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'diretivas',
    component: DiretivasComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'criacao-pipes',
    component: CriacaoPipesComponent,
  },
  {
    path: 'sorteios',
    component: AppSorteioComponent,
  },
  {
    path: 'github',
    component: AppGithubComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplosRoutingModule {}
