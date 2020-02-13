import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app-state';
import * as fromPaged from './paged-reducer';
import * as fromDetails from './details-reducer';
export const reducers: ActionReducerMap<AppState> = {
  details: fromDetails.detailsReducer,
  pagedResults: fromPaged.pagedResultsReducer,
};

