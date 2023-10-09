//  method overriding

//  it will works the last method

class A{
    methoda(){
        console.log('parent class');
    }
}

class B extends A{
    methoda(){
        console.log('child1 class');
    }
    methoda(){
        console.log('child2 class'); // this will be shown
    }
}


obj = new B
obj.methoda()