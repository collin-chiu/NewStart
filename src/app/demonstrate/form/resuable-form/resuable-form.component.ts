import { Component, OnInit, Self, Optional } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder, NgControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resuable-form',
  templateUrl: './resuable-form.component.html',
  styleUrls: ['./resuable-form.component.css']
})
export class ResuableFormComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;

  get value() {
    return this.form.value;
  }

  set value(value) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(
    private fb: FormBuilder,
    @Self() @Optional() private ngControl: NgControl
  ) {
    this.ngControl.valueAccessor = this;

    this.form = this.fb.group({
      effectDate: [],
      expiryDate: []
    });
  }

  ngOnInit() {
    this.ngControl.control.setValidators([this.validate.bind(this)]);
    this.ngControl.control.updateValueAndValidity();

    this.form.valueChanges.subscribe(value => {
      this.onChange(value);
      this.onTouched();
    });

    this.form.valueChanges.subscribe(({effectDate , expiryDate}) => {
      if (effectDate > expiryDate) {
        this.form.controls.effectDate.setErrors({ comparison: true });
        this.form.controls.expiryDate.setErrors({ comparison: true });
        this.form.controls.effectDate.markAsTouched();
        this.form.controls.expiryDate.markAsTouched();
      } else {
        this.form.controls.effectDate.setErrors(null);
        this.form.controls.expiryDate.setErrors(null);
      }
    });

  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value) {
    if (value) {
      this.value = value;
    } else {
      this.form.reset();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    return this.form.valid ? null : { user: { valid: false } };
  }

  get f() { return this.form.controls; }
}
