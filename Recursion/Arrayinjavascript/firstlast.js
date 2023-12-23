function occurence(arr,target)
{
         let start=0;
         let end=arr.length-1;
         let mid=parseInt(start+(end-start)/2);
         let ans=-1;
         while(start<=end)
         {
                  if(arr[mid]==target)
                  {
                           ans=mid;
                           end=mid-1;
                  }
                  else if(target>arr[mid])
                  {
                           start=end+1;
                  }
                  else if(target<arr[mid])
                  {
                           end=mid-1;
                  }
         }
         return ans
}
let arr=[4,6,7,9,9,9,11,13]
let target=9
console.log(occurence(arr,target))