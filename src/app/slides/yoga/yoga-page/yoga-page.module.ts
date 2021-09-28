import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YogaPagePageRoutingModule } from './yoga-page-routing.module';

import { YogaPagePage } from './yoga-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YogaPagePageRoutingModule
  ],
  declarations: [YogaPagePage]
})
export class YogaPagePageModule {}
