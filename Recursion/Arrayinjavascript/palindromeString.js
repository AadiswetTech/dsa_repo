//check LEVEL is Palindrom or not 

function PalindromeString(word)
{
         let start=0;
        let end=word.length-1;
        console.log(end)
        let result=true;
        for(let i=0;i<word.length-1;i++)
        {
         if(word[start]!=word[end])
         {
                  result= false;
                 
         }
         start++;
         end--;
         
       
        }
        return result;
         
}
console.log(PalindromeString("level"))

//with while loop
