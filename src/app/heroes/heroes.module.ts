import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HerosRoutingModule } from './heros-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HerosRoutingModule
  ],
  declarations:[HeroesComponent]
})
export class HeroesModule { }
