import {Component} from '@angular/core';

export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true
  cards: Card[] = [
    {
      title: 'Card 1',
      text: 'This is the first card'
    },
    {
      title: 'Card 2',
      text: 'This is the second card'
    },
    {
      title: 'Card 3',
      text: 'This is the third card'
    }
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
