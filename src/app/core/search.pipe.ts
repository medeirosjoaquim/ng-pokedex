import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value: {name: string, url: string, id?: number}[], term: string) {
    if (!term) { return value; }
    if (term.length < 1) { return value; }
    return (value || [])
    .filter(pokemon => pokemon.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
  }
}
