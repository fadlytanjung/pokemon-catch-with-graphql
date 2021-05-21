import * as validation from '../validation';

describe('src/utils/validation', () => {
  test('isEmail', () => {
    const result = validation.isEmail('tes@telkom.co.id');
    expect(result).toBe(true);
  });

  test('isPassword', () => {
    const result = validation.isPassword('Telkom12345');
    expect(result).toBe(true);
  });

  test('isPhone', () => {
    const result = validation.isPhone('+62812345678');
    expect(result).toBe(true);
  });

  test('isKTP', () => {
    const result = validation.isKTP('3171074805841235');
    expect(result).toBe(true);
  });

  test('isSIM', () => {
    const result = validation.isSIM('139485738912');
    expect(result).toBe(true);
  });

  test('isPassport', () => {
    const result = validation.isPassport('AA1234567');
    expect(result).toBe(true);
  });
});
