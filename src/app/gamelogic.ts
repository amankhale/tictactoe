export class Gamelogic {


    xIsNext: boolean = true;
    cell: any;
    x: string = '×';
    O: string = 'O';
    cellClicked: number = 0;
    winner: string;

    gameReset(){
        this.xIsNext = true;
        this.cellClicked = 0;
        this.winner = '';
    }

    get player(){
        return this.xIsNext ? this.x : this.O;
    }

    makeMove(position: any){
        this.cell = document.querySelectorAll('.cell');
        const slider = document.querySelector('.slider');
        const num = position.currentTarget.getAttribute('position');


        if( this.cell[num].innerHTML == ''){

            this.cellClicked++;

            this.cell[num].innerHTML = this.player;
            this.xIsNext = !this.xIsNext;
            slider.classList.toggle('slide');
            
            this.winnerIsX();
            this.winnerIsO();

            if( this.xIsNext == true ){
                this.cell[num].classList.add('x-turn');
            }
            else{
                this.cell[num].classList.add('o-turn');
            }
        }
        return this.winner;
    }
    winnerIsX(){
        if(this.cell[0].innerHTML == this.x && this.cell[1].innerHTML == this.x && this.cell[2].innerHTML == this.x){
            this.winner = 'X';
            return this.winner;
        }
        if(this.cell[3].innerHTML == this.x && this.cell[4].innerHTML == this.x && this.cell[5].innerHTML == this.x){
            this.winner = 'X';
        }
        if(this.cell[6].innerHTML == this.x && this.cell[7].innerHTML == this.x && this.cell[8].innerHTML == this.x){
            this.winner = 'X';
        }
        if(this.cell[0].innerHTML == this.x && this.cell[3].innerHTML == this.x && this.cell[6].innerHTML == this.x){
            this.winner = 'X';
        }
        if(this.cell[1].innerHTML == this.x && this.cell[4].innerHTML == this.x && this.cell[7].innerHTML == this.x){
            this.winner = 'X';
        }
        if(this.cell[2].innerHTML == this.x && this.cell[5].innerHTML == this.x && this.cell[8].innerHTML == this.x){
            this.winner = 'X';
        }
        if(this.cell[0].innerHTML == this.x && this.cell[4].innerHTML == this.x && this.cell[8].innerHTML == this.x){
            this.winner = 'X';
        }
        if(this.cell[2].innerHTML == this.x && this.cell[4].innerHTML == this.x && this.cell[6].innerHTML == this.x){
            this.winner = 'X';
        }
    }
    winnerIsO(){
        if(this.cell[0].innerHTML == this.O && this.cell[1].innerHTML == this.O && this.cell[2].innerHTML == this.O){
            this.winner = 'O';
        }
        if(this.cell[3].innerHTML == this.O && this.cell[4].innerHTML == this.O && this.cell[5].innerHTML == this.O){
            this.winner = 'O';
        }
        if(this.cell[6].innerHTML == this.O && this.cell[7].innerHTML == this.O && this.cell[8].innerHTML == this.O){
            this.winner = 'O';
        }
        if(this.cell[0].innerHTML == this.O && this.cell[3].innerHTML == this.O && this.cell[6].innerHTML == this.O){
            this.winner = 'O';
        }
        if(this.cell[1].innerHTML == this.O && this.cell[4].innerHTML == this.O && this.cell[7].innerHTML == this.O){
            this.winner = 'O';
        }
        if(this.cell[2].innerHTML == this.O && this.cell[5].innerHTML == this.O && this.cell[8].innerHTML == this.O){
            this.winner = 'O';
        }
        if(this.cell[0].innerHTML == this.O && this.cell[4].innerHTML == this.O && this.cell[8].innerHTML == this.O){
            this.winner = 'O';
        }
        if(this.cell[2].innerHTML == this.O && this.cell[4].innerHTML == this.O && this.cell[6].innerHTML == this.O){
            this.winner = 'O';
        }
    }
}
