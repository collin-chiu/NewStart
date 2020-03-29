import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeBComponent } from './form-type-b.component';

describe('FormTypeBComponent', () => {
  let component: FormTypeBComponent;
  let fixture: ComponentFixture<FormTypeBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypeBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
