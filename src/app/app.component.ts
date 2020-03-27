import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private messageService: MessageService) { }

  onClearTop4Messages() {
    this.messageService.clearTop4Messages();
  }

  onGenMessages(){
    this.messageService.genMessages();
  }

}
