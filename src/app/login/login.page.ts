import { Component } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  httpOptions: object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
  }

  apiUrl: string = 'http://localhost:8080';
  email: string = "";
  password: string = "";

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  authenticate(){
     this.httpClient.get(`${this.apiUrl}/user/auth/${this.email}/${this.password}`, this.httpOptions)
     .pipe(
       retry(2),
       catchError(this.handleError)
      ).subscribe((Response: object) => {
        this.router.navigate(['/detail']);
      });
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
