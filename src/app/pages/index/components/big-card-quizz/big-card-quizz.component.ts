import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card-quizz',
  templateUrl: './big-card-quizz.component.html',
  styleUrls: ['./big-card-quizz.component.css', './big-card-quizz.component.responsive.css']
})
export class BigCardQuizzComponent {
  @Input()
  id:string = "0";

  @Input()
  photoCover:string = "";

  @Input()
  cardAuthor:string = "";

  @Input()
  cardTitle:any = "";

  @Input()
  cardDescription:string = "";
}
