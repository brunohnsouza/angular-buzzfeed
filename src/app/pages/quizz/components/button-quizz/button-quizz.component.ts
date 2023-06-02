import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-quizz',
  templateUrl: './button-quizz.component.html',
  styleUrls: ['./button-quizz.component.css', './button-quizz.component.responsive.css']
})
export class ButtonQuizzComponent {
  @Input()
  textButton: string = "";
}
