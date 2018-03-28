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

  // setting truncate value length
  it('transforms "123456789" to "1234..."', () => {
    expect(pipe.transform('123456789', 'end', 4)).toBe('1234...');
  });

  // setting truncate value length with odd number
  it('transforms "123456789" to "12...89"', () => {
    expect(pipe.transform('123456789', 'middle', 5)).toBe('12...89');
  });

  // don't truncate if value is < 9
  it('returns orignal value', () => {
    expect(pipe.transform('12345678')).toBe('12345678');
  });

  // don't truncate if value is equal to or less than the set truncate length value
  it('returns orignal value when truncate length is set', () => {
    expect(pipe.transform('1234567', 'start', 7)).toBe('1234567');
  });

  // Trimmed values to account for whitespace
  it('transforms "Aug 14, 2017" to "Aug...2017"', () => {
    expect(pipe.transform('Aug 14, 2017', 'middle', 8)).toBe('Aug...2017');
  });

});
