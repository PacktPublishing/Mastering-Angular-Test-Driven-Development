import { PercentPipe } from './percent.pipe';

describe('PercentPipe', () => {
  it('create an instance', () => {
    const pipe = new PercentPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format a positive number to a percentage string', () => {
    const input = 123;
    const output = new PercentPipe().transform(input);
    expect(output).toBe('12300%');
  });

  it('should format a negative number to a percentage string', () => {
    const input = -123;
    const output = new PercentPipe().transform(input);
    expect(output).toBe('-12300%');
  });

  it('should format a decimal number to a percentage string', () => {
    const input = 123.45;
    const output = new PercentPipe().transform(input);
    expect(output).toBe('12345%');
  });

  it('should format a zero number to a percentage string', () => {
    const input = 0;
    const output = new PercentPipe().transform(input);
    expect(output).toBe('0%');
  });

  it('should return an Error when the value is not a number NaN', () => {
    const input = NaN;
    const output = new PercentPipe().transform(input);
    expect(output).toBe('Error');
  });
});
