/*
 * Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s, 
 * consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
 * 
 * First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, 
 * and each vowel must be printed in the same order as it appeared in s.
 *
 * Second, print each consonant (i.e., non-vowel) in on a new line in the same order as it appeared in s.
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

function vowelsAndConsonants(s) {
    var consolants = new Array();
    var vowels = new Array();
    
    for(var k = 0; k < s.length; k++){
        switch (s[k]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
              vowels.push(s[k]);
                break;
            default:
              consolants.push(s[k]);
        }
    }
    
    for(var i in vowels){
        console.log(vowels[i]);
    }
    for(var i in consolants){
        console.log(consolants[i]);
    }
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
