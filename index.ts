//Q.2
let n = "Hamid Mehmood";
console.log(`Hello ${n}, would you like to learn some Python today?`)

//Q.3
console.log(n.toLocaleLowerCase());
console.log(n.toLocaleUpperCase());
console.log(n);

//Q.4
console.log(`Theodore Roosevelt once said, "Believe you can and you're halfway there."`)

//Q.5
let famous_Person = "Theodore Roosevelt";
let message = `${famous_Person} once said, "Believe you can and you're halfway there."`;
console.log(message);

//Q.6
let person = "\n  Zain \t "
console.log(person);
person = person.replace("\n", "");
person = person.trim();
console.log(person);

//Q.7,8
console.log(4+4);
console.log(12-4);
console.log(2*4);
console.log(32/4);

//Q.9
let favNumber = 22;
console.log(`My all time favourite number is ${favNumber}`);

//Q.10
// This program prints a message which is a quote from a famous person
// let famous_Person = "Theodore Roosevelt";
// let message = `${famous_Person} once said, "Believe you can and you're halfway there."`;
// console.log(message);

// This program performs four arithmatic operations +, -, * and / each to give same output of 8
// console.log(4+4);
// console.log(12-4);
// console.log(2*4);
// console.log(32/4);

//Q.11
let friends = ["Touseef", "Abdullah", "Rashid", "Fatima"];
for (let i=0; i<friends.length; i++) {
    console.log(friends[i]);
}

//Q.12
for (let i=0; i<friends.length; i++) {
    console.log(`May Allah bless you with happiness, ${friends[i]}`);
}

//Q.13
let modeOfTransport = ["bus", "train"];
for (let i=0; i<modeOfTransport.length; i++) {
    console.log(`I like to travel by ${modeOfTransport[i]} because you get to see and meet a lot of people on your way. Also ${modeOfTransport[i]} is cheaper mode of transportation and saves you a lot of money. And ${modeOfTransport[i]}s have specific routes also so it less likely to get stuck in a traffic jam.`);
}

//Q.14
let guests = ["Faheem","Usman","Qaisar","Ramzan"];
for (let i=0; i<guests.length; i++) {
    console.log(`Mr.${guests[i]}, I would be honored If you would come to dinner tomorrow at 8pm sharp.`);
}

//Q.15
console.log(`Mr.${guests[2]} will not be able to make it to the dinner.`)
guests[2] = "Zubair"
for (let i=0; i<guests.length; i++) {
    console.log(`Mr.${guests[i]}, I would be honored If you would come to dinner tomorrow at 8pm sharp.`);
}

//Q.16
console.log("I would like to inform that we will be joined by more people at dinner");
let guests2 = [...guests]
guests2.push("Sarim");
guests2.splice(2, 0,"Haadi");
guests2.unshift("Karim");
for (let i=0; i<guests2.length; i++) {
    console.log(`Mr.${guests2[i]}, I would be honored If you would come to dinner tomorrow at 8pm sharp.`);
}

//Q.17
let guests3 = [...guests2];
console.log(guests3);
console.log("I would like to inform that only two people could be present for dinner tomorrow.");

while (guests3.length > 2) {
    const removedGuest = guests3.pop();
    console.log(`${removedGuest}, I am sorry for not being able to invite you to dinner anymore.`);
    console.log(guests3);
}
for (let i=0; i<guests3.length; i++) {
    console.log(`Mr.${guests3[i]}, I would be honored If you would still come to dinner tomorrow at 8pm sharp.`);
}
let guests4 = [...guests3];
guests4.pop();
guests4.pop();
console.log(guests4);

//Q.18
let favPlaces = ["Australia", "Italy", "Germany","France", "Sweden"];
console.log(favPlaces);
console.log(favPlaces.toSorted());
console.log(favPlaces);
console.log(favPlaces.toReversed());
console.log(favPlaces);
console.log(favPlaces.reverse());
console.log(favPlaces);
console.log(favPlaces.reverse());
console.log(favPlaces);
console.log(favPlaces.sort());
console.log(favPlaces);
console.log(favPlaces.reverse());
console.log(favPlaces);

//Q.19
console.log(guests.length);
console.log(guests2.length);
console.log(guests3.length);

//Q.20
let pakCities = ["Lahore", "Karachi", "Islamabad", "Sargodha"];
let saudiCities = ["Riyadh", "Jaddah", "Madinah", "Makkah"]
let cities = [...pakCities, ...saudiCities];
console.log(cities)

//Q.21
let identity = {name: "Ahmed", age: 18, gender: "male"};
let about = {isAlive: true, isEmployed: true, ownsCar: "Honda City"};
let Data = {...identity, ...about};
console.log(Data["ownsCar"]);

//Q.23
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
let skyColor = 'blue';
console.log("Is sky == 'blue'? I predict True.");
console.log(skyColor == 'blue');
let sunSetsIn = 'west';
console.log("Is sunSetsIn == 'west'? I predict True.");
console.log(sunSetsIn == 'west');
let weekDays = 7;
console.log("Is weekDays == 7? I predict True.");
console.log(weekDays == 7);
let sunColor = "yellow";
console.log("Is sunColor = 'yellow'? I predict True.");
console.log(sunColor == "yellow");
let locationLahore = "Punjab";
console.log("Is locationLahore = 'Sindh'? I predict False.");
console.log(locationLahore == "Sindh");
let carTyres = 4;
console.log("Is carTyres = 2? I predict False.");
console.log(carTyres == 2);
let independeceDay = "14 August";
console.log("Is independeceDay = '15 August'? I predict False.");
console.log(independeceDay == "15 August");
let sun = "star";
console.log("Is sun = 'planet'? I predict False.");
console.log(sun == "planet");
let apple = "fruit";
console.log("Is apple = 'vegetable'? I predict False.");
console.log(apple == "vegetable");

//Q.23
console.log("With Strings");
let string1 = "Ready";
let string2 = "Not Ready";
let string3 = "Ready";
console.log(string1 == string2);
console.log(string1 == string3);
console.log(string1 != string2);
console.log(string1 != string3);
let string4 = "ready";
let string5 = "ready";
console.log(string1 == string4);
console.log(string4 == string5);
let num1 = 6;
let num2 = 6;
let num3 = 9;
console.log("With Numbers");
console.log(num1 == num2);
console.log(num2 == num3);
console.log(num1 > num2);
console.log(num3 > num2);
console.log(num1 < num2);
console.log(num2 < num3);
console.log(num2 >= num3);
console.log(num3 >= num2);
console.log(num3 <= num2);
console.log(num1 <= num2);
console.log("With and, or");
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log("With Array");
let sArr = [3, 5, 7, 9];
console.log(sArr.includes(6,0));
console.log(sArr.includes(5,0));
console.log((sArr[0]!=2) && (sArr[1]!=2) && (sArr[2]!=2 && (sArr[3]!=2)))
console.log((sArr[0]!=2) && (sArr[1]!=5) && (sArr[2]!=2 && (sArr[3]!=2)))

//Q.25
let alien_color = "green";
if (alien_color == "green") {
    console.log ("The Player just earned 5 points.")
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log ("The Player just earned 5 points.")
}

//Q.26
alien_color = "green";
if (alien_color == "green") {
    console.log ("The Player just earned 5 points for shooting the alien.")
} else {
    console.log ("The Player just earned 10 points.")
}
alien_color = "red";
if (alien_color == "green") {
    console.log ("The Player just earned 5 points for shooting the alien.")
} else {
    console.log ("The Player just earned 10 points.")
}

//Q.27
alien_color = "green";
if (alien_color == "green") {
    console.log ("The Player earned 5 points.")
} else if (alien_color == "yellow") {
    console.log ("The Player earned 10 points.")
} else {
    console.log ("The Player earned 15 points.")
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log ("The Player earned 5 points.")
} else if (alien_color == "yellow") {
    console.log ("The Player earned 10 points.")
} else {
    console.log ("The Player earned 15 points.")
}
alien_color = "red";
if (alien_color == "green") {
    console.log ("The Player earned 5 points.")
} else if (alien_color == "yellow") {
    console.log ("The Player earned 10 points.")
} else {
    console.log ("The Player earned 15 points.")
}

//Q.28
let age = 55;
if (age < 2) {
    console.log ("The person is a baby.")
} else if (age >= 2 && age < 4) {
    console.log ("The person is a toddler.")
} else if (age >= 4 && age < 13) {
    console.log ("The person is a kid.")
} else if (age >= 13 && age < 20) {
    console.log ("The person is a teenager.")
} else if (age >= 20 && age < 65 ) {
    console.log ("The person is an adult.")
} else if (age >= 65) {
    console.log ("The person is an elder.")
}

//Q.29
let favorite_fruits = ["strawberrie", "peach", "mangoes"];
if (favorite_fruits.includes("pineapple")) {
    console.log ("I really like pineapple")
}
if (favorite_fruits.includes("apple")) {
    console.log ("I really like apple")
}
if (favorite_fruits.includes("peach")) {
    console.log ("I really like peach")
}
if (favorite_fruits.includes("mangoes")) {
    console.log ("I really like mangoes")
}
if (favorite_fruits.includes("bananas")) {
    console.log ("I really like bananas")
}

//Q.30
let usernames = ["admin", "ali", "karim", "sarah", "john"]
for (let i = 0; i<usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log(`Hello ${usernames[i]}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}

//Q.31
if (usernames.length == 0) {
   console.log("We need to find some users.")
}
while(usernames.length >0){
    usernames.pop();
}
if (usernames.length == 0) {
    console.log("We need to find some users.")
 }

 //Q.32
 let current_users = ["hasan", "simab", "CHLOE", "eric", "chris"];
 let new_users = ["sam", "simab", "trevor", "chloe", "chris"];
 for (let i = 0; i<new_users.length; i++){
    let userNameExists  = false;
    for (let j = 0; j<current_users.length; j++){
        let upper1 = new_users[i].toUpperCase();
        let upper2 = current_users[j].toUpperCase();
        if (new_users[i] == current_users[j] || upper1 == upper2) {
            userNameExists = true;
            break;
        }
    }
    if (!userNameExists) {
        console.log(`The username ${new_users[i]} is available.`);
    } else {
        console.log(`The username ${new_users[i]} is already taken.Enter a new username.`);
    }
 }

 //Q.33
 let cordinal_num = [1,2,3,4,5,6,7,8,9]
 for (let i = 0; i<cordinal_num.length; i++){
    if (cordinal_num[i] == 1) {
        console.log(`${cordinal_num[i]}st`);
    } else if (cordinal_num[i] == 2) {
        console.log(`${cordinal_num[i]}nd`);
    } else if (cordinal_num[i] == 3) {
        console.log(`${cordinal_num[i]}rd`);
    } else {
        console.log(`${cordinal_num[i]}th`)
    }
 }

 //Q.34
 let pizza = ["Pepproni Pizza", "Fajita Pizza", "Vegetable Pizza"];
 for (let i = 0; i<pizza.length; i++){
    console.log(pizza[i]); 
 }
 for (let i = 0; i<pizza.length; i++){
    console.log(`I love to eat ${pizza[i]}.`); 
 }
 console.log(`My three favourite pizzas are ${pizza[0]}, ${pizza[1]} and ${pizza[2]}. ${pizza[0]} is a bit cheesy, whereas ${pizza[1]} is for spice lovers. Sometimes, I like to keep it simple by eating a ${pizza[2]}. If I ever dine-out, my preferred eatry will always be a pizza place. I really love pizza.`)

 //Q.35
 let animals = ["Deer", "Cheetah", "Horse"];
 for (let i = 0; i<animals.length; i++){
    console.log(animals[i]); 
 }
 for (let i = 0; i<animals.length; i++){
    console.log(`You cannot beat ${animals[i]} at running.`); 
 }
 console.log(`${animals[0]}, ${animals[1]} and ${animals[2]} run very fast. It is impossible to match their speed.`)


//Q.36
// function make_shirt(size: string, message:string){
//     console.log(`We have confirmed your shirt order for "${size}" size, which will have "${message}" printed on front side.`)
// }
// make_shirt("XL", "Today is gonna be another tomorrow. So do it today!")

//Q.37
// function make_shirt(size:string = "L", message: string){
//     console.log(`We have confirmed your shirt order for "${size}" size, which will have "${message}" printed on front side.`)
// }
// make_shirt(undefined, "I love Typescript")
// function make_shirt(size:string, message: string = "I Love Typescript"){
//     console.log(`We have confirmed your shirt order for "${size}" size, which will have "${message}" printed on front side.`)
// }
// make_shirt("M")
// function make_shirt(size:string, message: string = "I Love Typescript"){
//     console.log(`We have confirmed your shirt order for "${size}" size, which will have "${message}" printed on front side.`)
// }
// make_shirt("L")
function make_shirt(size:string = "S", message: string = "I Love Coding"){
    console.log(`We have confirmed your shirt order for "${size}" size, which will have "${message}" printed on front side.`)
}
make_shirt()

//Q.38
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`)
}
describe_city("Karachi")
describe_city("Sydney", "Australia")
describe_city("Sahiwal")

//Q.39
function city_country(city: string, country: string) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Sydney", "Australia"));

//Q.40
// function make_album(artistName: string, albumTitle: string){
//         return `artistName: ${artistName}
//         albumTitle: ${albumTitle}`
// }
console.log(make_album("Lana Del Rey", "Born To Die"));
console.log(make_album("Taylor Swift", "Lover"));
console.log(make_album("Halsey", "Manic"));
function make_album(artistName: string, albumTitle: string, noOfTracks?: number ){
    if (noOfTracks != undefined && noOfTracks !=0 && noOfTracks > 0) {
        return `artistName: ${artistName}
        albumTitle: ${albumTitle}
        noOfTracks: ${noOfTracks}`}
    else {
        return `artistName: ${artistName}
        albumTitle: ${albumTitle}`}
}
console.log(make_album("Adele", "25", 11));

//Q.41
let magicians = ["David Blaine", "Dynamo", "Teller", "Harry Houdini"];
function show_magicians(array: string[]){
    array.forEach(element => {
        console.log(element);
    });
}
// show_magicians(magicians);

//Q.42
function make_great(array: string[]){
    array.forEach((element, index) => {
        array[index] = element + " the Great"
    });
}
// make_great(magicians);
// show_magicians(magicians);

//Q.43
let magicians_copy = [...magicians]
make_great(magicians_copy);
show_magicians(magicians);
show_magicians(magicians_copy);

//Q.44
function make_your_sandwich(ingredients: string[]){
    let order = "You want"
    ingredients.forEach((element,index) => {
        if (index == (ingredients.length-2)){
            order = order + " " + element + " and "
        } else if (index == (ingredients.length-1)){
            order = order + element + " on your sandwich.";
        } else {
            order = order + " " + element + ","
        }
    });
    console.log(order);
}
make_your_sandwich(["tomatoes", "halapeneos", "mushrooms", "olives", "cheese", "chicken"])
make_your_sandwich(["tomatoes", "lettuce", "olives", "cheese", "onions", "chicken"])
make_your_sandwich(["mushrooms", "olives", "cheese", "chicken" , "salami", "sausages"])

//Q.45
interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; 
}
function carInfo(manufacturer: string, modelName: string, ...args: any[]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (let i = 0; i < args.length; i += 2) {
        let key = args[i];
        let value = args[i + 1];
        car[key] = value;
    }
    return car;
}
let createCar: Car = carInfo('Toyota', 'Camry', 'color', 'Blue', 'year', 2023, 'automatic', true);
console.log(createCar);