import { Component } from '@angular/core';
import { GdpComponent } from './gdp';
import { FirstComponent } from './first';
import { RouteConfig , ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
  moduleId: module.id,
  selector: 'sample-cli-angular2-app',
  templateUrl: 'sample-cli-angular2.component.html',
  styleUrls: ['sample-cli-angular2.component.css'],
  directives:[ROUTER_DIRECTIVES]
})

@RouteConfig([
  {}
  ])
export class SampleCliAngular2AppComponent {
  title = 'sample-cli-angular2 works!';
  name : string ;
  cities : string[] ;

  constructor(){
    this.name = "My name is Sauleras"
    this.cities = ['sp','mg'];
  }
}
