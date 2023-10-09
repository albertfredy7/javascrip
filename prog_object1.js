// object creation : 

// [100,'Neel','Developer','Kochi',25000,3]

employee={
    empID:1000,
    empName:'Neel',
    empDesignation:'developer',
    empLocation:'kochi',
    empSalary:25000,
    empExperience:3

}

console.log(employee);

/// display a particular value - object_name.key    or   object_name['key]


console.log(`employee name : ${employee.empName}`);
console.log(`employee name : ${employee['empName']}`);

console.log('----------------------------------');
// dispalay the salary of the employee

console.log(`Salary : ${employee.empSalary}`);

console.log('----------------------------------');


// display only the key of the object

for(let key in employee){
    console.log(key);
}

console.log('----------------------------------');


// check whether employee location is present or not; if preent print the location else print not available

if('empLocation' in employee){
    console.log('present');
}
else{
    console.log('not present');
}
console.log(`employee locaation is ${'empLocation' in employee?'present':'not present'}`);

// check whether employee gender is present or not; if preent print the gender else add new key as empGender

'empGender' in employee?console.log('present'):employee["empGender"]='male';

// add new item into an object :        object_name['key']=value

employee["empExperience"]=3
console.log(employee);
console.log(employee.empGender);


// check whether employee address is present or not; if preent print the address else add new key as empAddress

'empADdress' in employee?console.log('present'):employee["empAddress"]='aajdakfbv ksfgsfbsfsfffss edjgbd';
console.log(employee);
