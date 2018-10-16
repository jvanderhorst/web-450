import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 employees: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    this.userService.getEmployee()
    .subscribe(employees => this.employees = employees)
  }
  
}
