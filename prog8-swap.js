/* program to swap 2 numbers */

/* create num1 and num 2
   create temp
   value of num1 added to temp
   value of num2 added to num1
   value of temp added to num2
   display num1 and num2
*/

  var num1 = 10
  var num2 = 30
  console.log(`value of num1 and num 2 are ${num1} and ${num2}`);
  
  var temp

  temp = num1
  num1 = num2
  num2 = temp

  console.log(`value of num1 and num 2 are ${num1} and ${num2}`);

  var num1 = 20
  var num2 = 50
  console.log(`value of num1 and num 2 are ${num1} and ${num2}`);
  

  num3 = num1 + num2
  num1 = num3 - num1
  num2 = num3 - num2

  console.log(`value of num1 and num 2 are ${num1} and ${num2}`);

