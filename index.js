"use strict";

console.log("Day trip Generator");

// Array decalared to store multiple values for day trip []
let dest =["Cali", "Vegas", "Texas", "Utah"];
let rest =["FreeBird", "Chipotle", "Pluckers", "BrickHouse"];
let trans =["car", "motorcycle", "uber", "bus"];
let enter =["movies", "dancing", "shootingRange", "seaWorld"];

// Return function for random trip selected
function randomTrip(paramTrip){
    let randomNumber = Math.floor(Math.random() * 4);
    return paramTrip[randomNumber]
}

let randomDest = randomTrip(dest);
let randomRest = randomTrip(rest);
let randomTrans = randomTrip(trans);
let randomEnter = randomTrip(enter);

//Conditional if/else if statement
let userInput = prompt("Are you happy with your day trip?");
if(userInput === "yes"){
    console.log("Yes I'm very happy with my trip!!!");

}
else if(userInput >= "no"){
    console.log("Randomly re-select my trip");
    alert("Trip has been randomly re-selected");
    randomDest = randomTrip(dest);
    randomRest = randomTrip(rest);
    randomTrans = randomTrip(trans);
    randomEnter = randomTrip(enter);

//Loop (While) for re-selecting day trip
    let rando = 1;
    while(rando < 2){
    console.log("re-selected day trip " + rando);
    rando++;
        
    
    }
    
}
//function with prompt to confirm trip in console.log
let user = prompt("Please type yes, to confirm your trip");
    console.log("completed trip");

//Calling a function for random day trip
console.log("My first destination will be " + randomDest + " Then go check out the restaurant " + randomRest + ", from there my transportation will be riding " + randomTrans + " so we can check out the entertainment when we go " + randomEnter);

