import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Quiz } from "./quiz";
import { Observable, throwError } from 'rxjs';


import { catchError, retry } from 'rxjs/operators';





@Injectable()
export class QuizService {
  
 quizUrl = '/api/quiz';
 quizIdUrl = '/api/quiz/:id';


  constructor(private http: HttpClient) {}

  getQuiz (): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizUrl)
  }

  getQuizById (): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizIdUrl)
  }
}