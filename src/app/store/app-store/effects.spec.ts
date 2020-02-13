import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { DataEffects } from './effects';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DataEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>;
  let effects: DataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [
        DataEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<DataEffects>(DataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
