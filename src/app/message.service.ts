import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Set<string> = new Set<string>();

  constructor() {
  }

  add(message: string) {
    this.messages.add(message);
  }

  clear() {
    this.messages = new Set<string>();
  }

}
