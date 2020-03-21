import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverInfo = {id: 10, status: 'offline'}

  getServerStatus() {
    return this.serverInfo.status
  }

}
