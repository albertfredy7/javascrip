// object inheritance

baleno={
    model:'hatchback',
    varient:['automatic','manual'],
    manufacture:'maruti'
}

glanza={
    manufacture:'Toyota'
}

// childclassname.__proto__=parent class
glanza.__proto__=baleno
console.log(glanza.model);