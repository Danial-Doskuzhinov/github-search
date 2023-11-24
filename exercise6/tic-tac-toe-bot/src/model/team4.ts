import Bot from "./Bot";
import Piece from "../types/Piece.ts";

class Team4 extends Bot {
  constructor() {
    super("Team 4", "/public/team44.webp");
  }

  
  move(board: Piece[]) {
    
    if (board[4] === "") {
        return 4;
    }

    
    const corners = [0, 8, 6, 2];
    for (const corner of corners) {
        if (board[corner] === "") {
            return corner;
        }
    }

    
    return this.getRandomMove(board);
}

private getRandomMove(board: Piece[]) {
    
    const availableMoves = this.getAvailableMoves(board);

    if (availableMoves.length === 0) {
        
        return -1; 
    }

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
}

private getAvailableMoves(board: Piece[]) {
    const availableMoves: number[] = [];

    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            availableMoves.push(i);
        }
    }

    return availableMoves;
}


}

export default Team4;
    
