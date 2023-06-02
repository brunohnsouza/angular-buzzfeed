import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { data } from "../../../assets/data/data";
import { Question, Result, Character } from 'src/assets/data/dataModel'; 

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  characterPhoto: string = "";
  characterName: string = "";

  characters: Character[] = [];

  questions: Question[] = [];
  questionSelected: Question | null = null;

  answers: string[] = [];
  answerSelected: Result | null = null;

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  private idElement: string | null = "0";
  private database: any;

  constructor(private activeRoute: ActivatedRoute) {}
    
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      result => this.idElement = result.get("id")
    )

    this.setContentToComponent(this.idElement);
  }
  
  setContentToComponent(id: string | null): void {
    this.database = data.filter(quizz => quizz.id.toString() == id)[0];
    
    this.questions = this.database.questions;

    this.questionSelected = this.questions[this.questionIndex];
    this.questionMaxIndex = this.questions.length;
    this.characters = this.database.character;
  }

  questionAnswered(value: string): void {
    this.answers.push(value);
    this.nextQuestion();
  }

  nextQuestion(): void {
    this.questionIndex+=1;

    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      this.setContentToResult();
      this.finished = true;
    } 
  }

  checkResult(answers: string[]): string {
    const result = answers.reduce((previousElement, currentElement, index, array)=>{
        if(
          array.filter(item => item === previousElement).length >
          array.filter(item => item === currentElement).length
        ){
          return previousElement;
        }else{
          return currentElement;
        }
    })

    return result;
  }

  async setContentToResult() {
    const finalAnswer = await this.checkResult(this.answers);

    this.answerSelected = this.database.results[finalAnswer as keyof typeof this.database.results];

    for (let character of this.characters) {
      
      if (character.id === finalAnswer) {

        this.characterName = character.name;
        this.characterPhoto = character.photo;

      }

    }
  }

  restartQuizz(): void {
    this.questionIndex = 0;
    this.questionSelected = this.questions[this.questionIndex];
    this.answers = [];
    this.finished = false;
  }
}
