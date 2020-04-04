import { Component, OnInit, Output, Input, EventEmitter, DoCheck, OnChanges, SimpleChanges} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {interval} from 'rxjs'

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // I/O
  @Output() numberUpdate = new EventEmitter<number>();
  //Local Properties
  number: number = 0;
  timerId: any;

  constructor() { }

  ngOnInit(): void {}

  startEmit(): void {
    console.log('emit')
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.numberUpdate.emit(this.number);
      this.number += 1;
    }, 1000)
  }

  stopEmit(): void {
    clearInterval(this.timerId);
  }

}
