//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('district with highest number of positive case');
high=covid_data.reduce((num1,num2)=>num1[2]>num2[2]?num1:num2)
console.log(high[1]);
console.log('--------------');
console.log('--------------');
//2. district having Highest 1st dose vaccine
console.log('district with highest !st dose vaccine');
high=covid_data.reduce((num1,num2)=>num1[5]>num2[5]?num1:num2)
console.log(high[1]);
console.log('--------------');
console.log('--------------');
//3. district having lowest death rate
console.log('district having lowest death rate');
low=covid_data.reduce((num1,num2)=>num1[3]<num2[3]?num1:num2)
console.log(low[1]);

//4. sort data with +ve case in descending order
console.log('sort data with +ve case in descending order');
covid_data.sort((num1,num2)=>num2[2]-num1[2]).forEach(data=>{console.log(data);})
console.log('-------------------');
console.log('-------------------');
//5. is district with +ve cases > 15000
console.log('is district with +ve cases > 15000');
dis=covid_data.some(poscase=>poscase[2]>15000)
console.log(dis?'yes':'no');

console.log('-------------------');
console.log('-------------------');
//6. sort data with 1st dose vaccine
console.log('sort data with 1st dose vaccine');
covid_data.sort((num1,num2)=>num1[5]-num2[5]).forEach(data=>{console.log(data);})
console.log('-------------------');
console.log('-------------------');
//7. Print Thrissur details
console.log(' Print Thrissur details');
data=covid_data.find(num1=>num1[1]=='Thrissur')
console.log(data);
console.log('-------------------');
console.log('-------------------');
//8. Print total number of positive cases
console.log('total number of positive cases');
data=covid_data.map(num=>num[2]).reduce((num1,num2)=>num1+num2)
console.log(data);
console.log('-------------------');
console.log('-------------------');
//9. Print total number of curred cases
console.log('total number of curred cases');
data=covid_data.map(num=>num[4]).reduce((num1,num2)=>num1+num2)
console.log(data);
console.log('-------------------');
console.log('-------------------');
//10. Print curred cases in Idukki
console.log('curred cases in Idukki');
idukki=covid_data.find(dis=>dis[1]=='Idukki')
console.log(idukki[4]);
