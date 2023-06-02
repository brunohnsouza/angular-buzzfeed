import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleQuizzComponent } from "./components/title-quizz/title-quizz.component";
import { QuizzComponent } from './quizz.component';
import { ButtonQuizzComponent } from './components/button-quizz/button-quizz.component';
import { SubtitleQuizzComponent } from './components/subtitle-quizz/subtitle-quizz.component';
import { ResultsQuizzComponent } from './components/results-quizz/results-quizz.component';
import { RouterModule } from '@angular/router';
import { ActionsQuizzComponent } from './components/actions-quizz/actions-quizz.component';


@NgModule({
  declarations: [
    TitleQuizzComponent,
    QuizzComponent,
    SubtitleQuizzComponent,
    ButtonQuizzComponent,
    ResultsQuizzComponent,
    ActionsQuizzComponent,
  ],
  exports: [
    TitleQuizzComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class QuizzModule { }
