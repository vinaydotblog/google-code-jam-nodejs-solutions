// solution for http://code.google.com/codejam/contest/351101/dashboard#s=p1
// usage: >node reverse_words.js A-small.practice.in > A-small.practice.out
'use strict';
var fs = require('fs'),
    filePath = process.argv[2], // absolute path of the file given
    contentLines = fs.readFileSync(filePath,'utf-8').split('\n').filter(String).slice(1);

contentLines.forEach(function(line,i){
    console.log('Case #'+(i+1)+': '+line.split(' ').reverse().join(' '));
});