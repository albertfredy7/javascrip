a=[10,1,2,33,4,5,6,7]

// find the highest value

console.log('highest');

highest= a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(highest);
// find the lowest value
console.log('lowest');

lowest=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(lowest);
// find the total sum
console.log('sum');
sum=a.reduce((num1,num2)=>num1+num2)
console.log(sum);