import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patientservice.service';

@Component({
  templateUrl: './patientList.component.html'
})

export class PatientListComponent {
  public patientList: PatientData[];

  constructor(public http: Http, private _router: Router, private _patientService: PatientService) {
    this.getPatients();
  }

  getPatients() {
    this._patientService.getPatients().subscribe(
      data => this.patientList = data
    )
  }

  delete(patientID) {
    var ans = confirm("Do you want to delete patient with Id: " + patientID);
    if (ans) {
      this._patientService.deletePatient(patientID).subscribe((data) => {
        this.getPatients();
      }, error => console.error(error))
    }
  }
}

interface PatientData {
  patientId: number;
  name: string;
  uniqueId: string;
  nokName: string;
  gender: string; 
}
