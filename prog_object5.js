// pattern ABBAABAB

// w.a.p to  to print the first recursive letter

pattern="ABBAABAB"
charecter = Array.from(pattern)
console.log(charecter);

obj={}
for(let char of charecter)
{
    if(char in obj){
        console.log('first recursive letter :',char);
        break
    }
    else{
        obj[char]=1
    }
}

