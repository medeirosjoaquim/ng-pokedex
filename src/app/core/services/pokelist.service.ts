import { map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDetail } from '../models/pokemon-detail';
import { PokemonPageResult } from '../models/pokemon-results';
import { mapWithId } from '../../core/utils';
@Injectable({
  providedIn: 'root'
})
export class PokelistService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }
  getPaginatedResult(limit?: number, url?: string) {
    if (limit) {
      return this.http.get<PokemonPageResult>(`${this.baseUrl}/?limit=${limit}`)
        .pipe(
          map(data => ({ ...data, results: data.results.map(mapWithId) })
          ),
        );
    }
    if (url) {
      return this.http.get<PokemonPageResult>(url)
        .pipe(
          map( data =>  ({ ...data, results: data.results.map(mapWithId) })
          ),
        );
    }
  }

  getDetails(id) {
    return this.http.get<PokemonDetail>(`${this.baseUrl}/${id}`)
      .pipe(
        map(data => data)
      );
  }
}
