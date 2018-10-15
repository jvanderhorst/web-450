import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  _id: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(formData){
    console.log(formData);
    console.log(formData.employeeId);
    if (this.verifyId(formData.employeeId)){
      this.submitted = true;
      console.log(formData.employeeId + ' is logged in');
      
      this.http.post('/api/employee', {
        employeeId: formData.employeeId
      }).subscribe(res => {
        this.router.navigate(['/select', res])
      }, (err) => {
        console.log(err)
      });
    }
  }

  verifyId(_id: String){
    if (_id.length == 4)
    return true;
  }
  
}
