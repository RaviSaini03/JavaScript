function sayMyName(){
    console.log("Ravi Saini");
}
// sayMyName();
function add1(num1, num2){
    console.log(num1 + num2);
}
// add(3, 6);

// const addition = add1(4, 5)
// console.log( "value:", addition);
// it will not print he value of additon we have to use return to really execute or save the value

function add2(num1, num2){
    let addition = num1 + num2;
    console.log("Executed");
    // the only code written above return will execute in function
    return addition;
    //the code write below the return in function will not execute
    console.log("Not Exected");
}
// const addition1 = add2(3, 4);
// console.log(addition1);

function userWelcome(userName){
    return `Your Welcome, ${userName}`;
}
// console.log(userWelcome("Ravi Saini"));

// rest operator
function addToMyCart(...obj1) {
    return obj1;
}
// console.log(addToMyCart("Table", "Mouse", "Laptop", "Charger"));

function addToMyCart(obj1, obj2, ...obj3) {
    return obj3;
}
//here "Table" will store in obj1, and "Mouse" will store in obj2
// console.log(addToMyCart("Table", "Mouse", "Laptop", "Charger"));

const user = {
    userName: "Ravi",
    userId: 45
}

function userInfo(anyobject){
    console.log(`User name is ${anyobject.userName}, and id is ${anyobject.userId}.`);
}

// userInfo(user);
// we can also direct pass the object
// userInfo({
//     userName: "Rohan",
//     userId: 60
// })

// for array
const newArray = [200, 400 ,300]
function arrayElement(getArrayElement){
    return getArrayElement[2];
}
console.log(arrayElement(newArray));
