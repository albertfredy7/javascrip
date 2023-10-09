// function overloading using the spread operator

function add(...arg){
    console.log(arg);
    console.log('sum :',arg.reduce((num1,num2)=>num1+num2));
}

add(10,20,30,40)