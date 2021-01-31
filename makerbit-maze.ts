makerbit.onTouch(TouchSensor.T12, TouchAction.Touched, function () {
    newGameRequest = true
})
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
        if (mazeColumnsDesired > maze.maximumDimension()) {
            mazeColumnsDesired = 2
        }
    } else {
        // otherwise enable showing the value
        showingCols = true
    }
    // display the number of columns on the LED display
    basic.showNumber(mazeColumnsDesired)
}
// touchpin 6 is labeled "Up" on the game controller
makerbit.onTouch(TouchSensor.T6, TouchAction.Touched, function () {
    pinLeft = true
})
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
        if (mazeRowsDesired > maze.maximumDimension()) {
            mazeRowsDesired = 2
        }
    } else {
        // otherwise, enable showing the value
        showingRows = true
    }
    // show the number of rows on the LED display
    basic.showNumber(mazeRowsDesired)
}
// touchpin 10 is labeled "Breadcrumbs" on the game controller
makerbit.onTouch(TouchSensor.T10, TouchAction.Touched, function () {
    setRowsDesired = true
})
// touchpin 8 is labeled "Right" on the game controller
makerbit.onTouch(TouchSensor.T8, TouchAction.Touched, function () {
    pinRight = true
})
// touchpin 9 is labeled "Down" on the game controller
makerbit.onTouch(TouchSensor.T9, TouchAction.Touched, function () {
    pinDown = true
})
// touchpin 7 is labeled "Left" on the game controller
makerbit.onTouch(TouchSensor.T7, TouchAction.Touched, function () {
    pinUp = true
})
// touchpin 5 is labeled "New" on the game controller
makerbit.onTouch(TouchSensor.T5, TouchAction.Touched, function () {
    // toggle it
    showCrumbs = !(showCrumbs)
})
makerbit.onTouch(TouchSensor.T11, TouchAction.Touched, function () {
    setColumnsDesired = true
})
// stop showing breadcrumbs
function turnOffBreadcrumbs () {
    showCrumbs = false
    maze.displayCrumbs(Crumbstatus.OFF)
    // turn off breadcrumb status LED
    makerbit.setDigitalPin(16, makerbit.level(PinLevel.Low))
}
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
// turn off external LED
makerbit.setDigitalPin(16, makerbit.level(PinLevel.Low))
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
            maze.move(Directions.UP)
        }
        if (pinLeft) {
            pinLeft = false
            maze.move(Directions.LEFT)
        }
        if (pinRight) {
            pinRight = false
            maze.move(Directions.RIGHT)
        }
        if (pinDown) {
            pinDown = false
            maze.move(Directions.DOWN)
        }
        if (showCrumbs) {
            makerbit.setDigitalPin(16, makerbit.level(PinLevel.High))
            maze.displayCrumbs(Crumbstatus.ON)
        } else {
            makerbit.setDigitalPin(16, makerbit.level(PinLevel.Low))
            maze.displayCrumbs(Crumbstatus.OFF)
        }
    }
})
