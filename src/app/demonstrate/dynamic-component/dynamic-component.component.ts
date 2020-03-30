import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { FormTypeAComponent } from '../form/form-type-a/form-type-a.component';
import { FormTypeBComponent } from '../form/form-type-b/form-type-b.component';

export const Components = {
  A: FormTypeAComponent,
  B: FormTypeBComponent
}

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})

export class DynamicComponentComponent implements OnInit {
  typeOption = [{ text: 'Type A', value: 'A' }, { text: 'Type B', value: 'B' }];
  selectValue = 'A';

  @ViewChild(DynamicComponentDirective, { static: true }) componentHost: DynamicComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    setTimeout(() => {
      this.displayComponent(this.selectValue);
    })
  }

  displayComponent(type: string) {
    if (type) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponent(type));
      const viewContainerRef = this.componentHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
    }
  }

  getComponent(type) {
    return Components[type];
  }

}
