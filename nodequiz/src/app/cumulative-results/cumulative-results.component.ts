import { Component, OnInit } from '@angular/core';

export interface quizHistory {
  quiz: string;
  position: number;
  grade: number;
}
//local date to test table layout, will use data to populate
const quizData: quizHistory[] = [
  {position: 1, quiz: 'DevOps', grade: 90},
  {position: 2, quiz: 'REST', grade: 80},
  {position: 3, quiz: 'REST', grade: 60},
  {position: 4, quiz: 'Angular', grade: 100},
  {position: 5, quiz: 'DevOps', grade: 50},
];

@Component({
  selector: 'app-cumulative-results',
  templateUrl: './cumulative-results.component.html',
  styleUrls: ['./cumulative-results.component.css']
})
export class CumulativeResultsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'quiz', 'grade'];
  dataSource = quizData;

  constructor() { }

  ngOnInit() {
  }
}
