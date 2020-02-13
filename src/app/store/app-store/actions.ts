import { createAction, props } from '@ngrx/store';

import { PokemonDetail } from 'src/app/core/models/pokemon-detail';
import { PokemonPageResult } from 'src/app/core/models/pokemon-results';

export const navigateToRoute = createAction('[APP] Navigate to route', props<{ id: number }>());

export const getPaginatedResult =
  createAction('[API] Get Paginated result', props<{ limit?: number, url?: string }>());

export const getPaginatedResultSuccess =
  createAction('[API] Get Paginated result success',
    props<{ pagedResults: PokemonPageResult }>());

export const getDetail = createAction('[API] Load details', props<{ id: number }>());

export const getDetailSuccess =
  createAction('[API] Load details success',
    props<{ details: PokemonDetail }>());
export const getDetailError = createAction('[API] Load details error',
  props<{ error: any }>());

export const getPagedError = createAction('[API] Load paged results error',
  props<{ error: any }>());
