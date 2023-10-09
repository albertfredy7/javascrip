class Landing{
    //property
    database={
        Milan:{username:"Milan",password:"123"},
        George:{username:"George",password:"1123"},
        James:{username:"James",password:"1423"},
        Manu:{username:"Manu",password:"12333"},
    }

    //method

    //getData from the local storage
    getData(){
        this.database=JSON.parse(localStorage.getItem("database"))
    }

    saveData(){
        localStorage.setItem("database",JSON.stringify(this.database))
    }

    register(){
        this.getData()
        let user=reguser.value
        let pswd=regpsw.value

        if(user=="" || pswd==""){
            alert("PLease enter the valid inputs")
        }
        else{
            if(user in this.database){
                    alert("USer already exist")
            }
            else{

            this.database[user]={username:user,password:pswd}
                    console.log(this.database);
                    alert("succesfully registered")
                    this.saveData()
                    this.navigate()

                    
                    // navigate to a page 

                    // window.location='login.html'
            }
        }
    }
    // 
    navigate(){
        location.assign("login.html")
    }
    //login
    login(){
        let user1=loguser.value
        let pswd1=logpswd.value

        // call stored database
        this.getData()
        if(user1 in this.database){
            if(this.database[user1].password==pswd1){
                alert('login successfull')
                localStorage.setItem("user",user1)
                //navigate
                // Window.location="home.html"
                // this.navigate()
                // window.location.replace("https://stackoverflow.com/questions/38870016/javascript-window-location-does-not-work")
            }
            else{
                alert("invalid credentials")
            }

        }
        else{
            alert("User not exist")
        }
    }
    

}



const obj=new Landing()
obj.getData()