import { NegotiumAlbumAppPage } from './app.po';

describe('negotium-album-app App', () => {
  let page: NegotiumAlbumAppPage;

  beforeEach(() => {
    page = new NegotiumAlbumAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
