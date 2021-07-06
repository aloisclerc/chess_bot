"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board() {
        //Each array is a row starting from row 1 and going to row 8
        this.board_array = [["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""]];
        this.turn = 0;
    }
    Board.prototype.start = function () {
        this.board_array = [["WR", "WP", "", "", "", "", "BP", "BR"], ["WN", "WP", "", "", "", "", "BP", "BN"], ["WB", "WP", "", "", "", "", "BP", "BB"], ["WQ", "WP", "", "", "", "", "BP", "BQ"], ["WK", "WP", "", "", "", "", "BP", "BK"], ["WB", "WP", "", "", "", "", "BP", "BB"], ["WN", "WP", "", "", "", "", "BP", "BN"], ["WR", "WP", "", "", "", "", "BP", "BR"]];
    };
    Board.prototype.move = function (move) {
        //move should be of format ""
        var temp = this.board_array[move.startingSquare.squareX][move.startingSquare.squareY];
        this.board_array[move.startingSquare.squareX][move.startingSquare.squareY] = "";
        this.board_array[move.endingSquare.squareX][move.endingSquare.squareY] = temp;
    };
    Board.prototype.displayBoard = function () {
        for (var i = 7; i >= 0; i--) {
            var rowString = "| ";
            console.log("-----------------------------------------");
            for (var j = 0; j < 8; j++) {
                var square = this.board_array[j][i];
                if (square == "") {
                    square = "  ";
                }
                rowString = rowString.concat(square + " | ");
            }
            console.log(rowString);
        }
        console.log("-----------------------------------------");
    };
    return Board;
}());
exports.Board = Board;
var Player;
(function (Player) {
    Player[Player["WHITE"] = 0] = "WHITE";
    Player[Player["BLACK"] = 1] = "BLACK";
})(Player || (Player = {}));
