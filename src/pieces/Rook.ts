import { Piece } from "../Piece";
import { Player, Square, Move } from "../board";


export class Rook implements Piece {
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
        let vert: boolean = true;
        let count: number = 1;
        while (vert) {
            if (this.square.squareY + count < 8 && !board[this.square.squareX][this.square.squareY + count]) {
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

            } else {
                vert = false;
            }
            count++
        }

        return valid
    }
    toString() {
        if (this.player == Player.WHITE) {
            return "WR"
        } else {
            return "BR"
        }
    }
}