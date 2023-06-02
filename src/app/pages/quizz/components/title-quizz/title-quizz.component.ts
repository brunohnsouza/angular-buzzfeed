import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-quizz',
  templateUrl: './title-quizz.component.html',
  styleUrls: ['./title-quizz.component.css', './title-quizz.component.responsive.css']
})
export class TitleQuizzComponent {
  @Input()
  questionTitle:string = "";
}
