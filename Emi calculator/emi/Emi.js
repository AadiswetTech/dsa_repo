// function calculateEmi()
// {
//       const totalamount= parseInt(document.getElementById("amount"));
//       const AnnualInterestRate=parseFloat(document.getElementById("interest"));
//       const loanTenure=parseFloat(document.getElementById("tenure"))

// const monthlyRate=parseFloat(AnnualInterestRate/12/100);
// const emi=calculateMonthly(totalamount,monthlyRate,loanTenure)
// document.getElementById("emiresult").innerHTML=`Your monthly EMI is:${emi.toFixed(2)}`;
// }


document.addEventListener("DOMContentLoaded", function () {
function calculateMonthly(totalamount,monthlyRate,loanTenure)
         {
         const emi=totalamount* monthlyRate *Math.pow(1+monthlyRate,loanTenure)/
         (Math.pow(1+monthlyRate,loanTenure)-1)
console.log(emi)
         return emi;
         }
         const totalamount=20000;
const AnnualInterestRate=12;
const loanTenure=24;
const monthlyRate=parseFloat(AnnualInterestRate/12/100);
         console.log(calculateMonthly(totalamount,monthlyRate,loanTenure))
})