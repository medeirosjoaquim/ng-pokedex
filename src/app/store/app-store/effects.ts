

import { Effect, ofType, Actions } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import * as DataActions from './actions';
import { PokelistService } from 'src/app/core/services/pokelist.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class DataEffects {
  constructor(private actions: Actions,
              private dataService: PokelistService,
              private router: Router) {}

  @Effect({ dispatch: false })
  navigateTo = this.actions.pipe(
    ofType(DataActions.navigateToRoute),
    switchMap( route => this.router.navigate(['/details/' + route.id])
      ));
  @Effect()
  loadDetailData = this.actions.pipe(
    ofType(DataActions.getDetail),
    switchMap(detail => {
      return this.dataService.getDetails(detail.id).pipe(
        map(data => DataActions.getDetailSuccess({details: data } )),
        catchError(error =>
          of( DataActions.getDetailError({ error }))
        )
      );
    })
  );
  @Effect()
  loadPagedData = this.actions.pipe(
    ofType(DataActions.getPaginatedResult),
    switchMap(paged => {
      if (paged.limit) {
        return this.dataService.getPaginatedResult(paged.limit, null).pipe(
          map(data => DataActions.getPaginatedResultSuccess({pagedResults: data } )),
          catchError(error =>
            of( DataActions.getPagedError({ error }))
          )
        );
      } else if (paged.url) {
        return this.dataService.getPaginatedResult( null, paged.url ).pipe(
          map(data => {
            return DataActions.getPaginatedResultSuccess({pagedResults: data } )
          }),
          catchError(error =>
            of( DataActions.getPagedError({ error }))
          )
        );
      }
    })
  );
}
