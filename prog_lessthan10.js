//w.a.p to print numbers less than 10 from the given array
a=[[10,20],[34,56],[2,4],[57,86],[7,9]]

// ans 2   4   7   9

for(let num of a){
    //console.log(num);
    for(let n of num){
        if(n<10){
            console.log(n);
        }
    }
}


