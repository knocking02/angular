import { MovieSearchModule } from './movie-search.module';

describe('MovieSearchModule', () => {
  let movieSearchModule: MovieSearchModule;

  beforeEach(() => {
    movieSearchModule = new MovieSearchModule();
  });

  it('should create an instance', () => {
    expect(movieSearchModule).toBeTruthy();
  });
});
