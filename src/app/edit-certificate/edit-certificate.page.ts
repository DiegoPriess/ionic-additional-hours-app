import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit, OnChanges } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-certificate',
  templateUrl: './edit-certificate.page.html',
  styleUrls: ['./edit-certificate.page.scss'],
})
export class EditCertificatePage {

  httpOptions: object = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
	}

  data: any | undefined
  student: any;
  certificate: any;
	apiUrl: string = 'http://181.221.14.79:9003';

	constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute, private toastController: ToastController) {
		this.route.queryParams.subscribe(params => {
			this.data = this.router.getCurrentNavigation()?.extras;

      this.student = {
        cpf: this.data["cpf"],
        email: this.data["email"],
        id: this.data["id"],
        name: this.data["name"],
        password: this.data["password"],
        permission: this.data["permission"],
        registrationNumber:this.data["registrationNumber"]
      }

      this.certificate = {
        id: this.data["idCertificate"],
        dateCreation: this.data["dateCreation"],
        amountHours: this.data["amountHours"],
        status: this.data["status"],
        document: this.data["document"],
        description: this.data["description"],
        userCreator: this.data["userCreator"]["id"],
        userJudge: this.data["userJudge"]["id"],
      }
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
    this.showToaster("Erro ao editar certificado");
    this.router.navigate(['/home-student'], this.student);
		return throwError(errorMessage);
	};

  alterCertificate() {
    this.httpClient.post(`${environment.apiUrl}/certificate`, this.certificate, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    ).subscribe(() => {
      this.showToaster("Certificado editado com sucesso");
      this.router.navigate(['/home-student'], this.student);
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
