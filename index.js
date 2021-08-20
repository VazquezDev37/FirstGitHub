"use strict";

console.log("Hello World");


//Day trip Generator

// Arrays

let dest =["Cali", "Vegas", "Texas", "Utah"];
let rest =["FreeBird", "Chipotle", "Pluckers", "BrickHouse"];
let trans =["car", "motorcycle", "uber", "bus"];
let enter =["movies", "dancing", "shootingRange", "seaWorld"];

function randomTrip(paramTrip){
    let randomNumber = Math.floor(Math.random() * 4);
    return paramTrip[randomNumber]
}

let randomDest = randomTrip(dest);
let randomRest = randomTrip(rest);
let randomTrans = randomTrip(trans);
let randomEnter = randomTrip(enter);

console.log("My first destination will be " + randomDest + " Then go check out the restaurant " + randomRest + ", from there my transportation will be riding " + randomTrans + " so we can check out the entertainment when we go " + randomEnter);

