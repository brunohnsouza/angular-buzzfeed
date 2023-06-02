import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigCardQuizzComponent } from "./components/big-card-quizz/big-card-quizz.component";
import { SmallCardQuizzComponent } from "./components/small-card-quizz/small-card-quizz.component";
import { SubtitleQuizzComponent } from "./components/subtitle-quizz/subtitle-quizz.component";
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    BigCardQuizzComponent,
    SmallCardQuizzComponent,
    SubtitleQuizzComponent,
    IndexComponent
  ],
  exports: [
    BigCardQuizzComponent,
    SmallCardQuizzComponent,
    SubtitleQuizzComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class IndexModule { }
