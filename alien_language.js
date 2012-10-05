// solution for : http://code.google.com/codejam/contest/90101/dashboard#s=p0
// Example usage: >node alien_language.js A-small.practice.in > A-small.practice.out
'use strict';
var fs = require('fs'),
    knownWordsArray = [],
    i,j = 1,
    filepath = process.argv[2],
    contentLines = fs.readFileSync(filepath, 'utf-8').replace(/\r/g, '').split('\n').filter(String),
    inputData = contentLines.shift().split(' '),
    numberOfKnownWords = parseInt(inputData[1], 10);

for (i = 0; i < numberOfKnownWords; i++) {
        knownWordsArray.push(contentLines[i].match(/[a-z]{1}/g));
}

for (i = numberOfKnownWords; i < contentLines.length; i++) {

        var tokens = contentLines[i].match(/(\([a-z]+\)|[a-z]{1})/g),
            possibleMatches = knownWordsArray.slice();

        tokens.forEach(function (item, index) {
                possibleMatches = possibleMatches.filter(function (possibleMatch) {
                        return item.indexOf(possibleMatch[index]) > -1;
                });
        });

        console.log('Case #' + (j++) + ': ' + possibleMatches.length);
}