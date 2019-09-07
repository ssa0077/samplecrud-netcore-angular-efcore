import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientListComponent } from '../patientList/patientList.component';
import { PatientService } from '../services/patientservice.service';

@Component({
  templateUrl: './AddPatient.component.html'
})

export class createpatient implements OnInit {
  patientForm: FormGroup;
  title: string = "Create";
  patientId: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _patientService: PatientService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.patientId = this._avRoute.snapshot.params["id"];
    }

    this.patientForm = this._fb.group({
      patientId: 0,
      name: ['', [Validators.required]],
      uniqueId: ['', [Validators.required]],
      nokName: ['', [Validators.required]],
      gender: ['', [Validators.required]]   
    })
  }

  ngOnInit() {    

    if (this.patientId > 0) {
      this.title = "Edit";
      this._patientService.getPatientById(this.patientId)
        .subscribe(resp => this.patientForm.setValue(resp)
          , error => this.errorMessage = error);
    }

  }

  save() {

    if (!this.patientForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._patientService.savePatient(this.patientForm.value)
        .subscribe((data) => {
          this._router.navigate(['/get-patient']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._patientService.updatePatient(this.patientForm.value)
        .subscribe((data) => {
          this._router.navigate(['/get-patient']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/get-patient']);
  }

  get name() { return this.patientForm.get('name'); }
  get gender() { return this.patientForm.get('gender'); }
  get uniqueId() { return this.patientForm.get('uniqueId'); }
  get nokName() { return this.patientForm.get('nokName'); }
}
