import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YogaPagePage } from './yoga-page.page';

const routes: Routes = [
  {
    path: '',
    component: YogaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YogaPagePageRoutingModule {}
