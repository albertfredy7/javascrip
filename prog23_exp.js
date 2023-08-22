/* write a program to display whose expoential are 8 to 36 user can input power to find the exponential for a particular number
power = 2
2 3 4 5 6

*/


power = 2
num=1
while(num<=36){
    if(8<=num**power && num**power<=36){
        console.log(num);
    }
    
    if (num**power>=36) {
        break;
    }
    num++
}