numArray= [10,20,30,40,30,20,50,30,60,70,10,40,80]
// w.a.p to to find the number count

obj={}
numArray.forEach(item =>item in obj?obj[item]+=1:obj[item]=1);
console.log(obj);