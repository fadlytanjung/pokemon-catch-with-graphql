import * as format from '../format';

describe('src/utils/format', () => {
  test('thousand', () => {
    const result1 = format.thousand(1000);
    expect(result1).toBe('1.000');

    const result2 = format.thousand();
    expect(result2).toBe('0');
  });
});
