p=[10,11,12,20,30]
q=[11,20,25,30,33]

a=0
b=0
isPresent=false
while( a<p.length && b< q.length){
    if(p[a]==q[b]){
        console.log(p[a]);
        isPresent=true
        a++
        b++
    }
    else if(p[a]<q[b]){
        a++
    }
    else if(p[a]>q[b]){
        b++
    }
}

!isPresent&&console.log('no coomon numbers');
