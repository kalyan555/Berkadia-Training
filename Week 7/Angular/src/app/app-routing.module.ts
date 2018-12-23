import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { DetailsComponent } from 'src/app/details/details.component';

const routes: Routes = [
  { 
  path: '', 
  redirectTo: 'Main', 
  pathMatch: 'full' 
},
{
  path:'Main',
  component:MainComponent
},

{
  path:'Details/:location',
  component:DetailsComponent
},
{
  path:'**',
  redirectTo: 'Main',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
