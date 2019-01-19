import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from 'src/app/questions/questions.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
  { 
  path: '', 
  redirectTo: 'Login', 
  pathMatch: 'full' 
},
{
  path:'Login',
  component:LoginComponent
},
{
  path:'Questions',
  component:QuestionsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
