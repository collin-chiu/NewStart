import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/ci-dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'ci-heroes',loadChildren: "./heroes/heroes.module#HeroesModule"},
  { path: 'ci-dashboard',loadChildren: "./dashboard/dashboard.module#DashboardModule"}
  // { path: 'ci-dashboard', component: DashboardComponent },
  // { path: 'ci-heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
