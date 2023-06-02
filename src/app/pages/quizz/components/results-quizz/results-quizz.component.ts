import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-quizz',
  templateUrl: './results-quizz.component.html',
  styleUrls: ['./results-quizz.component.css', './results-quizz.component.responsive.css']
})
export class ResultsQuizzComponent {
  @Input()
  characterPhoto: string = "";

  @Input()
  characterName: string = "";
  
  @Input()
  textResult: string = "";
}
