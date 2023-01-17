import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(): void {

    console.log("Hello Word Presby");
    let numero = 10;
    //debugger;
    numero = 50;
    numero = 0;
    console.log("EL valor que se manda a llamar es "+numero);
      
  }

}
