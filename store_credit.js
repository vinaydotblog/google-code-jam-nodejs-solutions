// solution for http://code.google.com/codejam/contest/351101/dashboard#s=p0
// usage: >node store_credit.js A-small.practice.in > A-small.practice.out
'use strict';
var fs = require('fs'),
    filePath = process.argv[2],
    contentLines = fs.readFileSync(filePath,'utf-8').split('\n').filter(String).slice(1);

for (var i = 0; i < contentLines.length; i=i+3) {
    var credits = parseInt(contentLines[i],10),
        items = contentLines[i+2].split(' ').map(function (item) { return parseInt(item, 10); });
        for (var j = 0; j < items.length; j++) {
            for (var k = j+1; k < items.length; k++) {
                if(items[k]+items[j] === credits )
                    console.log('Case #'+(i/3 + 1)+': '+(j+1) + ' ' + (k+1)); 
            };
        };     
};