import * as fromDetailsReducer from './details-reducer';
import * as fromPagedReducer from './paged-reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app-state';

const getDetailsState = createFeatureSelector<AppState>(
  fromDetailsReducer.detailsFeatureKey
);

const getPagedState = createFeatureSelector<AppState>(
  fromPagedReducer.pagedFeatureKey
);


export const selectPagedList = createSelector(
  getPagedState,
  state => {
    return state.pagedResults;
  }
);

export const selectDetailsList = createSelector(
  getDetailsState,
  state => state.details
);

export const selectDetailsError = createSelector(
  getDetailsState,
  state => state
);

export const selectDetailsIsLoading = createSelector(
  getDetailsState,
  state => state
);

export const selectAppComponentViewModel = createSelector(
  selectDetailsList,
  selectDetailsError,
  selectDetailsIsLoading,
  (details, error, loading) => ({
    details,
    error,
    loading
  })
);
