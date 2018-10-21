import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { HttpRequest } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit{
 employeeId: number;

  constructor(private loginService: LoginService, private router: Router) {}
  
  ngOnInit() {}

  loginEmployee(){
    if(this.employeeId == this.employeeId) {
      this.router.navigate(['quiz-select']);
    }
    else {
      this.router.navigate(['login'])
      alert('Invalid Employee ID')
    }
  }
}
