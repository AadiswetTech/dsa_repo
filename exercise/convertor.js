function numberToWords(number) {
         const ones = [
           "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
           "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
         ];
       
         const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
       
         const numWords = ["", "thousand", "million", "billion", "trillion"]; // Add more if needed
       
         let word = "";
         let wordIndex = 0;
       
         while (number > 0) {
           const chunk = number % 1000; // Get the last three digits
           number = Math.floor(number / 1000); // Remove the last three digits
       
           if (chunk > 0) {
             let chunkWords = "";
       
             if (chunk >= 100) {
               chunkWords += ones[Math.floor(chunk / 100)] + " hundred";
                chunk %= 100;
               if (chunk > 0) {
                 chunkWords += " and ";
               }
             }
       
             if (chunk >= 20) {
               chunkWords += tens[Math.floor(chunk / 10)];
               chunk %= 10;
               if (chunk > 0) {
                 chunkWords += " ";
               }
             }
       
             if (chunk > 0) {
               chunkWords += ones[chunk];
             }
       
             word = chunkWords + " " + numWords[wordIndex] + " " + word;
           }
       
           wordIndex++;
         }
       
         return word.trim();
       }
       
       const number = 29345;
       const words = numberToWords(number);
       console.log(words); // Output: "twenty nine thousand three hundred and forty five"
       