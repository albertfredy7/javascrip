//input      2          3              4
//outpuut    24        369          4936
//          2*12       3*123        4*1234
//          2+22       3+33+333     4+44+444+4444


input=3
i=0
str=''
sum=0
while (i<input) {
    str=str+input
    console.log(str);
    sum=sum+str
    i++
}