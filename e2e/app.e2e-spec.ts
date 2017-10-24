import { ManarTravelPage } from './app.po';

describe('manar-travel App', () => {
  let page: ManarTravelPage;

  beforeEach(() => {
    page = new ManarTravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
