import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../../shared/material/material.module';
import { GlobalModule } from '../../shared/global/global.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GlobalModule,
  ]
})
export class HomeModule { }
