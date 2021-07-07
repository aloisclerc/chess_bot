"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board() {
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
    Board.prototype.start = function () {
        var wr1 = new Rook(Player.WHITE, { squareX: 0, squareY: 0 });
        var wr2 = new Rook(Player.WHITE, { squareX: 7, squareY: 0 });
        var wn1 = new Knight(Player.WHITE, { squareX: 1, squareY: 0 });
        var wn2 = new Knight(Player.WHITE, { squareX: 6, squareY: 0 });
        var wb1 = new Bishop(Player.WHITE, { squareX: 2, squareY: 0 });
        var wb2 = new Bishop(Player.WHITE, { squareX: 5, squareY: 0 });
        var wq = new Queen(Player.WHITE, { squareX: 3, squareY: 0 });
        var wk = new King(Player.WHITE, { squareX: 4, squareY: 0 });
        var wp = [];
        for (var i = 0; i < 8; i++) {
            wp.push(new Pawn(Player.WHITE, { squareX: i, squareY: 1 }));
        }
        var br1 = new Rook(Player.BLACK, { squareX: 0, squareY: 7 });
        var br2 = new Rook(Player.BLACK, { squareX: 7, squareY: 7 });
        var bn1 = new Knight(Player.BLACK, { squareX: 1, squareY: 7 });
        var bn2 = new Knight(Player.BLACK, { squareX: 6, squareY: 7 });
        var bb1 = new Bishop(Player.BLACK, { squareX: 2, squareY: 7 });
        var bb2 = new Bishop(Player.BLACK, { squareX: 5, squareY: 7 });
        var bq = new Queen(Player.BLACK, { squareX: 3, squareY: 7 });
        var bk = new King(Player.BLACK, { squareX: 4, squareY: 7 });
        var bp = [];
        for (var i = 0; i < 8; i++) {
            bp.push(new Pawn(Player.BLACK, { squareX: i, squareY: 6 }));
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
    };
    Board.prototype.move = function (move) {
        if (move.piece) {
            //move should be of format ""
            this.board_array[move.piece.square.squareX][move.piece.square.squareY] = null;
            this.board_array[move.endingSquare.squareX][move.endingSquare.squareY] = move.piece;
            // update piece with new coords
            move.piece.square.squareX = move.endingSquare.squareX;
            move.piece.square.squareY = move.endingSquare.squareY;
            move.piece.hasMoved = true;
        }
    };
    Board.prototype.getSquare = function (x, y) {
        return this.board_array[x][y];
    };
    Board.prototype.displayBoard = function () {
        for (var i = 7; i >= 0; i--) {
            var rowString = "| ";
            console.log("-----------------------------------------");
            for (var j = 0; j < 8; j++) {
                var piece = this.board_array[j][i];
                if (piece == null) {
                    rowString = rowString.concat("  " + " | ");
                }
                else {
                    rowString = rowString.concat(piece.toString() + " | ");
                }
            }
            console.log(rowString);
        }
        console.log("-----------------------------------------");
    };
    return Board;
}());
exports.Board = Board;
var Pawn = /** @class */ (function () {
    function Pawn(player, square) {
        this.player = player;
        this.square = square;
        this.hasMoved = false;
    }
    Pawn.prototype.moves = function (board) {
        var valid;
        valid = [];
        if (this.player == Player.WHITE) {
            if (this.square.squareY < 7) {
                if (board[this.square.squareX][this.square.squareY + 1] == null) {
                    if (this.hasMoved == false && board[this.square.squareX][this.square.squareY + 2] == null) {
                        var move_1 = {
                            piece: this,
                            endingSquare: {
                                squareX: this.square.squareX,
                                squareY: (this.square.squareY + 2)
                            },
                            enPassant: false,
                            castle: false
                        };
                        valid.push(move_1);
                    }
                    var move = {
                        piece: this,
                        endingSquare: {
                            squareX: this.square.squareX,
                            squareY: (this.square.squareY + 1)
                        },
                        enPassant: false,
                        castle: false
                    };
                    valid.push(move);
                }
                if (this.square.squareX < 7) {
                    if (board[this.square.squareX + 1][this.square.squareY + 1]) {
                        var move = {
                            piece: this,
                            endingSquare: {
                                squareX: (this.square.squareX + 1),
                                squareY: (this.square.squareY + 1)
                            },
                            enPassant: false,
                            castle: false
                        };
                        valid.push(move);
                    }
                }
                if (this.square.squareX < 0) {
                    if (board[this.square.squareX - 1][this.square.squareY + 1]) {
                        var move = {
                            piece: this,
                            endingSquare: {
                                squareX: (this.square.squareX - 1),
                                squareY: (this.square.squareY + 1)
                            },
                            enPassant: false,
                            castle: false
                        };
                        valid.push(move);
                    }
                }
            }
        }
        else {
            if (this.square.squareY > 0) {
                if (board[this.square.squareX][this.square.squareY - 1] == null) {
                    if (this.hasMoved == false && board[this.square.squareX][this.square.squareY - 2] == null) {
                        var move_2 = {
                            piece: this,
                            endingSquare: {
                                squareX: this.square.squareX,
                                squareY: (this.square.squareY - 2)
                            },
                            enPassant: false,
                            castle: false
                        };
                        valid.push(move_2);
                    }
                    var move = {
                        piece: this,
                        endingSquare: {
                            squareX: this.square.squareX,
                            squareY: (this.square.squareY - 1)
                        },
                        enPassant: false,
                        castle: false
                    };
                    valid.push(move);
                }
                if (this.square.squareX < 7) {
                    if (board[this.square.squareX + 1][this.square.squareY - 1]) {
                        var move = {
                            piece: this,
                            endingSquare: {
                                squareX: (this.square.squareX + 1),
                                squareY: (this.square.squareY - 1)
                            },
                            enPassant: false,
                            castle: false
                        };
                        valid.push(move);
                    }
                }
                if (this.square.squareX < 0) {
                    if (board[this.square.squareX - 1][this.square.squareY - 1]) {
                        var move = {
                            piece: this,
                            endingSquare: {
                                squareX: (this.square.squareX - 1),
                                squareY: (this.square.squareY - 1)
                            },
                            enPassant: false,
                            castle: false
                        };
                        valid.push(move);
                    }
                }
            }
        }
        return valid;
    };
    Pawn.prototype.toString = function () {
        if (this.player == Player.WHITE) {
            return "WP";
        }
        else {
            return "BP";
        }
    };
    return Pawn;
}());
var Rook = /** @class */ (function () {
    function Rook(player, square) {
        this.player = player;
        this.square = square;
        this.hasMoved = false;
    }
    Rook.prototype.moves = function (board) {
        var valid;
        valid = [];
        var vert = true;
        var count = 1;
        while (vert) {
            if (this.square.squareY + count < 8 && !board[this.square.squareX][this.square.squareY + count]) {
                var move = {
                    piece: this,
                    endingSquare: {
                        squareX: this.square.squareX,
                        squareY: (this.square.squareY - 2)
                    },
                    enPassant: false,
                    castle: false
                };
                valid.push(move);
            }
            else {
                vert = false;
            }
            count++;
        }
        return valid;
    };
    Rook.prototype.toString = function () {
        if (this.player == Player.WHITE) {
            return "WR";
        }
        else {
            return "BR";
        }
    };
    return Rook;
}());
var Knight = /** @class */ (function () {
    function Knight(player, square) {
        this.player = player;
        this.square = square;
        this.hasMoved = false;
    }
    Knight.prototype.moves = function (board) {
        return [];
    };
    Knight.prototype.toString = function () {
        if (this.player == Player.WHITE) {
            return "WN";
        }
        else {
            return "BN";
        }
    };
    return Knight;
}());
var Bishop = /** @class */ (function () {
    function Bishop(player, square) {
        this.player = player;
        this.square = square;
        this.hasMoved = false;
    }
    Bishop.prototype.moves = function (board) {
        return [];
    };
    Bishop.prototype.toString = function () {
        if (this.player == Player.WHITE) {
            return "WB";
        }
        else {
            return "BB";
        }
    };
    return Bishop;
}());
var Queen = /** @class */ (function () {
    function Queen(player, square) {
        this.player = player;
        this.square = square;
        this.hasMoved = false;
    }
    Queen.prototype.moves = function (board) {
        return [];
    };
    Queen.prototype.toString = function () {
        if (this.player == Player.WHITE) {
            return "WQ";
        }
        else {
            return "BQ";
        }
    };
    return Queen;
}());
var King = /** @class */ (function () {
    function King(player, square) {
        this.player = player;
        this.square = square;
        this.hasMoved = false;
    }
    King.prototype.moves = function (board) {
        return [];
    };
    King.prototype.toString = function () {
        if (this.player == Player.WHITE) {
            return "WK";
        }
        else {
            return "BK";
        }
    };
    return King;
}());
var Player;
(function (Player) {
    Player[Player["WHITE"] = 0] = "WHITE";
    Player[Player["BLACK"] = 1] = "BLACK";
})(Player || (Player = {}));
