let str="akshat";
let strObj={}
for(let i=0;i<str.length;i++)
{
         console.log(str[i])
         let key=str[i];
        
         if(!strObj[key])
         {
                  strObj[key]=0
                 
         }
         
         strObj[key]++
         
}
console.log(strObj)