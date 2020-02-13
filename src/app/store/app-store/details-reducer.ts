import * as ACTIONS from './actions';

import { createReducer, on } from '@ngrx/store';

export const detailsFeatureKey = 'details';

export const initialState = { abilities: [], height: 0, weight: 0, moves: [] };

export const detailsReducer = createReducer(
  initialState,
  on(
    ACTIONS.getDetailSuccess, (state, { details }) => (
      {
        ...state,
        details,
        isLoading: false
      }
    )
  ),
  on(
    ACTIONS.getDetailError, (state, { error }) => (
      {
        ...state,
        error,
        isLoading: false
      }
    )
  )
);
