import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-type-a',
  templateUrl: './form-type-a.component.html',
  styleUrls: ['./form-type-a.component.css']
})
export class FormTypeAComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      contractNumber: ['', Validators.required],
      party1: [''],
      party2: [''],
      subDate:[],
      information: ['', [Validators.required,Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
    // this.form.valueChanges.subscribe(value => console.log('formValueCganges', value));
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
