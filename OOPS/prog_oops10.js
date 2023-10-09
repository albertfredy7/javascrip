exp="#10*2+5"
console.log('Expression evaluation');

try{
    const result=eval(exp)
    console.log(result);
}
catch{
    console.log('evaluation statement error');
}
finally{
    console.log('task completed');
}