import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitebarComponent } from './components/sitebar/sitebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SitebarComponent,
    LazyImageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SitebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
