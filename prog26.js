//w.a.p to find the GCD/HCF of given two number

a = 12;
b = 28;
gcd=0
// while (b !== 0) {
//     const remainder = a % b;
//     a = b;
//     b = remainder;
// }

// gcd = a;
// console.log(`The GCD of 48 and 18 is ${gcd}`);

for(i=0;i<=a && i<=b;i++){
    if (a%i==0 && b%i==0) {
        gcd=i
    }
}
console.log(`gcd of given two numbers is ${gcd}`);

