import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { DataEffects } from './effects';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('DataEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>;
  let router: Router;
  let effects: DataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        DataEffects,
        provideMockActions(() => actions$)
      ]
    });
    router = TestBed.inject(Router);
    effects = TestBed.inject<DataEffects>(DataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
  it('should navigate to the pokemons detail page', () => {
    actions$ = of({ type: '[APP] Navigate to route', id: 1 });
    spyOn(router, 'navigate');
    effects.navigateTo.subscribe();
    expect(router.navigate).toHaveBeenCalledWith(['/details/1']);
  });
});
