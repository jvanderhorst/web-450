import { Component, TemplateRef } from '@angular/core';
import {MatDialog } from "@angular/material";
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz-select',
  templateUrl: './quiz-select.component.html',
  styleUrls: ['./quiz-select.component.css']
})
export class QuizSelectComponent  {
  quizzes: Quiz[];
  
  constructor(private dialog: MatDialog, private quizService: QuizService) {}
  
  //matdialog for presentation
  openVideoDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  getQuizById (): void {
    this.quizService.getQuizById()
    .subscribe(quizzes => this.quizzes = quizzes)
  }
}
