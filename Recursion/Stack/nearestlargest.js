class Largest
{
         item=[];
         curSize
         maxsize;
       

         constructor(size)
         {
             this.curSize=this.item.length;
             this.maxsize=size;   
             
         }
   push(newVal)
   {
         this.item[this.curSize]=newVal;
         this.curSize++
   }
   pop()
   {
         this.curSize -=1;
         this.item.length=this.curSize
   }

   display()
   {
         for(const element of this.item)
         {
                  console.log(element)
         }
   }
  findnearLargest(arr)
  {
         
    for(const i of arr)
    {
         console.log(i)
    }
    
  }
  
}
stk1=new Largest(8)

stk1.push(12)
stk1.push(42)
stk1.push(52)
stk1.push(27)
stk1.push(18)
stk1.push(45)
stk1.push(23)
stk1.push(13)
stk1.display()
