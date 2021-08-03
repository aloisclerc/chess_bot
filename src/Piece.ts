import { Move, Player, Square } from './board';

export interface Piece {
    player: Player,
    square: Square,
    hasMoved: boolean;
    moves: (board: (Piece | null)[][]) => (Move[])
    toString: () => (String)
}