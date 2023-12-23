function rec(x){
console.warn(x)
if(x<10)
{
         rec(x+1);
}

}
let num=0;
rec(num);

//name print
function printname(name)
{
 console.log(name)
 if(name<5)
 {
         printname(name)
 }
}
let info="Akshat raj";
printname("akshat");
//factorial with loop
// function factorial(num)
// {
//          let result=1;
//   for(let i=1;i<=num;i++)
//   {
//          result=result*i
//   }
//   return result;
// }
// console.log(factorial(6))

//factorial using recursion
function factorial(num)
{
if(num==0)
{
 return 1;
}
return num*factorial(num-1);

}
console.log(num)
console.log(factorial(8))