numbers=[[10,20,[34,57]],[30,40],[50,60],[23,56],[100,45]]

//find the numbers >50
// #############################################   infinity  - is used to convert the multi dimensional array to 1d dimension
data=numbers.flat(Infinity).filter(num=>num>50)
console.log(data);
//find the largest numbers
console.log('largest number');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1>num2?num1:num2));

// find the smallest number
console.log('smallest number');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1<num2?num1:num2));

// find the total sum of numbers

console.log('sum of the numbers');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1+num2));


