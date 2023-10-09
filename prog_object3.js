var car={
    name:"boleno",
    model:"hatch back",
    manufacture:"maruti",
    price:"10 lakh"
}

// display car name and its manufacture name and price

console.log(`car:${car.name} \n manufacturer name : ${car.manufacture} \n price : ${car.price}`);
console.log('------------------------------------------------------------');

// check model key is available in car, if yes then display its value

console.log("model" in car?`car model is: ${car.model}`:`key not available`);
console.log('------------------------------------------------------------');

// add "varient" key to the car with value as " manual"
car.varient=["manual"]
console.log(car);


// insert another value to to "varient" key to car with value as "automatic"
car.varient.push("automatic")
console.log(car);
console.log('------------------------------------------------------------');


// add "colour key to car with value as "red","white","blue"
car.colour=["red","white","blue"]
console.log(car);