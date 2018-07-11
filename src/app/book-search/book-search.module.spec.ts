import { BookSearchModule } from './book-search.module';

describe('BookSearchModule', () => {
  let bookSearchModule: BookSearchModule;

  beforeEach(() => {
    bookSearchModule = new BookSearchModule();
  });

  it('should create an instance', () => {
    expect(bookSearchModule).toBeTruthy();
  });
});
