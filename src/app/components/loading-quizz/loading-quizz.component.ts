import { Component, Input, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loading-quizz',
  templateUrl: './loading-quizz.component.html',
  styleUrls: ['./loading-quizz.component.css']
})
export class LoadingQuizzComponent implements AfterViewInit {
  @Input()
  loaderPhoto: string = "";

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const loaderElement = document.querySelector(".loading__container");
    
    setTimeout(() => {
      if (loaderElement) {
        this.renderer.setStyle(loaderElement, 'display', 'none');
        this.renderer.setStyle(document.body, 'overflow-y', 'auto');
      }
    }, 6000);
  }
}
