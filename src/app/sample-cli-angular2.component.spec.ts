import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SampleCliAngular2AppComponent } from '../app/sample-cli-angular2.component';

beforeEachProviders(() => [SampleCliAngular2AppComponent]);

describe('App: SampleCliAngular2', () => {
  it('should create the app',
      inject([SampleCliAngular2AppComponent], (app: SampleCliAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sample-cli-angular2 works!\'',
      inject([SampleCliAngular2AppComponent], (app: SampleCliAngular2AppComponent) => {
    expect(app.title).toEqual('sample-cli-angular2 works!');
  }));
});
