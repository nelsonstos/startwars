import { add } from '../src/math';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5); // Verifica que 2 + 3 sea igual a 5
  });

  it('should handle negative numbers', () => {
    const result = add(-2, -3);
    expect(result).toBe(-5); // Verifica que -2 + (-3) sea igual a -5
  });

  it('should return 0 when adding 0', () => {
    const result = add(0, 0);
    expect(result).toBe(0); // Verifica que 0 + 0 sea igual a 0
  });
});
