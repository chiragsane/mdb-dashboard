import { MdbDashboardPage } from './app.po';

describe('mdb-dashboard App', function() {
  let page: MdbDashboardPage;

  beforeEach(() => {
    page = new MdbDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
