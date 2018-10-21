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
  quizzes: Quiz[];
  question: Array<object>;
  answer: Array<object>;
    
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz(): void {
    this.quizService.getQuiz()
    .subscribe(quizzes => this.quizzes = quizzes)
  }
}
