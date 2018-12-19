import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { NoneComponent } from 'src/app/none/none.component';
import { SuperheroesComponent } from 'src/app/superheroes/superheroes.component';
import { HeroesdetailsComponent } from 'src/app/heroesdetails/heroesdetails.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', 
  redirectTo: 'Home', 
  pathMatch: 'full' 
},
{
  path:'Home',
  component:HomeComponent
},
{
  path:'Superheroes',
  component:SuperheroesComponent,
  canActivate:[AuthGuard]
},
{
  path:'Superheroes/:id',
  component:HeroesdetailsComponent,
  canActivate:[AuthGuard]
},
{
  path:'**',
  component:NoneComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
