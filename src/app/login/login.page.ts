import { Component } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage {

	private httpOptions: object = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
	}

	private apiUrl: string = 'http://181.221.14.79:9003';
	email: string = "";
	password: string = "";

	constructor(private httpClient: HttpClient, private router: Router) {}

	authenticate() {
		this.httpClient.get(`${this.apiUrl}/user/auth/${this.email}/${this.password}`, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError)
			).subscribe((response) => {
				this.router.navigate(response["permission"] == 1 ? ['/home-adm'] : ['/home-student'], response);
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
