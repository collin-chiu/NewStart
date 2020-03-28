import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  get heroesCount$(){
    return this.heroService.getHeroesCount$();
  }
  constructor(
    private messageService: MessageService,
    private heroService: HeroService
    ) { }

  onClearTop4Messages() {
    this.messageService.clearTop4Messages();
  }

  onGenMessages(){
    this.messageService.genMessages();
  }

}
