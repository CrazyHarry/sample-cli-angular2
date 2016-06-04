import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
//import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
  //providers: [MdIconRegistry]
  })
export class FirstComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
