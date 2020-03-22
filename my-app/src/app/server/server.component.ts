import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverInfo = {id: 10, status: 'offline'}

  constructor(){
    this.serverInfo.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverInfo.status
  }

  getColor() {
    return this.serverInfo.status === 'online' ? 'green' : 'red';
  }

}
