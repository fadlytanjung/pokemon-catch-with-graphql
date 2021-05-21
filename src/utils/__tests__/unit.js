import * as unit from '../unit';

describe('src/utils/unit', () => {
  test('autoPx', () => {
    window.innerWidth = 1440;
    const result1 = unit.autoPx(16);
    expect(result1).toBe(16);

    window.innerWidth = 360;
    const result2 = unit.autoPx(16);
    expect(result2).toBe(16);
  });

  test('remToPx', () => {
    window.innerWidth = 1440;
    const result1 = unit.remToPx(1);
    expect(result1).toBe(16);

    window.innerWidth = 360;
    const result2 = unit.remToPx(1);
    expect(result2).toBe(16);
  });
});
