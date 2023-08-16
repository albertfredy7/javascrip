var x = 10
var y = 20
console.log(`sum of x + y is ${x+y}`);

var x = 10
var y = 20
var z = x+y
console.log(`sum of x + y is ${z}`);
/* console.log(`sum of  ${x} + ${y} = ${z}`); */


/* Relational operators */

num1 = 10
num2 = '10'
console.log(`is ${num1} greater than ${num2} ${num1==num2}`); /* check only value */
console.log(`is ${num1} greater than ${num2} ${num1===num2}`); /* check both value and datatype */


/* logical operators */
 /* AND */
a = 10
 console.log(`5<a<20 : ${5<a && a<20}`);
 console.log(`5<a<20 : ${5<a || a<20}`);

 a = 30
 console.log(`5<a<20 : ${5<a && a<20}`);
 console.log(`5<a<20 : ${5<a || a<20}`);


 /* incremental operator ++ */
int = 10
int++
console.log(int);

/* decremental operator */
int = 10
int--
console.log(int);

inc1 = 10
console.log(`initial value ${inc1}`);/* 10 */
console.log(`incremented value ${inc1++}`);/* 10 because code runs line by line ++is after the value */
console.log(`after increment ${inc1}`);/* 11 */


inc1 = 10
console.log(`initial value ${inc1}`);/* 10 */
console.log(`incremented value ${++inc1}`);/* 11 */
console.log(`after increment ${inc1}`);/* 11 */

/* short hand operators */
var short = 10
short += 10  /*short = short + 10  */
console.log('result', short);

var short = 50
short -= 10  /*short = short + 10  */
console.log('result', short);