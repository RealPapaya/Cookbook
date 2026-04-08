import { describe, expect, it } from 'vitest';
import { estimateIngredientCalories, estimateScaledTime, formatQty, scaleQty } from '../../domain/helpers/servings';

describe('servings helpers', () => {
  it('scales quantity correctly', () => {
    expect(scaleQty(100, 2, 3)).toBe(150);
  });

  it('formats quantity with unit note', () => {
    expect(formatQty(10, 'ml', 'optional')).toBe('10 ml (optional)');
  });

  it('estimates calories from ingredient nutrition', () => {
    const calories = estimateIngredientCalories(
      {
        ingredient_id: 'udon',
        variant_id: 'udon--raw',
        qty: 100,
        unit: 'g',
        scalable: true,
        optional: false,
        is_seasoning: false
      },
      1,
      1
    );

    expect(calories).toBeGreaterThan(100);
  });

  it('estimates scaled time', () => {
    const scaled = estimateScaledTime('20 min', 2);
    expect(scaled).toBeGreaterThan(20);
  });
});
