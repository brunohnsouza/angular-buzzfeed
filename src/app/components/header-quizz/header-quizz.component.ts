import { Component } from '@angular/core';

@Component({
  selector: 'app-header-quizz',
  templateUrl: './header-quizz.component.html',
  styleUrls: ['./header-quizz.component.css', './header-quizz.component.responsive.css']
})
export class HeaderQuizzComponent {

  changeTheme(event: MouseEvent) {

    const html: HTMLElement = document.documentElement;
    const inputCheckbox: HTMLInputElement = event.target as HTMLInputElement;

    if (inputCheckbox.checked) {
      html.classList.add(inputCheckbox.id);
    } else {
      html.classList.remove(inputCheckbox.id);
    }
  }
}
