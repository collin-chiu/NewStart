import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-type-b',
  templateUrl: './form-type-b.component.html',
  styleUrls: ['./form-type-b.component.css']
})
export class FormTypeBComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      contractNumber: ['',Validators.required],
      contractType: ['',Validators.required],
      subDate:[],
      files: []
    });

  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => console.log('formValueCganges', value));
  }

  onSubmit() {
    if (this.form.valid) {
      alert('Done !');
    } else {
      alert('Error!');
    }
  }

  get f() { return this.form.controls; }

}
