//using for loop

weekdays=['mon','tue','wed','thu']

for(i=0;i<weekdays.length;i++)
{
    console.log(weekdays[i]);
}
console.log('------------------------------------------');


for(let i in weekdays){
    console.log(weekdays[i]);
}
console.log('------------------------------------------');

//for of

for(let days of weekdays){
    console.log(days);
}
console.log('------------------------------------------');



expenses=[12000,23000,40000,34000,55000,24000,10000,14000]


//find the lowest expense
console.log('------------------lowest------------------------');
lowest=expenses[0]
for(let cash of expenses){
    if(cash<=lowest){
        lowest=cash
    }
}
console.log(lowest);

//find the highest expense
console.log('-----------------highest------------------------');
greatest=expenses[0]
for(let cash of expenses){
    if(cash>=greatest){
        greatest=cash
    }
}
console.log(greatest);

//find total expense
console.log('---------------------------total expenses----------------------');
sum=0
for(let cash of expenses){
    sum=sum+cash
}

console.log(sum);

console.log('---------------------------------------------------------------');

var arr=[10,11,12,3,2,4,56]
//check whether 2 is present in it or not

item=2
isPresent=false


for(let num of arr){
    if(num==item){
        isPresent=true
        break
    }

    
}
console.log(isPresent?'present':'not present');
console.log('--------------------------------------------');
// input=[4,5,6]
//output=[11,10,9]
sum=0
arr=[4,5,6]
res=[]

for(let num of arr){
    sum=sum+num
}
for(let num of arr){
    result=sum-num
    res.push(result)
}

console.log(res);


console.log('--------------------------------------------');

//w.a.p to print duplicate elements from given array

a=[10,20,30,20,30,40,50,60,10]
result=[]
final=[]

for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            isDuplicate=true
            console.log(a[i]);
        }
    }
}
// if(isDuplicate==false){
//     console.log('no duplication');
// }

!isDuplicate&&console.log('no duplicate');

console.log('--------------------------------------------');


// w.a.p to print pairs whose pairs whose pair sum is 6 
b=[2,3,4,5]
noPair=false
//output 2,4
for(i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
        if(b[i]+b[j]==6){
            noPair=true
            console.log(b[i],b[j]);
            
        }
    }
}
!noPair&&console.log('no pair');

console.log('--------------------------------------------');


//w.a.p to print common numbers from given arrays
p=[10,1,,12,20,30]
q=[10,40,11,30,20,60,50]
for(i=0;i<p.length;i++){
    for(j=0;j<q.length;j++){
        if(p[i]==q[j]){
            console.log(q[j]);
        }

    }

}
