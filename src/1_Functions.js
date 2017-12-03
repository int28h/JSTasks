/*
 * Implement a function named factorial that has one parameter: an integer, n. 
 * It must return the value of n! (i.e., n factorial).
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

function factorial(n){
    var result = 1;
    for(var i = 1; i < n + 1; i++) {
        result *= i;
    }
    return result;
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}