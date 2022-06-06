import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './shared/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zopmata-Ashfaq';

  constructor(private webSocket: WebSocketService) {  }

  ngOnInit(): void {
    this.webSocket.listen('test event').subscribe((data) => {
      console.log(data);
      
    })
  }

    sendMsg(){
      console.log("yes working"); 
      this.webSocket.sendData({resId: 1, userId: 2});
    }

}
