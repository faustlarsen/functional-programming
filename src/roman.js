export default class Roman{

  var arabicToRoman=(number)=> {
    const alphabet = [
      {arabic: 1000, roman: "M"},
      {arabic: 900, roman: "CM"},
      {arabic: 500, roman: "D"},
      {arabic: 400, roman: "CD"},
      {arabic: 100, roman: "C"},
      {arabic: 90, roman: "XC"},
      {arabic: 50, roman: "L"},
      {arabic: 40, roman: "XL"},
      {arabic: 10, roman: "X"},
      {arabic: 9, roman: "IX"},
      {arabic: 5, roman: "V"},
      {arabic: 4, roman: "IV"},
      {arabic: 1, roman: "I"} 
    ];
    //1002
    for (let i=0; i<alphabet.length; i++){
      if (number<1){
        return "";
      } else if (number>=alphabet[i].arabic){
        return alphabet[i].roman + arabicToRoman(number-alphabet[i].arabic);
      } 
    }
  }
  arabicToRoman(1002);
}
