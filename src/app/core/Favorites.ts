import { Injectable } from '@angular/core';

/**
 * Gravar e ler favoritos
 */
@Injectable({
  providedIn: 'root'
})
export class Favorites {
  get favorites() {
    return JSON.parse(localStorage.getItem('favorites'));
  }
  public writeFavorite(favoriteName: string) {
    if (this.favorites === null) {
      this.initialize();
    }
    const favoritesArray = this.favorites;
    favoritesArray.push(favoriteName);
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }
  public removeFavorite(favoriteName: string) {
    const favoritesArray = this.favorites;
    const favoriteIndex = favoritesArray.indexOf(favoriteName);
    favoritesArray.splice(favoriteIndex, 1);
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }
  public initialize() {
    if (this.favorites === null) {
      localStorage.setItem('favorites', JSON.stringify(['']));
    }
  }
}
