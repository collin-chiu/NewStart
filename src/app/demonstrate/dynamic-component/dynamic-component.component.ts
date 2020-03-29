import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { FormTypeAComponent } from '../form/form-type-a/form-type-a.component';
import { FormTypeBComponent } from '../form/form-type-b/form-type-b.component';
import { of } from 'rxjs';
import { FormControl } from '@angular/forms';

export const Components = {
  A: FormTypeAComponent,
  B: FormTypeBComponent
}


@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})

export class DynamicComponentComponent implements OnInit, AfterViewInit {
  typeOption$ = of([{ text: 'Type A', value: 'A' }, { text: 'Type B', value: 'B' }]);
  selectValue;

  @ViewChild(DynamicComponentDirective, { static: true }) componentHost: DynamicComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.displayComponent('A');
  }

  displayComponent(type: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponent(type));
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    // (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getComponent(type) {
    return Components[type];
  }

}
