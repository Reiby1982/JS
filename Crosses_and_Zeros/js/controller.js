'use strict';

class Game {
    constructor(name){
        this.name = name;
        this.player = null;
        this.enemy = null;
        this.field = null;
        this.move = null;
    }
    
    
    starGame (){
       let  player_name = 'Player';
       let enemy_name = "Enemy";
       let field_size = '3';
        
        this.player = new Player(player_name, "X");
        this.enemy = new Player(enemy_name, "0");
        this.field = new Field(field_size); // создали объекты
        this.field.drowField(field_size);
    }
    
    checkPlayer () {
        let randon_move = 1;
        if (randon_move === 1) {
            this.move = this.player;
        } else {
            this.move = this.enemy;
        }
    }
}

class Player {
    constructor(name, symb) {
        this.name = name
        this.symb = symb;
     }
}

class Field {
   drowField (size){
     let field_draw = document.getElementById("field_draw");
       field_draw.style.width = window.innerHeight + 12 + "px";
    for (let i = 0; i< (size*size); i++) {
         let divX = document.createElement('div');
         divX.style.height = window.innerHeight/size  + "px";
         divX.style.width = window.innerHeight/size + "px";
         divX.style.border = "1px solid black";
         divX.style.float = "left";
         divX.addEventListener("click", this.addSymb.bind(this, divX));
         field_draw.appendChild(divX);
    } 
       
       
} 
    
    addSymb(div){
        console.log("this", div);
        div.innerHTML = "X";
    }
}

let game = new Game('крестики-нолики');
game.starGame();


console.log(game);