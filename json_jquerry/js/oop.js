(function() {
	'use strict';
//Объектно-ориентированное програмирование
//    game {
//       startGame
//       endGame
//       initPlayers {
//           this.player = new player();
//       }
//    },
//    
//    player {
//        name
//        score
//        putSymb
//    },
//        
//    table {
//        updateField
//    }, 
    
//ООП в функциональном стиле
    
function Player(name){ //Player
var name; // стало приватным
    this.setName = function(player_name){
        name = player_name; //скрытый метод, сеттер
    }
    this.getName = function(){
       return name; // метод геттер 
    }
    
    //    this.name = name;
//        var propertyName;//Приватное свойство    
//        
//        this.publicProperty; //Публичное свойство
//        
//        this.methodName = function(){};
//            //Публичный метод
//        function methodName() {};
//            //Приватный метод
    this.doMove = function(){
        console.log(name, "player do move")
    }
    
}
    
// для создания объекта
//    var player1 = new Player("Player Name");
//    player1.doMove();
//    var player2 = new Player("Player222 Name");
//        player2.doMove();

    var player1 = new Player();
    player1.setName("Name");
    console.log(player1.getName);
    player1.doMove();
    var player2 = new Player();
    player2.setName("Name1122");

    console.log(player2.getName);

    player2.doMove();
    
    //Наследование
    function Animal (){}
    function WildAnimal(){
        Animal.call(this); // - наследование свойств
    }

    
    
    
    
    
    
}());
