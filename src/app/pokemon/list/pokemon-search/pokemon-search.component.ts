import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { throttleTime, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit, OnDestroy {
  @Output() searchEvent = new EventEmitter<string>();
  form: FormGroup;
  subscription: Subscription;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      search: ['']
    });

    this.subscription = this.form.controls.search.valueChanges
        .pipe(
          throttleTime(500),
          debounceTime(500),
          distinctUntilChanged()
    )
        .subscribe(value => this.searchEvent.emit(value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

