import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Quiz } from "./quiz";
import { Observable } from 'rxjs';







@Injectable()
export class QuizService {
  
 quizUrl = '/api/quiz';

  constructor(private http: HttpClient) { }

  getQuiz(){
    return this.http.get<Quiz>(this.quizUrl)
  }

  
 

}
