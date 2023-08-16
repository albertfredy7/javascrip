/*  program to check a given number is positive or negative */

var num1 = 10

if (num1>=1) {
    console.log('Number is positive');
} else if(num1==0){
    console.log('Number is Zero');
}

else{
    console.log('Number is negative');
}

/* using terinary */

console.log(num1>0?'positive' : num1==0? 'neither positive nor negative' : 'negative');