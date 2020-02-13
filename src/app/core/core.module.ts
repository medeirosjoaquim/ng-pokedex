import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { IsFavoritePipe } from './is-favorite.pipe';

@NgModule({
  declarations: [SearchPipe, LazyLoadDirective, IsFavoritePipe],
  imports: [
    CommonModule,
  ],
  exports: [SearchPipe, LazyLoadDirective, IsFavoritePipe]
})
export class CoreModule { }
