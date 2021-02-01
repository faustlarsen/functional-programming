// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import Coin from './coin.js';




export const counter = (amount) => {
  if (amount/0.25 >=1) {
    const quarter = Math.floor(amount/0.25);//4.67 / 0.25 = 18.68 (18)
    return `${quarter}` + counter(amount - quarter * 0.25); //4.67 - 19*0.25 = 0.24
  } else if (amount/0.1 >=1) {
    const dime = Math.floor(amount/0.1); 
    return counter(amount - dime * 0.1);
  } else if (amount/0.05 >=1) {
    const nickel = Math.floor(amount/0.05);
    return counter(amount - nickel * 0.05);
  } else {
    const penny = amount; 
    return penny;
  }
};



export const coinCounter = (amount) => {
  const quarters = Math.floor(amount/.25);//4.67 / .25 = 18.68 (18)
  const dimes = Math.floor((amount - quarters*.25)/0.1); //4.67 - ((18*.25) = 4.50 / 10 = 0.17 = 1.7 = 1
  const nickels = Math.floor((amount - quarters*.25 - dimes*10)/.05); // 467-450-10 = 7
  const pennies = Math.floor((amount - quarters*.25 - dimes*10 - nickels*1));// 2
  //                           4.67  -     4.50     -   10   -   7 = 0  
  
  return `${quarters} quarters`, `${dimes} dimes`,  `${nickels} nickels`, `${pennies} pennies`;
};





