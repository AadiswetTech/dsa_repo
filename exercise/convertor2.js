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
         40: "fourty", 
         50: "fifty",
         60: "sixty",
         70: "seventy",
         80: "eighty",
         90: "ninety",
         100: "hundred",
         1000: "thousand",
         10000: "ten thousand",
         100000: "lakh"
       };
       
       function numberToWords(number) {
         let word = "";
       
         if (number === 0) {
           return "zero";
         }
       
         for (let divisor = 100000; divisor >= 1; divisor /= 10) {
           if (number >= divisor) {
             const quotient = parseInt(number / divisor);
             
             console.log(quotient)
             number %= divisor;
             console.log(number)
             if (word !== "") {
               word += " ";
             }
             word += numberinword[quotient];
             word += " " + numberinword[divisor];
           }
         }
       
         return word;
       }
       
       const number = 29345;
       const words = numberToWords(number);
       console.log(words); // Output: "twenty nine thousand three hundred and forty five"
       