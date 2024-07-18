function calculateCardPrice(...num1){
    return num1
}

console.log(calculateCardPrice(22,31,333))

const user ={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
console.log(`username is ${anyobject.user}and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username:"sam",
    price:11
})

const myNewarray=[1,2,4,5]
function returnSecoundValue(getArray){
    return getArray[1]
}

console.log(returnSecoundValue(myNewarray))