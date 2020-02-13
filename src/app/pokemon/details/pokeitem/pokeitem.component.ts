import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app-store/app-state';
import * as DataActions from '../../../store/app-store/actions';
import { ActivatedRoute } from '@angular/router';
import { selectDetailsList } from 'src/app/store/app-store/selectors';

@Component({
  selector: 'app-pokeitem',
  templateUrl: './pokeitem.component.html',
  styleUrls: ['./pokeitem.component.scss'],
})
export class PokeitemComponent implements OnInit {
  @ViewChild('pokeinfo', { static: false }) pokeElement: ElementRef;
  pokemon$ = this.store.pipe(select(selectDetailsList));
  abilities = [];
  constructor(private store: Store<AppState>,
              private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    window.scroll (0, 0);
    this.getPokemonDetail();
    this.pokemon$.subscribe(
      details => {
        if (details) {
          this.abilities = details.abilities.map( ability => ability.ability.name)
        }
      }
    );
  }
  getPokemonDetail() {
    const {id} = this.activatedRoute.snapshot.params;
    this.store.dispatch( DataActions.getDetail({id}));
    }
}
