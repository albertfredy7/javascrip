// class
class Employee{
    // property - variables inside class
    empId
    empName
    empDesg
    empSalary
    // constructor - to initialize the propery
    constructor(id,ename,desg,salary){
        this.empId=id
        this.empName=ename
        this.empDesg=desg
        this.empSalary=salary
    }
    // methods - functions inside the class

    display(){
        console.log(`employee id is ${this.empId} \n employee name is ${this.empName} \n employee designation is ${this.empDesg} \n employee salary is ${this.empSalary} `);
    }

}


// object

emp1=new Employee(1000,"Max","Developer",25000)     // this is for the object creation
emp1.display()

emp2=new Employee(1001,"Neel","Tester",30000)
emp2.display()
// here emp1 is reference 

// there is no need for calling the constructor seperately.it will be automatically invoked

