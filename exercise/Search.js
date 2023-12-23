// function linSearch(element,target)
// {
//          for(let i=0;i<element.length;i++)
//          {
//              if(element[i]===target)
//              {
//                   console.log(element[i])
//                   return i;
//              }     
//          }
// }
// let arr=[2,4,6,7,8]
// let tar=4
// console.log(linSearch(arr,tar))

//binary search

function binSearch(num,target)
{
let start=0;
let end=num.length-1;
while(start<=end)
{
         let mid=Math.floor(start+(end-start)/2)
         console.log(mid)
         if(target===num[mid])
         {
                  return mid
         }
         else if(target<num[mid])
         {
                  end=mid-1;
         }
         else 
         {
                  start=mid+1
         }
}
return mid;
}
let element=[12,14,18,24,26,40]
target=26
console.log(binSearch(element,target))
