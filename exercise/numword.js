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
  10000: "ten thousand",
  100000: "lakh",
};

const convertToword=(number)=>
{
         if(number===0)
         {
                  return "zero"
         }
let words="";

if(number>1000 && number<99999)
{
         let quotient=parseInt(number/1000);
         console.log(quotient)
         remainder=number%1000;
         console.log(remainder);
         if (quotient>0)
         {
             let divisor= parseInt(quotient/10)*10;
             console.log(divisor)  
             let remainder= quotient%10;
             words+= numberinword[divisor]+ " "+ numberinword[remainder]
            
             console.log(remainder)
         }
         words+=" "+ numberinword[1000]+ " "
         if(remainder>100)
         {
                  let quotient=parseInt(remainder/100)
                  console.log(quotient);
                  remainder= remainder%100;
                  console.log(remainder)                
                  words+=numberinword[quotient]+" "+numberinword[100]+ " "
         }
         if(remainder >10)
         {
           quotient=parseInt(remainder/10)*10 
          console.log(quotient)
          remainder=remainder%10
          console.log(remainder)
          words+= +" "+numberinword[quotient] + " " + " "+ numberinword[remainder] 
         } 

}
return words

}
console.log(convertToword(40788))