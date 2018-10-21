import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuizSelectComponent } from './quiz-select/quiz-select.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { CumulativeResultsComponent } from './cumulative-results/cumulative-results.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'quiz-select', component: QuizSelectComponent },
  { path: 'presentations', component: PresentationsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'cumulative-results', component: CumulativeResultsComponent },
      
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
