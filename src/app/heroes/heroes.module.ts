import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HerosRoutingModule } from './heros-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HerosRoutingModule
  ],
  declarations:[HeroesComponent]
})
export class HeroesModule { }
