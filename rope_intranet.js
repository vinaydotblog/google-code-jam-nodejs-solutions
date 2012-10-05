// solution for http://code.google.com/codejam/contest/619102/dashboard#s=p0
// usage: >node rope_intranet.js A-small.practice.in > A-small.practice.out
'use strict';
var fs = require('fs'),
    filePath = process.argv[2],
    i=0,c=1,
    wires=[],
    contentLines = fs.readFileSync(filePath,'utf-8').split('\n').filter(String).slice(1);

while(i<contentLines.length) {
    var numberOfWires = parseInt(contentLines[i],10),
        wires = [],
        intersections=0;

    for (var j = 0; j < numberOfWires; j++) {
        wires.push(contentLines[j+i+1].split(' ').map(function(item){ return parseInt(item,10);}));
    };
    for (var j = 0; j < wires.length; j++) {
        for (var k = j+1; k < wires.length; k++) {
            if( ( wires[k][0]<wires[j][0] && wires[k][1]>wires[j][1] ) ||
                ( wires[k][0]>wires[j][0] && wires[k][1]<wires[j][1]) )
                intersections++;
        };
    };   

    console.log('Case #'+c+': '+intersections); 
    i=i+numberOfWires+1;
    c++;
}