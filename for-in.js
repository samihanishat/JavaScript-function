const myObj = {
    name : "john",
    class: 1,
    age : 25,
    city : "Bandarban",
    isStudent: true
}
for (const property in myObj){
    // console.log(property , ':', myObj[property]);
    // console.log('key:' , property);
    // console.log('type:', typeof myObj[property])
    console.log('key:' , property, "|", 'type:', typeof myObj[property]);
}