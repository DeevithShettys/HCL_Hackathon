import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import {PublicRoutingModule} from './public-routing.module';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicInfoModule { }
