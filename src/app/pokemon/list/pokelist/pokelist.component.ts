import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon';
import { AppState } from '../../../store/app-store/app-state';
import { Store, select } from '@ngrx/store';
import * as DataActions from '../../../store/app-store/actions';
import { selectPagedList } from 'src/app/store/app-store/selectors';
import { pokemonData } from 'src/app/core/pokemon-data';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlinedHeart } from '@fortawesome/free-regular-svg-icons';
import { Favorites } from 'src/app/core/Favorites';
@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;
  pagedResult$ = this.store.pipe(select(selectPagedList));
  solidHeart = solidHeart;
  outlinedHeart = outlinedHeart;
  selected: Pokemon;
  limit = 15;
  searchValue = '';
  pokeList: any;
  appendData = pokemonData;
  pokemonFavorites = [];
  spritesUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(private store: Store<AppState>,
              private favorites: Favorites) {
  }

  ngOnInit(): void {
    // this.pokemonFavorites = this.favorites.getFavorites;
    this.pagedResult$.subscribe(
      results => {
        if (results) {
          this.pokeList = results;
        } else {
          this.getPokemons(this.limit);
        }
      }
    );
  }
  goToDetails(id) {
    this.store.dispatch(DataActions.navigateToRoute({ id }));
  }
  getPokemons(data) {
    switch (typeof data) {
      case 'number':
        this.store.dispatch(DataActions.getPaginatedResult({ limit: data }));
        break;
      case 'string':
        this.store.dispatch(DataActions.getPaginatedResult({ url: data }));
        break;
    }
  }
  search(input: string) {
    this.searchValue = input;
  }
  close() {
    this.selected = null;
  }
  get favoritesList() {
    return this.favorites.favorites;
  }
  like(pokemonName) {
    if (this.favoritesList.includes(pokemonName)) {
      this.favorites.removeFavorite(pokemonName);
    } else {
      this.favorites.writeFavorite(pokemonName);
    }
  }
}
