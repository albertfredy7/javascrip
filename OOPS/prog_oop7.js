// method overloading ---   javascript doesnt support method overloading. it always execute the last method
// Achieved using the spread operator (...)

class A{
    methoda(){
        console.log('first method');
    }
    methoda(n){
        this.num=n
        console.log(`inside second method ${this.num}`);
    }
}

obj=new A
obj.methoda()
obj.methoda(5)