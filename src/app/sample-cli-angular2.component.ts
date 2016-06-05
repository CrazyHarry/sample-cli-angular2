import { Component } from '@angular/core';
import { FirstComponent } from './first';
import { SecondComponent } from './second';
//import { ThirdComponent } from './third';
import { RouteConfig , ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
  moduleId: module.id,
  selector: 'sample-cli-angular2-app',
  templateUrl: 'sample-cli-angular2.component.html',
  styleUrls: ['sample-cli-angular2.component.css'],
  directives:[ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/first', component: FirstComponent, name: 'First'},
  {path:'/second', component: SecondComponent, name: 'Second'},
  //{path:'/third', component: ThirdComponent, name: 'Third'}
  ])
export class SampleCliAngular2AppComponent {
  title = 'Welcome to sample-cli-angular2';
  name : string ;
  cities : string[] ;

  constructor(){
    this.name = "My name is Sauleras and I will show the most important parts of Angular 2"
    this.cities = ['sp','mg'];
  }
}
