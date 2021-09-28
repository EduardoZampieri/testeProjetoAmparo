import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeditacaoPagePage } from './meditacao-page.page';

const routes: Routes = [
  {
    path: '',
    component: MeditacaoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeditacaoPagePageRoutingModule {}
