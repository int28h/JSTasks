/*
 * The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle 
 * to a tag function named sides. Recall that the first argument of a tag function is an array of string 
 * literals from the template, and the subsequent values are the template's respective expression values.
 * Complete the function in the editor so that it does the following:
 * 1. Finds the initial values of and by plugging the area and perimeter values into the formula: 
 * Math.sqrt(perimeter * perimeter - 16 * area);
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

function sides(literals, ...expressions) {
    const area = expressions[0];
    const perimeter = expressions[1];
    
    const d = Math.sqrt(perimeter * perimeter - 16 * area);
    
    const s1 = (perimeter + d) / 4;
    const s2 = area / s1;
    
    return [s1, s2].sort();
}

function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}