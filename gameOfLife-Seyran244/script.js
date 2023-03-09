function matrixGenerator(matrixSize, grass, grassEater, predator, TunavorMijat, Vorsord, Tunavorgaz) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3


    }
    for (let i = 0; i < TunavorMijat; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4




    }
    for (let i = 0; i < Vorsord; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5


    }


    for (let i = 0; i < Tunavorgaz; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 7

    }

    return matrix

}


var matrix = matrixGenerator(30, 40, 15, 5, 10, 5, 8)
var side = 25

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var MijatArr = []
var VorsordArr = []
var GazArr = []


function setup() {
    frameRate(15)
    createCanvas(matrix[0].length * side, matrix.length * side)

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)

            } else if (matrix[y][x] == 4) {
                var Mijat = new TunavorMijat(x, y)
                MijatArr.push(Mijat)
            }
            else if (matrix[y][x] == 5) {
                var Vors = new Vorsord(x, y)
                VorsordArr.push(Vors)
            }
            else if (matrix[y][x] == 7) {
                var Gaz = new Tunavorgaz(x, y)
                GazArr.push(Gaz)
            }
        }
    }
}
function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }
            else if (matrix[y][x] == 5) {
                fill("white")
            }
            else if (matrix[y][x] == 7) {
                fill("orange")
            }
            else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }

    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }



    for (let i in predatorArr) {

        predatorArr[i].eat()
    }

    for (let i in MijatArr) {
        MijatArr[i].eat()
    }

    for (let i in VorsordArr) {
        VorsordArr[i].krakel()
        console.log(VorsordArr.length);



    }
    for (let i in GazArr) {
        GazArr[i].eat()

    }


}

