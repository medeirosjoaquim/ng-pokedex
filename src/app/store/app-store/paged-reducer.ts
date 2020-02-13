import * as ACTIONS from './actions';

import { createReducer, on } from '@ngrx/store';
import { PokemonPageResult } from 'src/app/core/models/pokemon-results';

export const pagedFeatureKey = 'pagedResults';

const initialState: PokemonPageResult = {
  count: 0,
  next: '',
  previous: '',
  results: []
};

export const pagedResultsReducer = createReducer(
  initialState,
  on(
    ACTIONS.getPaginatedResultSuccess, (state, { pagedResults }) => (
      {
        ...state,
        pagedResults,
        isLoading: false
      }
    )
  ),
  on(
    ACTIONS.getPagedError, (state, { error }) => (
      {
        ...state,
        error,
        isLoading: false
      }
    )
  )
);
