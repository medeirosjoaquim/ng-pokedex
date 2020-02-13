import { PokemonDetail } from 'src/app/core/models/pokemon-detail';

import { PokemonPageResult } from 'src/app/core/models/pokemon-results';

export interface AppState {
  details: PokemonDetail;
  pagedResults: PokemonPageResult;
}
