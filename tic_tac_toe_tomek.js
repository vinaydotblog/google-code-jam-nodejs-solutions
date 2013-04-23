// solution for http://code.google.com/codejam/contest/2270488/dashboard#s=p0
// usage: >node tic_tac_toe_tomek.js A-small.practice.in > A-small.practice.out
'use strict';
var contentLines = require('fs').readFileSync(process.argv[2],'utf-8').split('\n'),
    T = parseInt(contentLines[0],10);

for (var t = 0; t < T; t++) {
    var result = 'Case #'+(t+1)+': ',
        board = [],
        input = '';

    for(var j = 1; j < 5; j++) {
        board[j-1] = contentLines[(t*4)+t+j].split('');
    }
    for(var r=0;r<4;r++) {
        input += board[0][r]+board[1][r]+board[2][r]+board[3][r]+' '+board[r].join('')+' ';
    }
    input += ' '+board[0][0]+board[1][1]+board[2][2]+board[3][3]+' '+board[0][3]+board[1][2]+board[2][1]+board[3][0];
    if(/[XT]{4}/.test(input)) {
        result += 'X won';
    } else if(/[OT]{4}/.test(input)) {
        result += 'O won';
    }else if(/\./.test(input)) {
        result += 'Game has not completed';
    } else {
        result += 'Draw';
    }
    console.log(result);
}