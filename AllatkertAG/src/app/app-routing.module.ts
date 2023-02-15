import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllatainkComponent } from './allataink/allataink.component';
import { NyitooldalComponent } from './nyitooldal/nyitooldal.component';
import { UjAllatComponent } from './uj-allat/uj-allat.component';

const routes: Routes = [
  {path: '', component: NyitooldalComponent},
  {path: 'allataink', component: AllatainkComponent},
  {path: 'ujallat', component: UjAllatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
