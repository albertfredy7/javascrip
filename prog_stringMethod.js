sentance='Good morning all'
vowels=['a','e','i','o','u','A','E','I','O','U']

// print all the vowels present in it

charecter=sentance.split('')

for(let char of charecter){
    if(vowels.includes(char)){
        console.log(char);
    }
}

// ########################################### other method ####################################################################
console.log(' USING Array.from() method ');

Array.from(sentance).filter(char=>vowels.includes(char)).forEach(data=>{console.log(data)});