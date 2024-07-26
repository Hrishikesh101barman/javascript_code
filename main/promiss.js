const promiseOne =new Promise(function(resolve,reject){
    //do an async task
    //db calls ,cryp,newwork
    setTimeout(function()  {
        console.log('async task is complete')
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})