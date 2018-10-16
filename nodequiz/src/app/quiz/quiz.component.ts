import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { QUIZZES } from '../quiz-content';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [ ]
})
export class QuizComponent implements OnInit{
  quizzes: Quiz[];//connect to server
  
  /* local connection
  quizzes = QUIZZES;
  selectedQuiz: Quiz;
  */
  
  constructor(private quizService: QuizService) { }

  /* local connection
  onSelectQuiz(quiz: Quiz): void {
    this.selectedQuiz = quiz;
  }
  */
   
  ngOnInit() {
    this.getQuiz();
   }

   getQuiz(): void {
    this.quizService.getQuiz()
    .subscribe(quizzes => this.quizzes = quizzes)
  }

}
