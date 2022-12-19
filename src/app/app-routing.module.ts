import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';

const routes:Routes=[
  {path:'', component: HomeComponent},
  {path:'question', component: QuestionComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
