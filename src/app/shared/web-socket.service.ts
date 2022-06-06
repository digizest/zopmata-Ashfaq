import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: any;
  readonly url: string = 'http://localhost:8080'

  constructor() { 
    this.socket = io(this.url);
   }


  listen(eventName: string){
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data: any) => {
        Subscriber.next(data)
      })
    });
  }

  emit(eventName: string,data: any){
    this.socket.emit(eventName, data);
  }

  // for posting data
  sendData(values: any){
    console.log(values);
    this.socket.emit('my message', values);
  }
}
