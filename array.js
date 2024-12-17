// const array = [1, 3, 5, 6, 7, 8]

// console.log(array);
// array.push(9) // to add an element in the array
// array.pop() // to remove the last element of array

// array.unshift(10) // it will add a element at the start fo the array
// array.shift() // it will remove a element from starting of the array

// console.log(array.includes(6)); // it will give bollean output that this element exist in out array or not
// console.log(array.includes(9)); 

// console.log(array.indexOf(5)); // if the element does not exist in array then it will return -1 until it will return index of the elemrnt
// console.log(array.indexOf(2)); 


// const newArray = array.join(); // it will convert our array to string
// console.log(newArray);
// console.log(typeof newArray);

// console.table(array);
// console.log(array);
// console.log(array[2]);

// slice, splice

// const myArray = [1 ,2 ,3 ,4 ,5]
// console.log("A ", myArray);
// //slice will not effect the original array, it just make new array from the elements

// const myArray1 = myArray.slice(1, 3)
// console.log(myArray1);
// console.log("B ", myArray);
// //splice will effect the original array, and remove the elements from the original array, from which the new array formed and also add the edge element

// const myArray2 = myArray.splice(1, 3)
// console.log("C ", myArray);
// console.log(myArray2);

// push, concat

const even = [2, 4, 6, 8]
const odd = [1, 3, 5, 7]

// even.push(odd); // this will push the complete array inside the array this will not push the elements
// and it will effect the original array, it will not create a new array
// console.log(even);

// const evenOdd = even.concat(odd); // this will add the elements in the array and will create new array, will not effect original array
// console.log(evenOdd);

const evenOdd1 = [...even, ...odd]
// console.log(evenOdd1);
// this will break the arrays elements and add them in a new array

const arr = [1, 2, [3, 4, [5, 6, [7, 8,[9]]]]]
// if there are many arrays in one array then you can spread them into one new array by flat
const flatArr = arr.flat(Infinity)
// console.log(flatArr);

console.log(Array.isArray(evenOdd1)); // to check the array
console.log(Array.isArray("Ravi"));
console.log(Array.from("Ravi")); // to convert every thing to array
console.log(Array.from({name: "Ravi"})); // INTERESTING  result for Interview

let student1 = "Ravi"
let student2 = "Rohan"
let student3 = "Karan"

console.log(Array.of(student1, student2, student3)); // use to create the array