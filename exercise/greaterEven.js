 
 function evenplaceGreater(Arr,size)
 {
     for(let i=0;i<size-1;i++)
     {
         if(i%2===0)
         {
                  if(Arr[i]>Arr[i+1])
                  {
                     [Arr[i],Arr[i+1]]=[(Arr[i+1],Arr[i])]      
                  }
         }
         if(i%2 !== 0)
         {
               if(Arr[i]<Arr[i+1])
               {
                  [Arr[i],Arr[i+1]]=[Arr[i+1],Arr[i]]
               }    
         }
     }     
 }

