import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private employeeUrl = 'api/employee';

  constructor(private http: HttpClient) { }

  getEmployee (): Observable<User[]> {
    return this.http.get<User[]>(this.employeeUrl)
   
  }
}
