//  #####################################################  Algorithm ########################################################################
//  1. Sorting
//  Repeat until low<=up
//  2. Find the mid
//  3. Compare mid with searchElement
//              -   mid==searchElement
//                      print the number is found
//              -   mid<searchElement
//                      low=mid+1
//              -   mid>searchElement
//                      up=mid-1

//  ########################################################################################################################################



var arr=[10,11,12,3,2,4]

arr.sort((num1,num2)=>num1-num2)

// after sorting

console.log(arr);

low=0
up=arr.length-1
searchElement=11
mid=0
count=0
isPresent=false
//   [2,3,4,10,11,12]

while(low<=up)
{
    count++
    mid=Math.floor((low+up)/2)

    if(arr[mid]==searchElement){
        isPresent=true
        break
    }
    else if(arr[mid]<searchElement){
        low=mid=mid+1
    }
    else if(arr[mid]>searchElement){
            up=mid-1
    }
}
console.log(isPresent?'present':'not present');
console.log(count);
