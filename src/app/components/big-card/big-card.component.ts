import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "https://www.zup.com.br/wp-content/uploads/2021/03/5e32dc5538c14b0d4b28f87f_imagens-angular3-1024x677.png"
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
