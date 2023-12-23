let userDetails={
         name:"Ajay suneja",
         age:28,
         Designation:"software engineer",
         printDetails:function()
         {
                  console.log(this.name,this.age)
         }
}
userDetails.printDetails();
let userDetails2={
         name:"Akshat mishra",
         age:23,
         Designation:"frontend engineer",
       
}
userDetails.printDetails.call(userDetails2)

//call methods
function greet(name)
{
 console.log(`Hey ! ${name} i m a ${this.role}`)
}
const person={role:"frontend-developer"};
greet.call(person,'All')

//cslculate sum array through call
function calculateSum()
{
         
}