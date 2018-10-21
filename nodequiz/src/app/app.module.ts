import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatMenuModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { QuizSelectComponent } from './quiz-select/quiz-select.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { CumulativeResultsComponent } from './cumulative-results/cumulative-results.component';
import {FormsModule} from "@angular/forms";
import { MatDialogModule } from "@angular/material";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from './quiz.service';
import { UserService } from './user.service';
import { LoginService } from './login.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizSelectComponent,
    PresentationsComponent,
    QuizComponent,
    ResultsComponent,
    CumulativeResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatRadioModule,
    MatTableModule
  ],

  
  providers: [QuizService, UserService, LoginService],
  bootstrap: [AppComponent],
  entryComponents: [PresentationsComponent]
})
export class AppModule { }
