function mergeArr(arr1,arr2)

{
let arr3=[]
         for(let i=0;i<arr1.length;i++)
         {
           arr3.push(arr1[i])       
         }
         for(let i=0;i<arr2.length;i++)
         {
                  arr3.push(arr2[i])
         }
         return arr3;
}



let arr1=[12,23,43,23,19,54]
console.log(arr1.length-1)
let arr2=[32,43,42,12,54,98,45,54]
console.log(mergeArr(arr1,arr2))

//reverse an array
function reverseArr(arr)
{
         let  arr2=[]
         for(let i=arr.length-1;i>=0;i--)
         {
                  arr2.push(arr[i])
         }
         return arr2;
}
let arr=[23,27,32,19,96]
console.log(reverseArr(arr))

