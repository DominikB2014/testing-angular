import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleParagraph = false;
  clicksArray = [];
  counter = 0;

  onClick(){
    this.counter++;
    this.visibleParagraph = !this.visibleParagraph;
    this.clicksArray.push(this.counter);
  }

  getColor(click: Number) {
    return click > 4 ? 'blue' : 'white';
  }

  isWhite(click: Number) {
    return click > 4;
  }

}
