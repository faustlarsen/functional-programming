import Coin from '../src/coin.js';

describe('Coin', () => {
  let amount;
  test('should return proper stuff', () => {
    amount=4.67;
    changer(amount);
    expect(changes).toEqual([18, 1, 1, 2]);
  });
});



}