import { WebSitePage } from './app.po';

describe('web-site App', () => {
  let page: WebSitePage;

  beforeEach(() => {
    page =  WebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
