import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PealehtComponent } from './pealeht/pealeht.component';

const routes: Routes = [
  { path:"", component: PealehtComponent },
  { path:"ostukorv", component: OstukorvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
