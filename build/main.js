"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
var board = new board_1.Board();
board.start();
board.displayBoard();
var start = {
    squareX: 3,
    squareY: 1
};
var end = {
    squareX: 3,
    squareY: 3
};
var move = {
    startingSquare: start,
    endingSquare: end,
    enPassant: false,
    castle: false
};
board.move(move);
board.displayBoard();
