// class

class Student{
    rollNO
    name
    department

    constructor(rno,name,dep){
        this.rollNO=rno
        this.stuname=name
        this.department=dep
        this.display()
    }

    display(){
        console.log(`student rollno is ${this.rollNO}\nstudent name is ${this.stuname}\nstudent department is ${this.department}`);
    }


}

stu=new Student(1,"max","cs")


stu1=new Student(2,"neel","eee")

