import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle-quizz',
  templateUrl: './subtitle-quizz.component.html',
  styleUrls: ['./subtitle-quizz.component.css']
})
export class SubtitleQuizzComponent {
  @Input()
  iconSubtitle:string = "";

  @Input()
  textSubtitle:string = "";
}
