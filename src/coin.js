var changer = function(amount){
  
  const coins=[0.01, 0.05, 0.1, 0.25];
  const changes=[];
  //recursive function
  var countCoin=(index, value)=>{ //index=3, value=4.67
//4.67
    if (index!=0){
    let currentCoin=coins[index]; //0.25
    changes.push(Math.floor(value/currentCoin));//18
    coinsReminder=Math.ceil(value%currentCoin);//0.17
    countCoin(index-1, coinsReminder);
    } else
    {
      let currentCoin=coins[index]; //0.25
      changes.push(Math.floor(value/currentCoin));
    }
  }
  
  countCoin(coins.length-1, amount);
  return changes;
};
changer(4.67);




const quaters=amount/quater;//18    4.5 floor  4.67/0.25=18.68 18*0.25=4.5
const quatersReminder=amount%quater;//0.17   4.67-4.5 17 
const dimes=(quatersReminder)/dime;//0.17/0.1=1.69=1 4.6 floor
const dimesRemainder=quatersReminder%dime; //0.07
const nickels=dimesRemainder/nickel;//1.39 4.65 floor
const nickelsReminder=dimesRemainder%nickel;//0.02
const pennies=nickelsReminder/penny; //2 4.67 top Math.ceil()

for(let i=0; i<array.length;i++){
  countCoin(i);,
}
x/quater
x%quater
  countCoin(quater)

}
}