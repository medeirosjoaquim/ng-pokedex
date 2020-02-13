import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'isFavoritePokemon'
})
export class IsFavoritePipe implements PipeTransform {
  public transform(value: string[], pokemonName: string) {
    if (!pokemonName) { return false; }
    return value.includes(pokemonName);
  }
}
