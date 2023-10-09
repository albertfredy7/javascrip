// w.a.p to print whose pair sum is 6 using binary search

b=[2,3,4,5]

psum=6
low=0
up=b.length-1
while(low<up){

    sum=b[low]+b[up]
    if(sum==psum){
        console.log(b[low],b[up]);
        low++
        up--
    }
    else if(sum>psum){
        up--
    }
    else if(sum<psum){
        low++
    }
}