import { SampleCliAngular2Page } from './app.po';

describe('sample-cli-angular2 App', function() {
  let page: SampleCliAngular2Page;

  beforeEach(() => {
    page = new SampleCliAngular2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sample-cli-angular2 works!');
  });
});
