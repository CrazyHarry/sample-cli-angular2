import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SampleCliAngular2AppComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'


if (environment.production) {
  enableProdMode();
}

bootstrap(SampleCliAngular2AppComponent,[ROUTER_PROVIDERS]);
