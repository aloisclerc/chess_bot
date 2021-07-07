import { Board } from "./board";
import { Move, Square } from "./board";

let board = new Board();
board.start()

board.displayBoard();
for(let i = 0; i < 7; i++){
    for(let j = 0; j < 7; j++){
        let x = board.board_array[i][j];
        if(x != null){
            let moves = x.moves(board.board_array);
            for(let k = 0; k < moves.length; k++){
                console.log(i+" "+j+" x: " +  moves[k].endingSquare.squareX + " y: " + moves[k].endingSquare.squareY);
            }
        }
    }
}


let start: Square = {
    squareX: 3,
    squareY: 1
}
let end: Square = {
    squareX: 3,
    squareY: 3
}
let move: Move = {
    piece: board.board_array[3][1],
    endingSquare: end,
    enPassant: false,
    castle: false
}
board.move(move);

board.displayBoard();

if(board.board_array[3][3]){
    let moves = board.board_array[3][3].moves(board.board_array);
    for(let i = 0; i < moves.length; i++){
        console.log("x: " +  moves[i].endingSquare.squareX + " y: " + moves[i].endingSquare.squareY);
    }
}