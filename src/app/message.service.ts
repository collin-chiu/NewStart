import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  clearTop4Messages() {
    this.messages.splice(0,4);
  }

  genMessages(){
    this.messages = [...this.messages,...['a','b','c','d','e']];
  }
}
