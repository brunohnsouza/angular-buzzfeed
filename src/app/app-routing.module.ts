import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { QuizzComponent } from './pages/quizz/quizz.component';

const routes: Routes = [
  {
    path:'', component: IndexComponent, pathMatch:'full'
  },
  {
    path:'quizz/:id', component: QuizzComponent
  },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
