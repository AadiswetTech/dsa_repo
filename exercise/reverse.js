// const reversed=(number)=>
// {
//     return Number(number.toString().split(" ").reverse().join(""))
// }
// console.log(reversed(2398))

const reverseNumber=(number)=>
{
 let rev=0;
 while(number>0)
 {

 let rem=number%10;
 
 rev=rev*10+rem;
 
 number=parseInt(number/10);
 console.log(number)

 }
 return rev
}
console.log(reverseNumber(345))