const numberinword = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred",
  1000: "thousand",
  100000: "lakh",
};

const convertToWord = (number) => {
  if (number === 0) {
    return "zero";
  }

  let words = "";
  const divisor = [100000, 1000, 100, 10, 1];
  let remainder = number;
 

  for (let i = 0; i < divisor.length-1; i++)
   {
   
    const quotient = parseInt(remainder / divisor[i]);
  
    console.log(quotient)
    if(quotient>0)
    {
      words+=numberinword[quotient] +" "+numberinword[divisor[0]]
      let remain=remainder%divisor[0];
      console.log(remain)
      if(remain>1000)
      {
        let div=parseInt(remain/1000)
        console.log(div)
        if(div>20)
        {
         div=parseInt(div/10)

          remain= div%10
          console.log(remain)
          div =div*10
          
          console.log(div)
          words += " "+ numberinword[div]+" "+numberinword[remain]+" " +numberinword[1000]
        }
        {
  
        }
      } 
    }
    return words
  }
 
}
console.log(convertToWord(234020))
 