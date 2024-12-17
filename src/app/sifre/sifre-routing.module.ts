import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SifrePage } from './sifre.page';

const routes: Routes = [
  {
    path: '',
    component: SifrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SifrePageRoutingModule {}
