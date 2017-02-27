import { AngularRouting2Page } from './app.po';

describe('angular-routing App', function() {
  let page: AngularRouting2Page;

  beforeEach(() => {
    page = new AngularRouting2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
