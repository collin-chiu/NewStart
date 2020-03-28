import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';

export class Link {
  heroes: string;
  dashboard: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  link = new Link();
  get heroesCount$() {
    return this.heroService.getHeroesCount$();
  }
  constructor(
    private messageService: MessageService,
    private heroService: HeroService,
    private http: HttpClient
  ) { this.getJsonFile() }

  onClearTop4Messages() {
    this.messageService.clearTop4Messages();
  }

  onGenMessages() {
    this.messageService.genMessages();
  }

  getJsonFile() {
    this.http.get('assets/data/dashboard-link.json').subscribe((res:Link) => this.link = res);
  }

}
