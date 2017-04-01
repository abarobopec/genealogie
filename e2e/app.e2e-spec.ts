import { GenealogiePage } from './app.po';

describe('genealogie App', () => {
  let page: GenealogiePage;

  beforeEach(() => {
    page = new GenealogiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
