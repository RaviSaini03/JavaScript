// object litrals

// const mySym = Symbol("key") // symbole use in object
// const player = {
//     name: "Ravi",
//     [mySym]: "Key1",
//     Jersy: 85,
//     height: 185,
//     team: "Rajasthan Royals"
// }
// console.log(player);
// console.log(player.name);
// console.log(player["team"]);
// console.log(player[mySym]);
// console.log(typeof player[mySym]);
// player.Jersy = 65; // to change the value of key element
// console.log(player);
// Object.freeze(player); // to freeze the further changes in object

// player.greeting = function(){
//     console.log("Hello player");
// }
// console.log(player.greeting);
// console.log(player.greeting());
// player.greetingTwo = function(){
//     console.log(`Hello jersy no. ${this.Jersy}`);
// }
// console.log(player.greetingTwo());

// object Singolton

// const laptop = new Object(); // this is singlton object
// laptop.name = "Asus";
// laptop.version = 126;
// laptop.screenSize = "16x24";
// console.log(laptop);

 /* const userProfile = {
    userName: {
        firstName: {
            name1: "Ravi",
            name2: "Rohan"
        },
        lastName: {
            lastPlayerName1: "Saini",
            lastPlayerName2: "Sharma",
        }
    },
    userRank: {
        player1Rank: 30,
        player2Rank: 120
    }
} */

// console.log(userProfile.userName);
// console.log(userProfile.userRank.player1Rank);
// console.log(userProfile.userName.firstName.name2);

// console.log(`Player name is ${userProfile.userName.firstName.name1} ${userProfile.userName.lastName.lastPlayerName1}, and Rank is ${userProfile.userRank.player1Rank}.`);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj3 = { 5: "e", 6: "f"}

const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const arr = [
    {
        id: 1,
        name: "Ravi"
    },
    {
        id: 2,
        name: "Rohan"
    },
    {
        id: 3,
        name: "Sohan"
    }
]
// console.log(arr[1].id);
const arrObj4 = Object.keys(obj4)
// console.log(arrObj4);
// console.log(typeof arrObj4);
// console.log(Object.values(obj4));
// console.log(typeof Object.values(obj4));

// object De-structure

const game = {
    name: "IGI",
    version: 2004,
    type: "First Person Shooting Game"
}

const  {version: versionYear} = game;
console.log(versionYear);

