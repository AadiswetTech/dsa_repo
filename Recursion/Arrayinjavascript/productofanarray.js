const product=(num)=>
{      
const n=num.length;
const left=Array(n).fill(0);
const right=Array(n).fill(0);
const output=Array(n).fill(0);
 
 left[0]=num[0];
 right[n-1]=num[n-1]
 //itersting for left multiple
 for(let i=1;i<n;i++)
 {
         left[i]=left[i-1]*num[i]
 }
 for(let i=n-2;i>0;i--)
 {
    right[i]=right[i+1]*num[i]
 }
 output[0]=right[1];
 output[n-1]=left[n-2]
 for(let i=1;i<n-1;i++)
 {
         output[i]=left[i-1]*right[i+1]
 }
 console.log(right)
 console.log(left)
return output

}
let Arr=[2,3,6,9,7]
console.log(product(Arr))