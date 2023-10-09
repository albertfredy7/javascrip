// array method map


// w.a.p to print the square of the given array

// ############################## -       map()        - #############################################################

console.log(' print the square of the given array');

a=[10,11,12,13,14,15]

b=a.map(num=>num**2)

console.log(b);

console.log('----------------------------------------------------------');
// w.a.p to print the cube of given array

console.log('print the cube of given array');



b=a.map(num=>num**3)

console.log(b);

console.log('----------------------------------------------------------');


// w.a.p to create a new array with numbers <= 13increment the number or number>13 decrement the number
console.log('create a new array with numbers <= 13increment the number or number>13 decrement the number');
a=[10,11,12,13,14,15]

// ans [11,12,13,14,13,14]

arr=a.map(num=>num<=13?num+1:num-1)
console.log(arr);