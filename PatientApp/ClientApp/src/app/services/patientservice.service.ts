import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class PatientService {
  appUrl: string = "";

  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.appUrl = baseUrl;
  }  

  getPatients() {
    return this._http.get(this.appUrl + 'api/Patient/GetAllPatients')
      .pipe(map((response: Response) => response.json()));
  }

  getPatientById(id: number) {
    return this._http.get(this.appUrl + "api/Patient/Details/" + id)
      .pipe(map((response: Response) => response.json()));
  }

  savePatient(patient) {
    return this._http.post(this.appUrl + 'api/Patient/Create', patient)
      .pipe(map((response: Response) => response.json()));
  }

  updatePatient(patient) {
    return this._http.put(this.appUrl + 'api/Patient/Edit', patient)
      .pipe(map((response: Response) => response.json()));
  }

  deletePatient(id) {
    return this._http.delete(this.appUrl + "api/Patient/Delete/" + id)
      .pipe(map((response: Response) => response.json()));
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
