let money=100;
let totalApple=0
function buyApple(x)
{
         if(x>0)
         {
                  console.log("i have" ,x ,"and", totalApple,"Apple")
                  buyMore(x)
                 

         }
         else
         {
           console.log("not enough left", "have",totalApple,"apple")
         }
}
function buyMore(x)
{
         totalApple++
         buyApple(x-10)
}
buyApple(money)