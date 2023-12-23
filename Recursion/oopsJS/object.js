const functionBundle={
         addMoney:function()
         {
                  this.accountBalance++
         },
         fetchBalance:function()
         {
                  console.log("balance is"+this.accountBalance);
         }
}
 function createCustomer(name,accountBalance,branch)
 {
         const customer=Object.create(functionBundle);
         customer.name=name;
         customer.accountBalance=accountBalance;
         customer.branch=branch;
         return customer;
 }
 const customer1=createCustomer("Akshat",12002,"Sbi");
 customer1.addMoney();
 customer1.fetchBalance()
//  cons