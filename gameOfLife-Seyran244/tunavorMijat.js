class TunavorMijat extends LivingCreature{
    constructor(x,y){
            super(x,y)
              this.energy = 20
              this.directions = []
    }


    getNewCoordinates() {
      this.directions = [
          [this.x - 1, this.y - 1],
          [this.x, this.y - 1],
          [this.x + 1, this.y - 1],
          [this.x - 1, this.y],
          [this.x + 1, this.y],
          [this.x - 1, this.y + 1],
          [this.x, this.y + 1],
          [this.x + 1, this.y + 1]
      ];
    }
    chooseCell(char) {
      this.getNewCoordinates();
      let found = [];
    
      for (let i in this.directions) {
          let x = this.directions[i][0];
          let y = this.directions[i][1];
    
          if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
              if (matrix[y][x] == char) {
                  found.push(this.directions[i]);
              }
          }
    
    
        
          
      }
    
      return found;
    }
    eat() {
  let emptyCell = this.chooseCell(3);
  let newCell = random(emptyCell)

  if (newCell) {
      this.energy -= 100 ;
      let newX = newCell[0];
      let newY = newCell[1];

      for (let i = 0; i < grassArr.length; i++) {
          if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
              predatorArr.splice(i, 1)
              break;
          }
      }

      matrix[newY][newX] = 4;
      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;

      
      
      
  } 
  
  
  
  else {
      this.move()
  }
}

move() {
  let emptyCell = this.chooseCell(0);
  let newCell = random(emptyCell)

  if (newCell) {
      let newX = newCell[0];
      let newY = newCell[1];

      matrix[newY][newX] = 4;
      matrix[this.y][this.x] = 0;

     
      this.x = newX;
      this.y = newY;

      this.energy--

      if (this.energy < 0) {
          this.die()
      }
  } 
}
die() {
  for (let i = 0; i < predatorArr.length; i++) {
      if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
         predatorArr.splice(i, 1)
      }
  }
  matrix[this.y][this.x] = 0;
}
}
