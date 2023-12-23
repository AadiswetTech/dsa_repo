function recFactorial(num)
{
         if(num===0)
         {
                  return 1;
         }
         return num*recFactorial(num-1)
}
console.log(recFactorial(4))