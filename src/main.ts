import { Board } from "./board";
import { Move, Square } from "./board";

let board = new Board();
board.start()

board.displayBoard();
let start: Square = {
    squareX: 3,
    squareY: 1
}
let end: Square = {
    squareX: 3,
    squareY: 3
}
let move: Move = {
    startingSquare: start,
    endingSquare: end,
    enPassant: false,
    castle: false
}
board.move(move);

board.displayBoard();