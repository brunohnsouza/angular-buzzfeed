import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderQuizzComponent } from './components/header-quizz/header-quizz.component';
import { FooterQuizzComponent } from './components/footer-quizz/footer-quizz.component';

import { IndexModule } from "./pages/index/index.module";
import { QuizzModule } from "./pages/quizz/quizz.module";
import { LoadingQuizzComponent } from './components/loading-quizz/loading-quizz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderQuizzComponent,
    FooterQuizzComponent,
    LoadingQuizzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    QuizzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
