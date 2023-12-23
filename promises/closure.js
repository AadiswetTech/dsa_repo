var sum=function(a)
{
         console.log("live viewwer"+a);
         var c=4;
         return function(b)
         {
          return a+b+c;
         }
}

var store=sum(2);//calling
console.log(store(5))

const outer=(outervalue)=>
{
 
}