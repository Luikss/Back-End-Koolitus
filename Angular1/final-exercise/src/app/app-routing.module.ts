import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminKodulehtComponent } from './admin/admin-koduleht/admin-koduleht.component';
import { LisaToodeComponent } from './admin/lisa-toode/lisa-toode.component';
import { MuudaToodetComponent } from './admin/muuda-toodet/muuda-toodet.component';
import { VaataTooteidComponent } from './admin/vaata-tooteid/vaata-tooteid.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PealehtComponent } from './pealeht/pealeht.component';
import { VaataUksiktoodetComponent } from './pealeht/vaata-uksiktoodet/vaata-uksiktoodet/vaata-uksiktoodet.component';

const routes: Routes = [
  { path:"", component: PealehtComponent },
  { path:"ostukorv", component: OstukorvComponent },
  { path: "toode/:itemId", component: VaataUksiktoodetComponent},
  { path:"admin", component: AdminKodulehtComponent },
  { path:"admin/lisa-toode", component: LisaToodeComponent },
  { path:"admin/muuda-toodet/:itemId", component: MuudaToodetComponent },
  { path:"admin/vaata-tooteid", component: VaataTooteidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
