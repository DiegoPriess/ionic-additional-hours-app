import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-home-adm',
	templateUrl: './home-adm.page.html',
	styleUrls: ['./home-adm.page.scss'],
})
export class HomeAdmPage implements OnInit {
	httpOptions: object = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
	}
	user: any;
	apiUrl: string = 'http://181.221.14.79:9003';

	constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.user = this.router.getCurrentNavigation()?.extras;
		});
	}

	ngOnInit() {
		this.httpClient.get(`${this.apiUrl}/list/0/1`, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError)
			).subscribe((response) => {
				console.log(response);
				this.router.navigate(['/home-adm']);
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
