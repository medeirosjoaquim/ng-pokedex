import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeitemComponent } from './pokeitem/pokeitem.component';


const routes: Routes = [
  {path: '', redirectTo: ':id', pathMatch: 'full'},
  {path: ':id', component: PokeitemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
