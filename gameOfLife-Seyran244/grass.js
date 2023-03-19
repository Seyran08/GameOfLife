let LivingCreature = require('./LivingCreature')
 module.exports  = class Grass extends LivingCreature{

        
    constructor(x,y){
            super(x,y)
           
            this.multiply = 0
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x    , this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y    ],
                [this.x + 1, this.y    ],
                [this.x - 1, this.y + 1],
                [this.x    , this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        
    }

    chooseCell(char){
          return super.chooseCell(char)
    }

    mul(){
        this.multiply++
        var emptyCell = this.chooseCell(0)
        var newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

            if(this.multiply >= 5 && newCell){
                  var newX  = newCell[0]
                  var newY = newCell[1]

                  matrix[newY][newX] = 1

                  var gr  = new Grass(newX,newY)
                  grassArr.push(gr)
                  this.multiply = 0
            }

    }
}