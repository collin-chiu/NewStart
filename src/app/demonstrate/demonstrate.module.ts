import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResuableFormComponent } from './form/resuable-form/resuable-form.component';
import { FormTypeAComponent } from './form/form-type-a/form-type-a.component';
import { FormTypeBComponent } from './form/form-type-b/form-type-b.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DynamicComponentDirective } from './dynamic-component/dynamic-component.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemonstrateRoutingModule } from './demonstrate-routing.module';

@NgModule({
  declarations: [ResuableFormComponent, DynamicComponentComponent, FormTypeAComponent, FormTypeBComponent, DynamicComponentDirective],
  imports: [
    CommonModule,
    DemonstrateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    FormTypeAComponent,
    FormTypeBComponent
  ],
  exports: [DynamicComponentComponent]
})
export class DemonstrateModule {

}
