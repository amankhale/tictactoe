import { Component, OnInit } from '@angular/core';
import { Gamelogic } from '../gamelogic';
import { MatDialog } from '@angular/material/dialog';
import { XWinnerComponent } from '../x-winner/x-winner.component';
import { OWinnerComponent } from '../o-winner/o-winner.component';
import { GameDrawComponent } from '../game-draw/game-draw.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [Gamelogic]
})
export class BoardComponent implements OnInit {

  constructor(public gameLogic: Gamelogic, public dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.newGame();
  }
  
  newGame(){
    this.gameLogic.gameReset();

    const cell = document.querySelectorAll('.cell');
    const slider = document.querySelector('.slider');
    slider.classList.remove('slide');
    
    for(let i = 0; i < cell.length; i++){
      cell[i].innerHTML = '';
      cell[i].classList.remove('x-turn','o-turn');
    }
  }
  displayResult(){

    if(this.gameLogic.winner == 'X'){
      this.dialog.open(XWinnerComponent);
      this.newGame();
    }
    if(this.gameLogic.winner == 'O'){
      this.dialog.open(OWinnerComponent);
      this.newGame();
    }
    if(this.gameLogic.cellClicked == 9 && this.gameLogic.winner == ''){
      this.dialog.open(GameDrawComponent);
      this.newGame();
    }
  }
}
