let arr1=[1,3,6,14,21,34,67,73];
let arr2=[2,5,8,15,36,58];
let  arr3=[];
let d1=0;
let d2=0;
let d3=0;
while(d1<arr1.length && d2<arr2.length)
{
         if(arr1[d1]<arr2[d2])
                  {
                   arr3[d3]=arr1[d1];
                   d1++;
                  }
                  else
                  {
                   arr3[d3]=arr2[d2];
                   d2++;
                  }
                             d3++; 

}
while(d1<arr1.length)
{
         if(arr1[d1]>arr2[d2])
 arr3[d3]=arr1[d1]
 d1++;
}
console.log(arr3)