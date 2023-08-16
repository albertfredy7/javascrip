/* program to find largest of 2 numbers */

var num1 = 10
var num2 = 20
 
if (num1>num2) { 
    console.log(`${num1} is greater than ${num2}`);
    
} else if (num1==num2) {
    console.log(`${num1} = ${num2}`);
}

else{
    console.log(`${num2} is greater than ${num1}`);
}
    
var num1 = 10
var num2 = 10
 
if (num1>num2) { 
    console.log(`${num1} is greater than ${num2}`);
    
} else if (num1==num2) {
    console.log(`${num1} = ${num2}`);
}

else{
    console.log(`${num2} is greater than ${num1}`);
}
    
var num1 = 30
var num2 = 10
 
if (num1>num2) { 
    console.log(`${num1} is greater than ${num2}`);
    
} else if (num1==num2) {
    console.log(`${num1} = ${num2}`);
}

else{
    console.log(`${num2} is greater than ${num1}`);
}

console.log(num1>num2?`${num1} is greater than ${num2}` : num1==num2? 'both are equal' : `${num2} is greater than ${num1}`);
   