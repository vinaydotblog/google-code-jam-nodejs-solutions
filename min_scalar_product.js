// solution for http://code.google.com/codejam/contest/32016/dashboard#s=p0 
// Example usage: >node min_scalar_product.js A-small.practice.in > A-small.practice.out
'use strict';
var fs = require('fs'),
	vectorPairsArray = [],
	filepath = process.argv[2],
	contentLines = fs.readFileSync(filepath, 'utf-8').split('\n').slice(1); // first item is the number of test cases

// calculates minimum scalar product for the given two vectors
function calculateMinScalarProduct(vector1, vector2) {

	var product = 0;

	vector1.forEach(function (value, index) {
		product = product + (value * vector2[index]);
	});
	return product;
}

contentLines.forEach(function (line, i) {
	if (i % 3 === 1) {
		var vectorPair = [];
		vectorPair.push(contentLines[i].split(' ').map(function (item) {
			return parseInt(item, 10);
		}));
		vectorPair.push(contentLines[i + 1].split(' ').map(function (item) {
			return parseInt(item, 10);
		}));
		vectorPairsArray.push(vectorPair);
	}
});

vectorPairsArray.forEach(function (currentPair, j) {

	var minProduct = calculateMinScalarProduct(currentPair[0].sort(function (a, b) { return a - b; }), // ascending
												currentPair[1].sort(function (a, b) { return b - a; }) // descending
												);

	console.log('Case #' + (j + 1) + ': ' + minProduct);
});

