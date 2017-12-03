/*
 * A greeting function is provided for you in the editor below. It has one parameter, parameterVariable. 
 * Perform the following tasks to complete this challenge:
 *
 * Use console.log() to print "Hello, World!" on a new line in the console, which is also known as stdout or standard output. 
 * The code for this portion of the task is already provided in the editor.
 *
 * Use console.log() to print the contents of parameterVariable (i.e., the argument passed to main).
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

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable);
}

function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}