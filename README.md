# pxt-makerbit-maze
## Creating an interactive maze game for the BBC micro:bit.

Yes, the micro:bit can be an interactive game! Do you like mazes? Imagine exploring a maze inside a micro:bit. With a little bit of DIY hardware and some available, custom MakeCode blocks, you can!

## The Concept of a micro:bit Maze

## Build a Game Console

## Grab the Code

## Explore on Your Own

You will need to import the MakerBit-touch extension into the MakeCode editor, as this code uses the MakerBit's touchpins.

Make a game control panel. You will need:

* a micro:bit, version 1 or later
* a USB cable to connect with your computer
* a MakerBit by Roger Wagner
* an LED 
* six touchpins with backs
* jumper wires for the LED and the touchpins
* a small box, tape, a few simple tools, and a way to label the components you will place on the box.

Divide the area of the cardboard into three sections, as follows:
1. One touchpin off by itself.
  * Label this one "New Game".
  * Connect it to pin 5 of the touch header on the MakerBit.
2. A second group of one touchpin and the LED. 
  * Label this area "Breadcrumbs". 
  * Connect the LED to digital pin 16 on the MakerBit
  * Connect the touchpin to pin 10 in the touch header on the MakerBit
3. Four touchpins, arranged in a diamond, or "plus-sign" configuration. These are the "directional" touchpins. Use them to signal which way you want to move in the maze.
  * Label the pins "Up", "Left", "Right" and "Down". Do this in such a way that it makes sense when you look at it.
  * Connect the touchpins to the touch header on the MakerBit as follows:
    * Up to pin 6
    * Left to pin 7
    * Right to pin 8
    * Down to pin 9

I may add some photos to illustrate. Right now, I imagine that anyone reading this is familiar with the concepts.

Download the sketch into the MakerBit.

Here is how to play. First, set the dimensions you want for your maze.

* Choose the number of rows you want in your maze. Repeated pressing of Button A on the micro:bit will display and increment this number. It cycles through a range of 2 to 9.

* Choose the number of columns you want in your maze. This is done with Button B on the micro:bit, like above. Again, the range is 2 to 9.

2 x 2 is trivial, and is the default. 5 x 5 plays pretty fast. It gets a little more difficult with larger dimensions.

Touch the touchpin (#5) to start a new game. You will start just outside the upper-left corner of the maze. The entry cell is indicated by a double left-side wall.

The LED display on the micro:bit shows the cell you are presently in. You can move in any direction that does not have a boundary line. Try moving towards one of the boundary lines to see what happens.

Use the directional touchpins to navigate. Your first move is to the right. Your goal is to emerge from the lower-right corner of the maze. The exit is indicated by a double right-side wall. Woohoo! You won!

The game automatically drops a breadcrumb when you leave a cell. During play, you may view the breadcrumbs. Press touchpin 10. The LED will illuminate to indicate that breadcrumbs are being shown, and you will see a dot in the center of the display when you enter a cell where you have been before. To stop seeing the breadcrumbs, touch the touchpin #10 again. It is a toggle. Note that breadcrumb display can be activated only while navigating in the maze.




