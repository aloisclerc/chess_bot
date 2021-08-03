import { Piece } from './Piece';
import { Pawn } from './pieces/Pawn';
import { Rook } from './pieces/Rook';
import { Knight } from './pieces/Knight';
import { Bishop } from './pieces/Bishop';
import { King } from './pieces/King';
import { Queen } from './pieces/Queen';

export class Board {
    board_array: (Piece | null)[][];
    turn: number;

    constructor() {
        //Each array is a row starting from row 1 and going to row 8

        this.board_array = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ];
        this.turn = 0;
    }

    start() {
        let wr1 = new Rook(Player.WHITE, { squareX: 0, squareY: 0 });
        let wr2 = new Rook(Player.WHITE, { squareX: 7, squareY: 0 });
        let wn1 = new Knight(Player.WHITE, { squareX: 1, squareY: 0 });
        let wn2 = new Knight(Player.WHITE, { squareX: 6, squareY: 0 });
        let wb1 = new Bishop(Player.WHITE, { squareX: 2, squareY: 0 });
        let wb2 = new Bishop(Player.WHITE, { squareX: 5, squareY: 0 });
        let wq = new Queen(Player.WHITE, { squareX: 3, squareY: 0 });
        let wk = new King(Player.WHITE, { squareX: 4, squareY: 0 });

        let wp: Piece[] = [];
        for (let i = 0; i < 8; i++) {
            wp.push(new Pawn(Player.WHITE, { squareX: i, squareY: 1 }))
        }



        let br1 = new Rook(Player.BLACK, { squareX: 0, squareY: 7 });
        let br2 = new Rook(Player.BLACK, { squareX: 7, squareY: 7 });
        let bn1 = new Knight(Player.BLACK, { squareX: 1, squareY: 7 });
        let bn2 = new Knight(Player.BLACK, { squareX: 6, squareY: 7 });
        let bb1 = new Bishop(Player.BLACK, { squareX: 2, squareY: 7 });
        let bb2 = new Bishop(Player.BLACK, { squareX: 5, squareY: 7 });
        let bq = new Queen(Player.BLACK, { squareX: 3, squareY: 7 });
        let bk = new King(Player.BLACK, { squareX: 4, squareY: 7 });
        let bp: Piece[] = [];
        for (let i = 0; i < 8; i++) {
            bp.push(new Pawn(Player.BLACK, { squareX: i, squareY: 6 }))
        }
        this.board_array = [
            [wr1, wp[0], null, null, null, null, bp[0], br1],
            [wn1, wp[1], null, null, null, null, bp[1], bn1],
            [wb1, wp[2], null, null, null, null, bp[2], bb1],
            [wq, wp[3], null, null, null, null, bp[3], bq],
            [wk, wp[4], null, null, null, null, bp[4], bk],
            [wb2, wp[5], null, null, null, null, bp[5], bb2],
            [wn2, wp[6], null, null, null, null, bp[6], bn2],
            [wr2, wp[7], null, null, null, null, bp[7], br2]
        ];
    }

    move(move: Move) {
        if (move.piece) {
            //move should be of format ""
            this.board_array[move.piece.square.squareX][move.piece.square.squareY] = null;
            this.board_array[move.endingSquare.squareX][move.endingSquare.squareY] = move.piece;
            // update piece with new coords
            move.piece.square.squareX = move.endingSquare.squareX;
            move.piece.square.squareY = move.endingSquare.squareY;
            move.piece.hasMoved = true;
        }

    }

    getSquare(x: number, y: number) {
        return this.board_array[x][y];
    }

    displayBoard() {
        for (let i = 7; i >= 0; i--) {

            let rowString = "| "
            console.log("-----------------------------------------");
            for (let j = 0; j < 8; j++) {
                let piece = this.board_array[j][i];
                if (piece == null) {
                    rowString = rowString.concat("  " + " | ");
                } else {
                    rowString = rowString.concat(piece.toString() + " | ");
                }

            }
            console.log(rowString);


        }
        console.log("-----------------------------------------");
    }


}

export type Move = {
    //REMOVE THE NULL ALLOWANCE IN THE MOVE FUNCTION ONCE TESTING IS COMPLETE
    piece: Piece | null;
    endingSquare: Square;
    enPassant: boolean;
    castle: boolean;
}

export enum Player {
    WHITE, BLACK
}

export type Square = {
    squareX: number,
    squareY: number
}


