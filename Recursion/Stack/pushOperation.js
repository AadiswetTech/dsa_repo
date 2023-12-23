let data=[];
let currentSize=data.length;
let max=6;
function Push(newValue)
{
         if(currentSize>=max)
         {
                  console.log('stack is full cannot fill')
         }
         data[currentSize]=newValue;
         currentSize+=1;
         
return newValue;
}

function pop()
{
   currentSize-=1;
   data.length=currentSize     

  
}
console.log(Push(3))
console.log(Push(4))

console.log(Push(9))
console.log(Push(3))
console.log(Push(2))
pop()