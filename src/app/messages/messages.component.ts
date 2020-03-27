import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  onClearMessage() {
    const isConfirm = confirm(" Do you really want to clear ?");
    if (isConfirm) {
      this.messageService.clear()
    }
  }

}
