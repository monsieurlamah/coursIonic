import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchChefPageRoutingModule } from './search-chef-routing.module';

import { SearchChefPage } from './search-chef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchChefPageRoutingModule
  ],
  declarations: [SearchChefPage]
})
export class SearchChefPageModule {}
