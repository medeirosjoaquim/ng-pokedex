import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./list/list.module').then(m => m.ListModule), data: {animation: 'isRight'}},
  {path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), data: {animation: 'isLeft'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
