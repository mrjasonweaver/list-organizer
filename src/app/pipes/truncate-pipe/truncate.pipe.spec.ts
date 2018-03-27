import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {

  const pipe = new TruncatePipe();

  // truncate start
  it('transforms "123456789" to "12345678..."', () => {
    expect(pipe.transform('123456789', 'start')).toBe('12345678...');
  });
});
