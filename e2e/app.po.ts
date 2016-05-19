export class SampleCliAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sample-cli-angular2-app h1')).getText();
  }
}
