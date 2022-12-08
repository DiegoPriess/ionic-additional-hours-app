import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-certificate',
  templateUrl: './view-certificate.page.html',
  styleUrls: ['./view-certificate.page.scss'],
})
export class ViewCertificatePage implements OnInit {

  student: any;
  amountTime: any | undefined;
  certificate: any;
  data: any;

  constructor(private router: Router, private route: ActivatedRoute,) {
		this.route.queryParams.subscribe(params => {
			this.data = this.router.getCurrentNavigation()?.extras;

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
  ngOnInit() {
  }

  backToHome(){
    this.router.navigate(['/home-student'], this.student);
  }

}
