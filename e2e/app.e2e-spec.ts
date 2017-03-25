import { AnthonyCodesPage } from './app.po';

describe('anthony-codes App', () => {
  let page: AnthonyCodesPage;

  beforeEach(() => {
    page = new AnthonyCodesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ac works!');
  });
});
