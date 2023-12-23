const twoSum=(nums,target)=>
{
  const map=new Map();
  for(const index in nums)  
  {
  console.log(index)
  const pairTarget=target-nums[index]
  if(map.has(pairTarget))
  {
         return [index,map.get(pairTarget)]
  }
  map.set(nums[index],index)
  }     
}
let numbers=[4,9,8,14,17,23]
let target=23
console.log(twoSum(numbers,target))