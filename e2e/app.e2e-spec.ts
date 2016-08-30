import { MyIndiaPage } from './app.po';

describe('my-india App', function() {
  let page: MyIndiaPage;

  beforeEach(() => {
    page = new MyIndiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
