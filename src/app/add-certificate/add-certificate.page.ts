import { Time } from '@angular/common';
import { Component } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.page.html',
  styleUrls: ['./add-certificate.page.scss'],
})
export class AddCertificatePage {

  private httpOptions: object = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
	}

  student: any;
  amountTime: any | undefined;

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute, private toastController: ToastController) {
		this.route.queryParams.subscribe(params => {
			this.student = this.router.getCurrentNavigation()?.extras;
		});
	}

  addCertificate() {
		this.httpClient.post(`${environment.apiUrl}/certificate`, this.getBodyCertificate(), this.httpOptions)
			.pipe(
				retry(2),
				catchError(this.handleError)
			).subscribe(() => {
        this.showToaster("Certificado adicionado com sucesso");
				this.router.navigate(['/home-student'], this.student);
			});
	}

	handleError(error: HttpErrorResponse) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			errorMessage = error.error.message;
		} else {
			errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
		}
		this.showToaster("Erro ao editar certificado");
    this.router.navigate(['/home-student'], this.student);
		return throwError(errorMessage);
	};

  getBodyCertificate() {
    return {
      "userCreator": this.student.id,
      "userJudge": this.student.id,
      "document": "",
      "description": "",
      "status": "P",
      "dateCreation": "",
      "amountHours": this.amountTime
    }
  }

  async showToaster(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      cssClass: "toast-success",
      duration: 3000
    });

    await toast.present();
  }

  backToHome(){
    this.router.navigate(['/home-student'], this.student);
  }
}
