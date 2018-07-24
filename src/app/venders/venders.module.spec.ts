import { VendersModule } from './venders.module';

describe('VendersModule', () => {
  let vendersModule: VendersModule;

  beforeEach(() => {
    vendersModule = new VendersModule();
  });

  it('should create an instance', () => {
    expect(vendersModule).toBeTruthy();
  });
});
