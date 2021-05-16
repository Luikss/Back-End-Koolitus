import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonNewComponent } from './person-new/person-new.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "new", component: PersonNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
