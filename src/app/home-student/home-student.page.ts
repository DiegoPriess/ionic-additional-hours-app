import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.page.html',
  styleUrls: ['./home-student.page.scss'],
})
export class HomeStudentPage implements OnInit{

  @ViewChild('listenerOut', { static: true })
  private values: string[] = ['first', 'second', 'third'];

  httpOptions: object = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
	}
	student: any;
  certificates: any;
	apiUrl: string = 'http://181.221.14.79:9003';

	constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.student = this.router.getCurrentNavigation()?.extras;
		});
	}
  
  ngOnInit(): void {
    this.httpClient.get(`${environment.apiUrl}/certificate/list/${this.student.id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError.bind(this))
    ).subscribe((response) => {
      console.log(response);
      this.certificates = response;
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

  addCertificate() {
    this.router.navigate(['/add-certificate'], this.student);
  }

  accordionGroupChange = (ev: any) => {

    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;
  };

  redirectToEditPage(certificate: object) {
    let data = this.student;
    data.push(certificate);
    this.router.navigate(['/edit-certificate'], data);
  }

  redirectToViewPage(certificate: object) {
    let data = this.student;
    data.push(certificate);
    this.router.navigate(['/edit-certificate'], data);
  }

  deleteCertificate() {
    
  }

}
