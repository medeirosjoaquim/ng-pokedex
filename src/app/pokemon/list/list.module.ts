import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { ListRoutingModule } from './list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PokelistComponent, PokemonSearchComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CoreModule,
    ReactiveFormsModule,
  ]
})
export class ListModule { }
