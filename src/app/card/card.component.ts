import {Component, Input, OnInit} from "@angular/core";
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  interpolation: ['{{', '}}']
})

export class CardComponent implements OnInit{

  // @ts-ignore
  @Input() card: Card
  // @ts-ignore
  @Input() index: number

  title = 'My title'
  text = 'My simple text'

  cardDate: Date = new Date();

  textColor: string = '';

  disabled = false

  imageUrl = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'

  ngOnInit() {
    // setTimeout(() => {
    //   this.imageUrl = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
    //   this.disabled = true
    // }, 3000)
  }

  // getInfo() {
  //   return 'This is my info'
  // }

  changeTitle() {
    this.card.title = 'Title has been changed'
  }

  inputHandler(value: any) {
    this.card.title = value;
  }

  changeHandler() {
    console.log(this.card.title)
  }
}
