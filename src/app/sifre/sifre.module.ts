import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SifrePageRoutingModule } from './sifre-routing.module';
import { SifrePage } from './sifre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SifrePageRoutingModule
  ],
  declarations: [SifrePage]
})
export class SifrePageModule {}
