import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle-quizz',
  templateUrl: './subtitle-quizz.component.html',
  styleUrls: ['./subtitle-quizz.component.css', './subtitle-quizz.component.responsive.css']
})
export class SubtitleQuizzComponent {
  @Input()
  textSubtitle:string = "";
}
