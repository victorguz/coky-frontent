import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { HomeModule } from '../home/home.module';
import { GlobalModule } from '../../shared/global/global.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,

    //Own modules
    HomeModule,
  ],
  exports: [
  ]
})
export class PublicModule { }
