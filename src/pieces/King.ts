import { Piece } from "../Piece";
import { Player, Square, Move } from "../board";

export class King implements Piece {
    player: Player;
    square: Square;
    hasMoved: boolean;
    constructor(player: Player, square: Square) {
        this.player = player;
        this.square = square;
        this.hasMoved = false;
    }
    moves(board: (Piece | null)[][]) {

        return []
    }
    toString() {
        if (this.player == Player.WHITE) {
            return "WK"
        } else {
            return "BK"
        }
    }
}