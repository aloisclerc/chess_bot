"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
var board = new board_1.Board();
board.start();
board.displayBoard();
for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
        var x = board.board_array[i][j];
        if (x != null) {
            var moves = x.moves(board.board_array);
            for (var k = 0; k < moves.length; k++) {
                console.log(i + " " + j + " x: " + moves[k].endingSquare.squareX + " y: " + moves[k].endingSquare.squareY);
            }
        }
    }
}
var start = {
    squareX: 3,
    squareY: 1
};
var end = {
    squareX: 3,
    squareY: 3
};
var move = {
    piece: board.board_array[3][1],
    endingSquare: end,
    enPassant: false,
    castle: false
};
board.move(move);
board.displayBoard();
if (board.board_array[3][3]) {
    var moves = board.board_array[3][3].moves(board.board_array);
    for (var i = 0; i < moves.length; i++) {
        console.log("x: " + moves[i].endingSquare.squareX + " y: " + moves[i].endingSquare.squareY);
    }
}
