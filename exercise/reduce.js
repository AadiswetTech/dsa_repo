let arr=[4,3,13,75,2,12];
let sum=arr.reduce((acc,current)=>
{
 return acc +current;

})
// console.log(sum)
var monthly=[
         {month:"january",expense:1200},
{month:"january",expense:1200},
{month:"january",expense:1200},
{month:"january",expense:1200},

]
const Expense=[12,220,30,45,180];
const Add=Expense.reduce((acc,curr)=>
{
   return acc+curr
},
)
console.log(Add)

//find average through reduce
const dataset=[12,14,16,18,20,22,24];
let size=dataset.length;
let average=dataset.reduce((acc,curr,index,array)=>
{
     let total=    acc += curr; 
     
     if(index ===dataset.length-1)
     {
         return Math.floor(total/size)
     }
  return total 
}

)

console.log(size)
console.log(average)
