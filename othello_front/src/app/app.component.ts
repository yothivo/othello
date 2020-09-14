import { Component } from '@angular/core';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // white: 1, black: 2
  board: number[][];
  turn = 1;

  ngOnInit() {
    this.initBoard();
  }

  initBoard(): void {
    this.board = new Array(8);
    for (let i = 0; i < 8; i++) {
      this.board[i] = new Array(8).fill(0);
    }

    this.board[3][3] = 1;
    this.board[3][4] = 2;
    this.board[4][3] = 2;
    this.board[4][4] = 1;
  }

  getCellClass(cell: number): string {
    const cellClass = {
      0 : "",
      1 : "white",
      2 : "black"
    }

    return cellClass[cell];
  }

  onClickCell(row: number, col: number): void {

    if (this.checkReverse(row, col) == 1){
      this.reverse(row, col);
      this.board[row][col] = this.turn;
      this.turn = 3 - this.turn
    }

  }

  checkReverse(row: number, col: number): number {
    if (this.board[row][col] != 0) {
      return 0;
    }

    if (this.subCheckReverse(row, col,  1,  1) == 1) return 1;
    if (this.subCheckReverse(row, col,  1,  0) == 1) return 1;
    if (this.subCheckReverse(row, col,  1, -1) == 1) return 1;
    if (this.subCheckReverse(row, col,  0,  1) == 1) return 1;
    if (this.subCheckReverse(row, col,  0, -1) == 1) return 1;
    if (this.subCheckReverse(row, col, -1,  1) == 1) return 1;
    if (this.subCheckReverse(row, col, -1,  0) == 1) return 1;
    if (this.subCheckReverse(row, col, -1, -1) == 1) return 1;

    return 0;
  }

  subCheckReverse(row: number, col: number, addRow: number, addCol: number): number {
    row += addRow;
    col += addCol;

    if (row < 0 || row > 7 || col < 0 || col > 7) {
      return 0;
    }
    if (this.board[row][col] == 0) {
      return 0;
    }
    if (this.board[row][col] == this.turn) {
      return 0;
    }

    while (1){
      row += addRow;
      col += addCol;

      if (row < 0 || row > 7 || col < 0 || col > 7) {
        return 0;
      }
      if (this.board[row][col] == 0) {
        return 0;
      }
      if (this.board[row][col] == this.turn) {
        return 1;
      }
    }
  }

  reverse(row: number, col: number): void {
    if (this.subCheckReverse(row, col,  1,  1) == 1) {
      this.subReverse(row, col,  1,  1);
    }
    if (this.subCheckReverse(row, col,  1,  0) == 1) {
      this.subReverse(row, col,  1,  0);
    }
    if (this.subCheckReverse(row, col,  1, -1) == 1) {
      this.subReverse(row, col,  1, -1);
    }
    if (this.subCheckReverse(row, col,  0,  1) == 1) {
      this.subReverse(row, col,  0,  1);
    }
    if (this.subCheckReverse(row, col,  0, -1) == 1) {
      this.subReverse(row, col,  0, -1);
    }
    if (this.subCheckReverse(row, col, -1,  1) == 1) {
      this.subReverse(row, col, -1,  1);
    }
    if (this.subCheckReverse(row, col, -1,  0) == 1) {
      this.subReverse(row, col, -1,  0);
    }
    if (this.subCheckReverse(row, col, -1, -1) == 1) {
      this.subReverse(row, col, -1, -1);
    }
  }

  subReverse(row: number, col: number, addRow: number, addCol: number): void {
    row += addRow;
    col += addCol;

    this.board[row][col] = this.turn;

    while(1){
      row += addRow;
      col += addCol;
  
      if(this.board[row][col] == this.turn) {
        return;
      }
      this.board[row][col] = this.turn;
    }
  }


}
