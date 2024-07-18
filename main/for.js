const myobject ={
    js:"javascript",
    cpp:"c++"
}

for (const key in myobject) {
   console.log(`${key} myyy ${myobject[key]}`);
}