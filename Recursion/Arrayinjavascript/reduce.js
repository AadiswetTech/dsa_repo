let arr=[10,13,17,28,22];
function findSum(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
         sum= sum+arr[i]
    }   
    return sum;  
}
console.log(findSum(arr))
//find maximum value;
function findMax(arr)
{
    let max=0;
    for(let i=0;i<arr.length;i++)
    {
         if(arr[i]>max)
         {
                  max=arr[i]
         }
    }
    return max;

} 
console.log(findMax(arr));
//find All even number
function findEven(arr)
{
         let even=[]
         for(let i=0;i<arr.length;i++)
         {
             if(arr[i]%2==0)
             {
                  even.push(arr[i])
             }     
         }
         return even
}
console.log(findEven(arr))

//doing above problem in reduce
let element=[12,32,18,23,53,49]
 const AddAll=element.reduce((acc,curr)=>
 {
   acc=acc+curr
   return acc
 },0)
 console.log(AddAll)

 //find maximum through reduce
 const max=element.reduce((max,curr)=>
 {
      if(curr>max)
      {
         max=curr
         
      } 
      return max;  
 },0)
 console.log(max)