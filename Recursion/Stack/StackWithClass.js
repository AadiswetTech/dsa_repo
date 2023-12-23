class Stack
{
         item=[];
         currentSize;
         maxSize;
         constructor(size)
         {
                  this.currentSize=this.item.length;
                  this.maxSize=size;
         }
         push(newVal)
         {
                  if(this.currentSize>=this.maxSize)
                  {
                           alert("stack is full")

                  }
                  else{
                           this.item[this.currentSize]=newVal;
                           this.currentSize++;
                  }
         }
pop(){
        this.currentSize -=1
         this.item.length=this.currentSize;
}
display()








{
         console.log(this.item)
}
}
st1=new Stack(5);
st1.push(20)
st1.push(40)
st1.push(38)
st1.push(34)
st1.pop()
st1.display()