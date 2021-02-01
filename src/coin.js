export default class Coin{
  constructor(amount) {
    this.amount = amount;
  }
  changer(amount){

    const coins=[0.01, 0.05, 0.1, 0.25];
    var changes=[];
    var coinsReminder=0;
    var currentCoin=0;
    
  
    //recursive function
    var countCoin=(index, value)=>{ //index=3, value=4.67
      if (index!=0){
        currentCoin=coins[index]; //0.25
        changes.push(Math.floor(value/currentCoin));//18
        coinsReminder=value%currentCoin;//0.17
        countCoin(index-1, coinsReminder);
      } else {
        currentCoin=coins[index]; //0.25
        changes.push(Math.ceil(value/currentCoin));
      }
    };
    countCoin(coins.length-1, amount);
    return changes;//[18, 1, 1, 2]
  }
}