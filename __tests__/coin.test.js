import Coin from '../src/coin.js';

describe('Coin', () => {
  let amount;
  let changes;
  test('should return proper stuff', () => {
    amount=4.67;
    changes=[];
    let myCoin = new Coin();
    changes=myCoin.changer(amount);
    expect(changes).toEqual([18, 1, 1, 2]);
  });
});



