import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptPagePageRoutingModule } from './opt-page-routing.module';

import { OptPagePage } from './opt-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptPagePageRoutingModule
  ],
  declarations: [OptPagePage]
})
export class OptPagePageModule {}
