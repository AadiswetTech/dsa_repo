function User(username,loginCount,isLoggedIn)
{
         this.username=username;
         this.loginCount=loginCount;
         this.isLoggedIn=isLoggedIn;
         return this;
}
const UserOne=User("akshat",12,false);
//usertwo override the value of userone
//so herre we use new keyword where each time we get a new instance of object
// const UserTwo=User("htesh",10,true)
// console.log(UserOne)

//prototype
function multiplyBy5 (num)
{
         return num*5

}
multiplyBy5.power=2
console.log(multiplyBy5.power)
console.log(multiplyBy5(4))


console.log(7/100)