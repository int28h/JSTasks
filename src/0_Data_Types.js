/*
 * Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor below. 
 * You must use the + operator to perform the following sequence of operations:
 *
 * 1. Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result 
 * on a new line using console.log.
 *
 * 2. Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and 
 * print the result on a new line using console.log.
 *
 * Print the concatenation of firstString and secondString on a new line using console.log. 
 * Note that firstString must be printed first.
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

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    
    console.log(Number(firstInteger) + Number(secondInteger));
    console.log(Number(firstDecimal) + Number(secondDecimal));
    console.log(firstString + secondString);
    
}

function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}
