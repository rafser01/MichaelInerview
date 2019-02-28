function withoutVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  
  
  console.log(withoutVowels('I have never seen a thin person drinking Diet Coke.'));
  console.log(withoutVowels('We’re gonna build a wall!'));
  console.log(withoutVowels('Happy Thanksgiving to all--even the haters and losers!'));