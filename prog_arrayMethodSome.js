a=[10,11,12,13,14,15]
//display all numbers greater than 13
// some() always return true or false
console.log('is there any numbers greater than 13');

num1=a.some(num=>num>13)
console.log(num1?'yes':'no');