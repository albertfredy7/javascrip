text="hai hello all hello world"

// // w.a.p to print the word count to the given text
// //  o/p             {hai:1,hello:2,all:1,world:1}


// // ###########################################  Algorithm ###############################################

// // text is converted to an array have all words
// // create an empty object
// // fetch each word and check whether the given word is there in the object
// // if present increase the count
// // else add the word into object





words=text.split(' ')
console.log(words);
obj={}
for(let word of words){
    if(word in obj){
        obj[word]+=1
    }
    else{
        obj[word]=1
    }
}
console.log('---------------------------------------------------------');
wc={}
text.split(' ').forEach(item =>item in wc?wc[item]+=1:wc[item]=1);
console.log(wc);




