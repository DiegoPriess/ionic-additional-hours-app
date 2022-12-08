import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.page.html',
  styleUrls: ['./home-student.page.scss'],
})
export class HomeStudentPage {

  @ViewChild('listenerOut', { static: true })
  private values: string[] = ['first', 'second', 'third'];

  httpOptions: object = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
	}
	student: any;
  certificates: any;

	constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute, private toastController: ToastController) {
		this.route.queryParams.subscribe(params => {
			this.student = this.router.getCurrentNavigation()?.extras;
      this.listCertificates();
		});
	}

  listCertificates() {
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
    certificate["idCertificate"] = certificate["id"];
    delete certificate["id"];
    this.router.navigate(['/edit-certificate'], Object.assign(this.student, certificate));
  }

  redirectToViewPage(certificate: object) {
    this.router.navigate(['/view-certificate'], Object.assign(this.student, certificate));
  }

  deleteCertificate(certificate: object) {
    this.httpClient.delete(`${environment.apiUrl}/certificate/${certificate["id"]}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError.bind(this))
    ).subscribe((response) => {
      this.showToaster("Certificado deletado com sucesso");
    });
  }

  async showToaster(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      cssClass: "toast-success",
      duration: 3000
    });

    await toast.present();
  }

}
