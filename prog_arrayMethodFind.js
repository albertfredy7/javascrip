fruits=['apple','mango','orange']

//print the value mango from the given array if mango is a item

b=fruits.find(fruit=>fruit=='mango')
console.log(b);

// #######################################  include  #############################3
b1= fruits.includes('mango')?'yes':'no'
console.log(b1);


// #####################################   indexOf  ##################################
mango=fruits.indexOf('mango')
console.log(mango);