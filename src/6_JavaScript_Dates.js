/*
 * Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. 
 * Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.
 * For example, the day name for the date 12/07/2016 is Wednesday.
 */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let day = new Date(dateString).getDay();
    switch(day) {            
        case 0 : return "Sunday";
        case 1 : return "Monday";
        case 2 : return "Tuesday";
        case 3 : return "Wednesday";
        case 4 : return "Thursday";
        case 5 : return "Friday";
        case 6 : return "Saturday";
    }
}

function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}