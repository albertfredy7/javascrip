class Bank{
    accountDetails={
        1000:{acno:1000, username: "userone",password:"password1",balance:50000},
        1001:{acno:1001, username: "usertwo",password:"password2",balance:5000},
        1002:{acno:1002, username: "usernthree",password:"password3",balance:10000},
        1003:{acno:1003, username: "userfour",password:"password3",balance:6000},
        
    }

    // method validate account number
    validate(acno){
        return acno in this.accountDetails?true:false
    }



    
    //  method authentiicate account

    authenticate(acno,pswd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password==pswd){
                console.log('authentication successful');
            }
            else{
                console.log('invalid password');
            }

        }
        else{
            console.log('invalid account');
        }
    }

    // method balance enquiry

    balance(acno,pswd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password==pswd){
                console.log(` Account balance of ${acno} is ${this.accountDetails[acno].balance}`);
            }
            else{
                console.log('invalid password');
            }

        }
        else{
            console.log('invalid account');
        }
    }
    

    //method for fund transfer

    fundTransfer(fromacno,toacno,amount){
        if(this.validate(fromacno) && this.validate(toacno)){
            if(this.accountDetails[fromacno].balance>=amount){
                console.log(`current balance of the ${fromacno} is ${this.accountDetails[fromacno].balance} \ncurrrent balance of ${toacno} is ${this.accountDetails[toacno].balance}`);
                this.accountDetails[fromacno].balance-=amount
                this.accountDetails[toacno].balance+=amount
                console.log(`final balance of the ${fromacno} is ${this.accountDetails[fromacno].balance} \nfinal balance of ${toacno} is ${this.accountDetails[toacno].balance}`);

            }
            else{
                console.log('insufficient balance');
            }

        }
        else{
            console.log('invalid accounnt numbers');
        }
    }


}

const user1=new Bank()
console.log('validate account number');
console.log(user1.validate(1005)?'account available':'account not availabe')
console.log('------------------------------------------------------------------------------');
console.log('authentiicate account');
user1.authenticate(1000,'password2')
console.log('------------------------------------------------------------------------------');
user1.balance(1001,'password1')
console.log('------------------------------------------------------------------------------');
user1.fundTransfer(1000,1001,1000)
