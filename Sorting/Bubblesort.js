  let arr=[19,12,34,23,39,6,4,11]
  for(let i=0;i<arr.length;i++)
  {
         for(let j=0;j<arr.length;j++)
         {
                  if(arr[j]>arr[j+1])
                  {
                    let temp=arr[j];
                    console.log(temp)
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;       
                  }
         }
  }
  console.log(arr)