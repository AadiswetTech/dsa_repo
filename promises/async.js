const datas=[{name:"Akshat",profession:"frontend"},
{name:"Sandhay",profession:"backend"},];
const getData=()=>
{
         setTimeout(()=>
         {
                  let names=""
                  datas.forEach((data,index)=>
                  {
                   names=`${data.profession}`
                   console.log(names)
                  })
          
         },4000)
}
getData();

const CreateData=(newData,callback)=>
{
       setTimeout(()=>
       {
       datas.push(newData)
       callback();
       },3000)  
}
CreateData({name:"suraj",profession:"fullStack"},getData)