import { Move, Player, Square } from '../board';
import { Piece } from '../Piece';


export class Pawn implements Piece {
    player: Player;
    square: Square;
    hasMoved: boolean;
    constructor(player: Player, square: Square) {
        this.player = player;
        this.square = square;
        this.hasMoved = false;
    }
    moves(board: (Piece | null)[][]) {
        let valid: Array<Move>;
        valid = [];

        //white pawns can only move up
        if (this.player == Player.WHITE) {
            //if white pawn isn't at the end of the board
            if (this.square.squareY < 7) {
                //if square in front is empty it can move forward
                if (board[this.square.squareX][this.square.squareY + 1] == null) {
                    //if both squares in front of pawn are empty it can move forward
                    if (this.hasMoved == false && board[this.square.squareX][this.square.squareY + 2] == null) {
                        let move: Move = {
                            piece: this,
                            endingSquare: {
                                squareX: this.square.squareX,
                                squareY: (this.square.squareY + 2)
                            },
                            enPassant: false,
                            castle: false
                        }
                        valid.push(move)
                    }
                    let move: Move = {
                        piece: this,
                        endingSquare: {
                            squareX: this.square.squareX,
                            squareY: (this.square.squareY + 1)
                        },
                        enPassant: false,
                        castle: false
                    }
                    valid.push(move)
                }
                //if pawn is not at right side of the board
                if (this.square.squareX < 7) {
                    //if there is an opposing piece up and to the right of the pawn it can take it
                    if (board[this.square.squareX + 1][this.square.squareY + 1]) {
                        if (board[this.square.squareX + 1][this.square.squareY + 1]!.player == Player.BLACK) {
                            let move: Move = {
                                piece: this,
                                endingSquare: {
                                    squareX: (this.square.squareX + 1),
                                    squareY: (this.square.squareY + 1)
                                },
                                enPassant: false,
                                castle: false
                            }
                            valid.push(move)
                        }
                    }
                }
                //pawn is not all the way on the left of board
                if (this.square.squareX > 0) {
                    //if black piece is up and to the left then capture it
                    if (board[this.square.squareX - 1][this.square.squareY + 1]) {
                        if (board[this.square.squareX - 1][this.square.squareY + 1]!.player == Player.BLACK) {
                            let move: Move = {
                                piece: this,
                                endingSquare: {
                                    squareX: (this.square.squareX - 1),
                                    squareY: (this.square.squareY + 1)
                                },
                                enPassant: false,
                                castle: false
                            }
                            valid.push(move)
                        }
                    }
                }
            }
        }
        //black pawns can only move down
        else {
            // if black pawn isn't on first rank
            if (this.square.squareY > 0) {
                //if square below it is empty it can move there
                if (board[this.square.squareX][this.square.squareY - 1] == null) {
                    //if both squares below were empty it can move there
                    if (this.hasMoved == false && board[this.square.squareX][this.square.squareY - 2] == null) {
                        let move: Move = {
                            piece: this,
                            endingSquare: {
                                squareX: this.square.squareX,
                                squareY: (this.square.squareY - 2)
                            },
                            enPassant: false,
                            castle: false
                        }
                        valid.push(move)
                    }
                    let move: Move = {
                        piece: this,
                        endingSquare: {
                            squareX: this.square.squareX,
                            squareY: (this.square.squareY - 1)
                        },
                        enPassant: false,
                        castle: false
                    }
                    valid.push(move)
                }
                //if pawn isn't all the way on the right
                if (this.square.squareX < 7) {
                    //if there is a white piece down and to the right then it can be captured
                    if (board[this.square.squareX + 1][this.square.squareY - 1]) {
                        if (board[this.square.squareX + 1][this.square.squareY - 1]!.player == Player.WHITE) {
                            let move: Move = {
                                piece: this,
                                endingSquare: {
                                    squareX: (this.square.squareX + 1),
                                    squareY: (this.square.squareY - 1)
                                },
                                enPassant: false,
                                castle: false
                            }
                            valid.push(move)
                        }
                    }
                }
                //if pawn isn't all the way on the left
                if (this.square.squareX > 0) {
                    //if there is a white piece below and to the left then you can capture it
                    if (board[this.square.squareX - 1][this.square.squareY - 1]) {
                        if (board[this.square.squareX - 1][this.square.squareY - 1]!.player == Player.WHITE) {

                            let move: Move = {
                                piece: this,
                                endingSquare: {
                                    squareX: (this.square.squareX - 1),
                                    squareY: (this.square.squareY - 1)
                                },
                                enPassant: false,
                                castle: false
                            }
                            valid.push(move)
                        }
                    }
                }
            }

        }
        return valid;
    }
    toString() {
        if (this.player == Player.WHITE) {
            return "WP"
        } else {
            return "BP"
        }
    }
}