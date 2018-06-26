import { BackgroundImageModule } from './background-image.module';

describe('BackgroundImageModule', () => {
  let backgroundImageModule: BackgroundImageModule;

  beforeEach(() => {
    backgroundImageModule = new BackgroundImageModule();
  });

  it('should create an instance', () => {
    expect(backgroundImageModule).toBeTruthy();
  });
});
