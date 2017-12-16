/*
 * Complete the function in the editor below by returning a RegExp object, re, that matches any string s 
 * satisfying both of the following conditions:
 * String starts with the prefix Mr., Mrs., Ms., Dr., or Er.
 * The remainder of string (i.e., the rest of the string after the prefix) consists of one or more 
 * upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
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

function regexVar() { 
    const re = new RegExp('^(?:Mr|Mrs|Ms|Dr|Er)\\.[a-zA-Z]+$');
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}