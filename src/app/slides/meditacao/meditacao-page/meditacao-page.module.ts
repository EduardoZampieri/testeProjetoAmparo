import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeditacaoPagePageRoutingModule } from './meditacao-page-routing.module';

import { MeditacaoPagePage } from './meditacao-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeditacaoPagePageRoutingModule
  ],
  declarations: [MeditacaoPagePage]
})
export class MeditacaoPagePageModule {}
