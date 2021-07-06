export class Board {
    board_array: string[][]
    turn: number

    constructor() {
        //Each array is a row starting from row 1 and going to row 8
        this.board_array = [["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""]];
        this.turn = 0;
    }

    start() {
        this.board_array = [["WR", "WP", "", "", "", "", "BP", "BR"], ["WN", "WP", "", "", "", "", "BP", "BN"], ["WB", "WP", "", "", "", "", "BP", "BB"], ["WQ", "WP", "", "", "", "", "BP", "BQ"], ["WK", "WP", "", "", "", "", "BP", "BK"], ["WB", "WP", "", "", "", "", "BP", "BB"], ["WN", "WP", "", "", "", "", "BP", "BN"], ["WR", "WP", "", "", "", "", "BP", "BR"]];
    }

    move(move: Move){
        //move should be of format ""
        var temp = this.board_array[move.startingSquare.squareX][move.startingSquare.squareY];
        this.board_array[move.startingSquare.squareX][move.startingSquare.squareY] = "";
        this.board_array[move.endingSquare.squareX][move.endingSquare.squareY] = temp;
    }

    displayBoard(){
        for (let i = 7; i >= 0; i--) {

            let rowString = "| "
            console.log("-----------------------------------------");
            for (let j = 0; j < 8; j++) {
                let square = this.board_array[j][i];
                if(square == ""){
                    square = "  "
                }                
                rowString = rowString.concat(square+ " | ");
            }
            console.log(rowString);


        }
        console.log("-----------------------------------------");
    }


}

interface Piece {
    player: Player,
    square: Square,
    hasMoved: boolean;
}


export type Move = {
    startingSquare: Square;
    endingSquare: Square;
    enPassant: boolean;
    castle: boolean;
}

enum Player {
    WHITE, BLACK
}

export type Square = {
    squareX: number,
    squareY: number
}


