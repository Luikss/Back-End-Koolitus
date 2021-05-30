import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PealehtComponent } from './pealeht/pealeht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminKodulehtComponent } from './admin/admin-koduleht/admin-koduleht.component';
import { LisaToodeComponent } from './admin/lisa-toode/lisa-toode.component';
import { VaataTooteidComponent } from './admin/vaata-tooteid/vaata-tooteid.component';
import { MuudaToodetComponent } from './admin/muuda-toodet/muuda-toodet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PealehtComponent,
    OstukorvComponent,
    NavbarComponent,
    FooterComponent,
    AdminKodulehtComponent,
    LisaToodeComponent,
    VaataTooteidComponent,
    MuudaToodetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
