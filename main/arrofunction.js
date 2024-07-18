const user ={
    username:"hri",
    price:999,

    welcomeMassage :function(){
        console.log(`${this.username},welcome to webside`)
    console.log(this)
    }
}

//user.welcomeMassage()

// function chai(){
//     console.log(this)
// }

// chai()

// const chai =()=>{
//     let username ="hris"
//     console.log(this.username);
// }
// chai()

const addTwo =(num1,num2)=>{
return num1 +num2
}

console.log(addTwo(3,4))

     