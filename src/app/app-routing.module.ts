import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedInComponent } from './linked-in/linked-in.component';

const routes: Routes = [
  {path:'linkedIn',component:LinkedInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
