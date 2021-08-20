"use strict";

console.log("Day trip Generator");

// Arrays

let dest =["Cali", "Vegas", "Texas", "Utah"];
let rest =["FreeBird", "Chipotle", "Pluckers", "BrickHouse"];
let trans =["car", "motorcycle", "uber", "bus"];
let enter =["movies", "dancing", "shootingRange", "seaWorld"];

//function

function randomTrip(paramTrip){
    let randomNumber = Math.floor(Math.random() * 4);
    return paramTrip[randomNumber]
}

let randomDest = randomTrip(dest);
let randomRest = randomTrip(rest);
let randomTrans = randomTrip(trans);
let randomEnter = randomTrip(enter);

let userInput = prompt("Are you happy with your day trip?");
if(userInput === "yes"){
    console.log("Yes I'm very happy with my trip!!!");
}
else if(userInput == "no"){
    console.log("Randomly re-select my trip");
}


let user = prompt("Can you please confirm your day trip?");

    console.log("Complete.");


console.log("My first destination will be " + randomDest + " Then go check out the restaurant " + randomRest + ", from there my transportation will be riding " + randomTrans + " so we can check out the entertainment when we go " + randomEnter);

