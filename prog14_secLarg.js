// write the program to input 3 numbers and print second largest number and sort the three numbers in descending order
num1=60
num2=50
num3=22
// for checking num1 is greater
if(num1>num2 && num1>num3){
    if (num2>num3) {
        
        //checks num2 > num3

        console.log(`second largest no is ${num2}`);
        console.log(`Decending order is ${num1},${num2},${num3}`);
    }
    else{

        //num3 is second largest
        console.log(`second largest no is ${num3}`);
        console.log(`Decending order is ${num1},${num3},${num2}`);

    }
}


else if (num2>num1 && num2>num3){    //checks num2 is greater
    if (num1>num3) {                 //checks num1 > num3
        console.log(`second largest no is ${num1}`);
        console.log(`Decending order is ${num2},${num1},${num3}`);
    }
    else{                            
        console.log(`second largest no is ${num3}`);
        console.log(`Decending order is ${num2},${num3},${num1}`);

    }
}
else if (num3>num1 && num3>num2) {     //checks num2 is greater
    if(num2>num1){
        console.log(`second largest no is ${num2}`);
        console.log(`Decending order is ${num3},${num2},${num1}`);
    }
    else{
        console.log(`second largest no is ${num1}`);
        console.log(`Decending order is ${num3},${num1},${num2}`);

    }
}