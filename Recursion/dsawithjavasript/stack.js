let data=[];
let currentSize=data.length;
let max=7;

function push()
{
         let newValue=document.getElementById("newEl").value;
         if(currentSize>=max)
         {
                  console.log("stack is full can't add"+newValue)
         }
         else
         {

         data[currentSize]=newValue;
         currentSize +=1;
         document.getElementById('newEl').value='';
         console.log("element added")
}
}
function pop()
{
         if(currentSize>0)
         {
                  currentSize -=1;
                  data.length=currentSize;
         }
         else{
                  alert("stack is already empty")
         }
}
function display()
{
         for(let i=0;i<=currentSize-1;i++)
         {
                  console.log("stack index is",+i, "and value is",data[i])
         }
}