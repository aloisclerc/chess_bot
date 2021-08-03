import { Piece } from "../Piece";
import { Player, Square, Move } from "../board";

export class Queen implements Piece {
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
            return "WQ"
        } else {
            return "BQ"
        }
    }
}