// **********************************************
// * Maze Game using maze extension version 1.2.2
// * import https://github.com/iowadave/pxt-maze 
// * into the MakeCode editor
// * David Sparks  11Feb2021
// * 
// * Designed for use with a MakerBit by Roger Wagner
// * import the "MakerBit" extension for MakeCode
// * for the pin- and touchpin-related blocks 
// **********************************************

// ******************************
// * global variables
// ******************************

let showCrumbs = false
let pinUp = false
let pinDown = false
let pinRight = false
let setRowsDesired = false
let pinLeft = false
let showingCols = false
let gameUnderway = false
let showingRows = false
let setColumnsDesired = false
let newGameRequest = false
let mazeRowsDesired = 0
let mazeColumnsDesired = 0
mazeColumnsDesired = 2
mazeRowsDesired = 2

// *********************************
// * touchpin handlers 
// * set respective boolean variables,
// * according to the labels assigned to the pins
// * on the game controller,
// * then the forever loop responds to  
// * how the boolean variables are set 
// *********************************

// touchpin 5 is labeled "Show Breadcrumbs" on the game controller
makerbit.onTouch(TouchSensor.T5, TouchAction.Touched, function () {
    // toggle it
    showCrumbs = !(showCrumbs)
})

// touchpin 6 is labeled "Left" on the game controller
makerbit.onTouch(TouchSensor.T6, TouchAction.Touched, function () {
    pinLeft = true
})

// touchpin 7 is labeled "Up" on the game controller
makerbit.onTouch(TouchSensor.T7, TouchAction.Touched, function () {
    pinUp = true
})

// touchpin 8 is labeled "Right" on the game controller
makerbit.onTouch(TouchSensor.T8, TouchAction.Touched, function () {
    pinRight = true
})

// touchpin 9 is labeled "Down" on the game controller
makerbit.onTouch(TouchSensor.T9, TouchAction.Touched, function () {
    pinDown = true
})

// touchpin 10 is labeled "Rows" on the game controller
makerbit.onTouch(TouchSensor.T10, TouchAction.Touched, function () {
    setRowsDesired = true
})

// touchpin 11 is labeled "Columns" on the game controller
makerbit.onTouch(TouchSensor.T11, TouchAction.Touched, function () {
    setColumnsDesired = true
})

// touchpin 12 is labeled "Start New Game" on the game controller 
makerbit.onTouch(TouchSensor.T12, TouchAction.Touched, function () {
    newGameRequest = true
})

// *********************************
// * responsive functions 
// *********************************

// get player's desired number of columns for next game
function handleSetColumnsDesired () {
    // turn off the flag that activated this function
    setColumnsDesired = false
    // turn off display flag for row count
    showingRows = false
    // end current game, if any
    gameUnderway = false
    turnOffBreadcrumbs()
    // increment mazeColumnsDesired value if showing it already
    if (showingCols) {
        mazeColumnsDesired += 1
        if (mazeColumnsDesired > 15) {
            mazeColumnsDesired = 2
        }
    } else {
        // otherwise enable showing the value
        showingCols = true
    }
    // display the number of columns on the LED display
    basic.showNumber(mazeColumnsDesired)
}

// get player's desired number of rows for the next game
function handleSetRowsDesired () {
    // turn off the flag that activated this function
    setRowsDesired = false
    // turn off display flag for column count
    showingCols = false
    // end current game, if any
    gameUnderway = false
    turnOffBreadcrumbs()
    // increment mazeRowsDesired value if showing it already
    if (showingRows) {
        mazeRowsDesired += 1
        if (mazeRowsDesired > 15) {
            mazeRowsDesired = 2
        }
    } else {
        // otherwise, enable showing the value
        showingRows = true
    }
    // show the number of rows on the LED display
    basic.showNumber(mazeRowsDesired)
}

// stop showing breadcrumbs
function turnOffBreadcrumbs () {
    showCrumbs = false
    maze.displayCrumbs(MazeFlag.OFF)
    // turn off breadcrumb status LED
    makerbit.setDigitalPin(16, makerbit.level(PinLevel.Low))
}

// ***************************************************
// * code statements appearing in the "on start" block
// ***************************************************

// turn off external LED
makerbit.setDigitalPin(16, makerbit.level(PinLevel.Low))

// place a treasure and make it be a magic exit portal key
maze.setMazeTreasure(MazeTreasure.KEY)

// place maze portals at random locations 
maze.setMazePortals(MazePortal.RANDOM)

// The main program loop responds to event flags
basic.forever(function () {
    if (setRowsDesired) {
        handleSetRowsDesired()
    }
    if (setColumnsDesired) {
        handleSetColumnsDesired()
    }
    if (newGameRequest) {
        newGameRequest = false
        turnOffBreadcrumbs()
        maze.newMaze(mazeRowsDesired, mazeColumnsDesired)
        gameUnderway = true
    }
    if (gameUnderway) {
        if (pinUp) {
            pinUp = false
            maze.move(MazeDirection.UP)
        }
        if (pinLeft) {
            pinLeft = false
            maze.move(MazeDirection.LEFT)
        }
        if (pinRight) {
            pinRight = false
            maze.move(MazeDirection.RIGHT)
        }
        if (pinDown) {
            pinDown = false
            maze.move(MazeDirection.DOWN)
        }
        if (showCrumbs) {
            makerbit.setDigitalPin(16, makerbit.level(PinLevel.High))
            maze.displayCrumbs(MazeFlag.ON)
        } else {
            makerbit.setDigitalPin(16, makerbit.level(PinLevel.Low))
            maze.displayCrumbs(MazeFlag.OFF)
        }
    }
})
