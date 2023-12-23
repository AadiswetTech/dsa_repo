let data=[1,2,3,4,5];
Array.prototype.myMap=function(c)
{
         let arr=[];
         for(let i=0;i<this.length;i++)
         {
                  console.log(i)
                  
                  arr.push(c(this[i],i,this))
         }
         return arr;
}
const mapLog=data.myMap((el)=>
{      
    return    el*2
})
console.log(mapLog)

//
const user=[
         {firstName:"akshat", lastName:"raj",age:23,profession:"backend"},
         {firstName:"hitesh", lastName:"chaudhry",age:32,profession:"frontend"},
         {firstName:"vinod", lastName:"bahadur",age:28,profession:"frontend"},
         {firstName:"akshay", lastName:"saini",age:29,profession:"database"},
         {firstName:"rahul", lastName:"kumar",age:29,profession:"backend"},
]

const usersinfo=user.map((item)=>
{
   return   item && item.profession==="frontend" ? `${item.firstName}  ${item.lastName} age is 
    ${item.age} and working as a ${item.profession} ` : "other professionn"
})
console.log(usersinfo)

//count of specific age
const specificage=user.reduce((acc,curr)=>
{
         if(acc[curr.age])
         {
         acc[curr.age]=++acc[curr.age]
         }
         else{
     acc[curr.age]=1;
         }
         return acc
},{})
console.log(specificage)