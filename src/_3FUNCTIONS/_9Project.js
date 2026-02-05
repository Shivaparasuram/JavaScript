const BankAccount=
{
Name:"Dude !x",
AccNO:4664,
IFSC:"pop1234",
Branch:"Frazer Town",
Balance:1000,

//Function
Deposit:function(Amount)
    {
    this.Balance=this.Balance+Amount;
    console.log("\nDeposit Success",Amount ,"/-","\nTotal Balance",this.Balance,"/-")
    },

//Arrow Function
BalanceEnquiry:()=>console.log("\nTotal available Balance",BankAccount.Balance,"/-"),

WithDraw:function(Amount)
    {
    if (Amount>this.Balance)
        {
        console.log("\nInsufficient Balance !")
        console.log("Available Balance for Withdraw ",BankAccount.Balance,"/-")

        }
    else
        {
        this.Balance=this.Balance-Amount;
        console.log("\nWithDraw Success !",Amount,"/-")
        console.log("Available Balance ",BankAccount.Balance,"/-")
        }

    }


}
console.log(BankAccount);
//Function
BankAccount.Deposit(5000);
//Arrow
BankAccount.BalanceEnquiry();
//Logic based
let a=1234
BankAccount.WithDraw(a)