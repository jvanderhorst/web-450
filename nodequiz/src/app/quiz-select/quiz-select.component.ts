import { Component, TemplateRef } from '@angular/core';
import {MatDialog } from "@angular/material";





@Component({
  selector: 'app-quiz-select',
  templateUrl: './quiz-select.component.html',
  styleUrls: ['./quiz-select.component.css']
})
export class QuizSelectComponent  {

constructor(private dialog: MatDialog) {}

 
  openVideoDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }


}
