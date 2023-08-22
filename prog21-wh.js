/* input 2     3            4
output   2+22  3+33+333     4+44+444+4444*/


input = 3
i = 0
str =''
sum = 0
while (i<input) {
    str = str+input
    console.log(str);
    sum = sum+ Number(str)
    i++
    
}

console.log(`result is ${sum}`);

console.log('-------------------------------');


input = 4
j = 1
pro = 1
str = ''

while (j<=input) {
    str=str+j
    j++   
}

pro = input * Number(str)
console.log(pro);

console.log('-------------------------------');

/* display a number in reverse order */ /* mathfloor() or parseint() method to take  */

num = 12345
rev = 0
rem = 0
console.log(`number is ${num}`);
 while (num>0) {
    
    rem = num%10
    rev = (rev*10)+rem
    num = parseInt(num/10)
 }

 console.log( `reverse if the given number is ${rev}`);

 console.log('-------------------------------');

/* palindrom */


num = 12321
temp= num
rev = 0
rem = 0
console.log(`number is ${num}`);
 while (num>0) {
    
    rem = num%10
    rev = (rev*10)+rem
    num = parseInt(num/10)
 }

 console.log( `reverse if the given number is ${rev}`);

 if (temp==rev) {
    console.log('number is palindrom');

    
 } else {
    console.log('number is not palindrome');
    
 }

 console.log('-------------------------------');

/* find factorial of a number */

input = 5

fact = 1
i = 1
while (i<=input) {
    fact = fact * i
    i++
    
}

console.log(`factorial is ${fact}`);

/* find  wheather a number is amstrong or not

153 = 1**3 + 5**3 + 3**3 = 1+153+27 = */

num=152
temp=num
rem=0
sum=0

while (num>0) {
    rem=rem%10
    sum=sum+ rem**3
    num=parseInt(num/10)
    
}

if (temp==sum) {
    console.log('amstrong');
    
} else {
    console.log('not amstrong');
}
console.log('-------------------------------');


/*write a program to find fibonocci series using while loop */

i = 0
j = 1
k = 0

while (i<40) {
    console.log(i);
    k = i+j
    i = j
    j = k
}
console.log('-------------------------------');

/* write a program to display whose expoential are 8 to 36 user can input power to find the exponential for a particular number
power = 2
2 3 4 5 6

*/

num = 10
p1 = 8
p2 = 36
k = 0

for(i=2;i<=num;i++){
   k = i**2

   if (k>=p1 && k<=p2) {
    console.log(i);
    
   }
}

console.log('-------------------------------');