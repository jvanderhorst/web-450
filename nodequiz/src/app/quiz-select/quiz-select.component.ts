import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { PresentationsComponent } from '../presentations/presentations.component';




@Component({
  selector: 'app-quiz-select',
  templateUrl: './quiz-select.component.html',
  styleUrls: ['./quiz-select.component.css']
})
export class QuizSelectComponent  {

constructor(private dialog: MatDialog) {}

videos = [
  { name: 'DevOps', src: "/nodequiz/src/app/quiz-select/assets/presentations/DevOps.mp4"},
  { name: 'Angular', src: 'nodequiz/src/app/quiz-select/assets/presentations/angular.mp4'},
  { name: 'REST', src: 'nodequiz/src/app/quiz-select/assets/presentations/REST.mp4'}
];
  
  openVideoDialog(video?) {
    const dialogVideo = new MatDialogConfig();
    dialogVideo.disableClose = true;
    this.dialog.open(PresentationsComponent, {
      data: {
       
      }
    });
  }


}
