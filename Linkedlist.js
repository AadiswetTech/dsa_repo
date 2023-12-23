class Node 
{
  constructor(data)
  {
    this.data=data;
    this.next=null;
  }
}
class LinkedList
{
  constructor()
  {
    this.head=null;
  }

  addFirst(data)
  {
const newNode=new Node(data)
newNode.next=this.head;
this.head=newNode
  }

  addLast(data)
  {
    const newNode=new Node(data)
    {
      if(!this.head)
      {
        this.head=newNode;
        return;
      }
      let current=this.head;
      while(current.next)
      {
        current=current.next;
      }
      current.next=newNode;
    }
  }
  
    //add something to certain index

    //let find the size first 
    size()
    {
      let count=0;
      let current=head;
      while(current.next)
      {
        count++;
        current=current.next
      }
      
    }
    addAt(index,data)
    {
    if(index<0 || index>size())
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
    //traverse through linked list

    let current=this.head;
    for(let index=0;i<index-1;i++)
    {
      current=current.next
    }
    newNode.next=current.next;
    current.next=newNode
    }

    removeTop()
    {
      if(!this.head)
      {
        return
      }
      this.head=this.head.next;
    }
    removeLast()
    {
      let current=this.head;
      while(current.next.next)
      {
       current=current.next
      }
      current.next=null
    }
    //rremove at
    removeAt(index)
    {
    if(index<0 || index>size())
    {
    console.error("invalid index");
    return;
    }
 
    if(index===0)
    {
 this.head=this.head.next;
      return;
    }
    //traverse through linked list

    let current=this.head;
    for(let index=0;i<index-1;i++)
    {
      current=current.next
    }
   if(current.next)
   {
    current.next=current.next.next;
   }
    }
  

//printing the list 
print()
{
  let current=this.head;
  while(current)
  {
    console.log(current.data)
    current=current.next
  }
}
}

  

const linkedlist=new LinkedList();
linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(4);
linkedlist.addFirst(7);
linkedlist.addLast(9)

linkedlist.print();