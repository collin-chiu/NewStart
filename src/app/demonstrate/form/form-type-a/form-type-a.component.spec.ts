import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeAComponent } from './form-type-a.component';

describe('FormTypeAComponent', () => {
  let component: FormTypeAComponent;
  let fixture: ComponentFixture<FormTypeAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypeAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
