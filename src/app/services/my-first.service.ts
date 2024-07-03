import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];
  constructor() {
    this.init();
  }

  init(): void{
    this.insert({
      name: "zouhir",
      email: "zouhir@gmail.com",
      message:"hello zouhir"
    });
    this.insert({
      name: "anass",
      email: "anass@gmail.com",
      message:"hello anass"
    });
    this.insert({
      name: "anwar",
      email: "anwar@gmail.com",
      message:"hello anwar"
    });
  }

  insert(message: {name: string, email: string, message: string}):void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void{
    this.messages.splice(index, 1);
  }
}
