import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { Favorites } from '../core/Favorites';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    PokemonRoutingModule,
  ],
})
export class PokemonModule {
  constructor(private favorites: Favorites) {
    if (favorites.favorites === null) {
      favorites.initialize();
    }
  }
}
