import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {

  const pipe = new TruncatePipe();

  // truncate start
  it('transforms "123456789" to "...23456789"', () => {
    expect(pipe.transform('123456789', 'start')).toBe('...23456789');
  });

  // truncate middle
  it('transforms "123456789" to "1234...6789"', () => {
    expect(pipe.transform('123456789', 'middle')).toBe('1234...6789');
  });

  // truncate end
  it('transforms "123456789" to "12345678..."', () => {
    expect(pipe.transform('123456789', 'end')).toBe('12345678...');
  });
});
