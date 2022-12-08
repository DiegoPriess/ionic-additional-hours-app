import { Component } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage {

	httpOptions: object = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
	}

	email: string = "";
	password: string = "";
	isFieldsAvailable: boolean = true;

	constructor(private httpClient: HttpClient, private router: Router) {
	}

	authenticate() {
		this.httpClient.get(`${environment.apiUrl}/user/auth/${this.email}/${this.password}`, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError.bind(this))
			).subscribe((response) => {
        this.isFieldsAvailable = true;
				this.router.navigate(['/home-adm']);
			});
	}

	handleError(error: HttpErrorResponse) {
		console.log(this.isFieldsAvailable);
		this.isFieldsAvailable = false;
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
