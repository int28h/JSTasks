/*
 * Complete the function in the editor. It has one parameter: an array, a, of objects. 
 * Each object in the array has two integer properties denoted by x and y. 
 * The function must return a count of all such objects o in array a that satisfy o.x == o.y.
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

function getCount(objects) {
    var result = 0;
    for (let i = 0; i < objects.length; i++) {
        if(objects[i].x == objects[i].y){
            result++;
        }
    }
    return result;
}

function main() {
    const n = +(readLine());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}