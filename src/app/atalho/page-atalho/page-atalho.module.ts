import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAtalhoPageRoutingModule } from './page-atalho-routing.module';

import { PageAtalhoPage } from './page-atalho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAtalhoPageRoutingModule
  ],
  declarations: [PageAtalhoPage]
})
export class PageAtalhoPageModule {}
