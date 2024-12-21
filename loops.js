// loops in array
const myArray = [1, 2, 3, 4, 5]

for (const num of myArray) {
    // console.log(num);
}

const greeting = "Hello World!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//Maps 
const map = new Map()
map.set('In', "India");
map.set('USA', "United States of America");
map.set('Rus', "Russia");
map.set('In', "India");

// console.log(map);
// maps are known for storing unique elements and it will not change arrangement 

for(const myMap of map){
    // console.log(myMap);
} // this will give output as a array

for (const [key, value] of map){
    // console.log(key, ":-", value);
} // this will give output as elements

const myGames = {
    "game1": "Need for Speed",
    "game2": "Game of Throns",
    "game3": "God of Wars"
}

for (const key in myGames) {
    // console.log(myGames[key]);
    // console.log(`${key} is ${myGames[key]}`);
}

const myArrGames = ["Clash of Clans", "Spiderman", "Red redemption"]
for(const key in myArrGames){
    // console.log(myArrGames[key]);
    // console.log(key);
}

// forEach() funtion

myArrGames.forEach( function (games) {
    // console.log(games);
} )

myArrGames.forEach( (games, index, arr) => {
    // console.log(games, index, arr);
} );

const value = myArrGames.forEach( (item) => {
    // console.log(item);
    // return item;
} );
// console.log(value);
// forEach never return any value

//filter operation
const scores = [20, 30 ,40, 50]
const myScores = scores.filter( (num) => num > 20 )
// console.log(myScores);

const newScores = scores.filter( (num) => {
   return num > 20
});
// console.log(newScores);

// Examples
const games = [
    {gameName: "Red Dead Redemption", gameType: "Open World", releaseDate: 2015},
    {gameName: "God of Wars", gameType: "Open World", releaseDate: 2023},
    {gameName: "Among Us", gameType: "Multiplayer", releaseDate: 2022},
    {gameName: "CyberPunk", gameType: "Open World", releaseDate: 2017},
    {gameName: "Grand Thieft Auto V", gameType: "Open World", releaseDate: 2013},
    {gameName: "Call of Duty", gameType: "First person Shooting", releaseDate: 2020},
    {gameName: "Last of Us", gameType: "Servival", releaseDate: 2018},
    {gameName: "Fall Guys", gameType: "Multiplayer", releaseDate: 2016},

];

// const popularGames = games.filter( (game) => game.gameType === "Open World" );

const launchYear = games.filter( (year) => year.releaseDate > 2010 )
// console.log(launchYear);

const myTotal = [1, 2, 3, 4, 5]

const newTotal = myTotal.map( (num) => {
    // return num + 10;
} )
// console.log(newTotal);

// chaining

// const myNewTotal = myTotal.map( (num) => num * 10 ).map( (num) => num + 1 );
// console.log(myNewTotal);

const myNewTotal = myTotal.filter( (num) => num > 2 ).map( (num) => num + 1 );
// console.log(myNewTotal);

// accumulator

const myPants = [1, 2, 3 , 4, 5]

const newPants = myPants.reduce(function (accumulator, currentvalue) {
    // console.log(`accumulator: ${accumulator}, currentvalue: ${currentvalue}`);
    // return accumulator + currentvalue;
}, 0 ); // you can change the accumulator value by }, 2);
// console.log(newPants);

const cartTotal = [
    {
        itemName: "Basketball",
        price: 999
    },
    {
        itemName: "Mouse",
        price: 1999
    },
    {
        itemName: "Charger",
        price: 599
    }
]

const yourCartTotal = cartTotal.reduce( (acc, total) => {
    return acc + total.price;
}, 0);

console.log(yourCartTotal);