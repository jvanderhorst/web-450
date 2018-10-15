import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [ QuizService ]
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  //quizzes = QUIZZES;
  //selectedQuiz: Quiz;

  //quiz: any = [];
  
  //quizzes: Array<Quiz>;


  
  constructor(private quizService: QuizService) { }

  showQuiz() {
    this.quizService.getQuiz()
    .subscribe((data: Quiz) => this.quiz = {
      quizId: data['quizId'],
      quizName:  data['quizName'],
      question: data['question']
    });
  }

  
 
  ngOnInit() { }

  /*onSelectQuiz(quiz:any){
    this.selectedQuiz = quiz;
    console.log(this.SelectedQuiz)
  }*/



  

}
