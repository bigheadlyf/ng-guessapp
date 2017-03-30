import { GuessappPage } from './app.po';

describe('guessapp App', () => {
  let page: GuessappPage;

  beforeEach(() => {
    page = new GuessappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
