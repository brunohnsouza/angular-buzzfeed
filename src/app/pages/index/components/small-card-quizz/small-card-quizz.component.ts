import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card-quizz',
  templateUrl: './small-card-quizz.component.html',
  styleUrls: ['./small-card-quizz.component.css', 'small-card-quizz.component.responsive.css']
})
export class SmallCardQuizzComponent {
  @Input()
  id:string = "0"
  
  @Input()
  photoCover:string = ""

  @Input()
  cardAuthor:string = ""

  @Input()
  authorCover:string = ""

  @Input()
  cardTitle:string = ""
}
