stu={
    name:'vyshakh',
    rollno:57,
    class:'8th',

}

//location


Object.assign(stu,{location:'thrissur'})
console.log(stu);

// to update the value of object
stu.name='ahan'
console.log(stu);


// delete an item

console.log(delete stu.location);
console.log(stu);