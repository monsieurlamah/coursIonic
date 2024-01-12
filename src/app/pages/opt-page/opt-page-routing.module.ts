import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptPagePage } from './opt-page.page';

const routes: Routes = [
  {
    path: '',
    component: OptPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptPagePageRoutingModule {}
