import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
interface UsersData {
	cpf: string;
	email: string;
	id: number;
	name: string;
	password: string;
	permission: string;
	registrationNumber: string;
}

@Component({
	selector: 'app-home-adm',
	templateUrl: './home-adm.page.html',
	styleUrls: ['./home-adm.page.scss'],
})
export class HomeAdmPage implements OnInit {
	httpOptions: object = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
	}
	student: any;
	apiUrl: string = 'http://181.221.14.79:9003';
	usersData: UsersData[] = [];
	filteredUsersData: UsersData[] = this.usersData;
	search: string = "";

	constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.student = this.router.getCurrentNavigation()?.extras;
		});
	}

	ngOnInit() {
		this.httpClient.get(`${environment.apiUrl}/user/list/0/10`, this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError)
			).subscribe((response) => {
				response["content"].map((item: UsersData) => {
					this.usersData.push(item);
				})
			});
			
	}

	searchOnChange(event: any) {
		const value: string = event.target.value.toLowerCase();
		const newData = this.usersData.reduce((acc: UsersData[], val) => {
			if (val.name.toLowerCase().includes(value)) {
				acc.push(val);
			}
			return acc
		}, []);
		this.filteredUsersData = newData;
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

	onClickStudent(ia: number) {
		console.log(ia);
	}

}
