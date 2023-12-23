class Node
{
         constructor(data)
         {
                  this.data=data;
                  this.next=null;
         }
}
//this is linkedlist class initialize with this.head=null;
class LinkedList
{
 constructor()
 {
    this.head=null;     
 }

//method for add in first
addFirst(data)
{
   const newNode=new Node(data)
   newNode.next=this.head;
   this.head=newNode;      
}
addLast(data)
{
         const newNode=new Node(data);
         
                  if(!this.head)
                  {
                           this.head=newNode;

                  }
                  let current=this.head;
                  while(current.next)
                  {
                           current=current.next;
                  }
                  current.next=newNode;
         }
         //size
         size()
         {
            let count=0;
            let current=this.head ;
            while(current.next)
            {
                  count++
                  current=current.next;
            }
           return count;
              
         }
addAt(index,data)
{
     if(index<0 || index>this.size())
     {
       console.error("invalid index");
       return;
     }

     const newNode=new Node(data);
     if(index===0)
     {
         newNode.next=this.head;
         this.head=newNode;
         return
     }
   let current=this.head;
   for(let i=0; i<index-1;i++)
   {
         current=current.next
   }  
}
        
}


