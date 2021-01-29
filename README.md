# pxt-makerbit-maze
Create interactive maze games for the BBC micro:bit.

This extension gives the MakeCode editor a set of custom blocks designed to create and interact with a virtual maze.

maze.newMaze(rows, columns) creates a grid of "cells" arranged in rows a columns. Visualize it as a rectangular maze. The entrance is at the upper-left corner. The exit is at the lower-right corner.

The maze can be as small as 2 rows of 2 cells each: maze.newMaze(2,2);

It can be as large as 15 rows of 15 cells each: newMaze(15,15);

It does not have to be square; the row and column and column numbers can be different: newMaze(8, 10);

After the new maze has been created, this function actomatically displays the cell at the entrance to the maze. The display appears on the LED panel of the mciro:bit.

maze.maximumDimension() is a reporter block that gives the maximum number of columns or rows. If you choose to edit these custom blocks, keep in mind to edit both the newMaze() function and the maximumDimension() function so they both use the same maximum value. By the way, the minimum number of rows or columns is 2.

maze.move(<Up, Down, Left, Right>) attempts to move the player's position to a new cell that is Up, Down, Left or Right of the cell currently displayed. If the cell has a boundary in that direction, the boundary flashes and the position does not change. If there is not a boundary, the position is updated and the new cell is displayed on the micro:bit.
 
 maze.crumbs(<On, Off>) turns the display of "breadcrumbs" on or off. Internally, the custom code conditions a flag to indicate when a player has visited a cell. The player can use this function to tell the code whether to display the "breadcrumb" the next time the player visits that cell.

DAVID: THIS NEEDS MORE EDITING.


You will need to import the MakerBit-touch extension into the MakeCode editor, as this code uses the MakerBit's touchpins.

Make a game control panel. You will need:

* a micro:bit, version 1 or later
* a MakerBit
* a USB cable to connect with your computer
* an LED 
* six touchpins with backs
* jumper wires for the LED and the touchpins
* cardboard that you can write on, and something to write with
* a tool to poke little holes in the cardboard
* a note from your psychiatrist certifying that you can remain calm enough to handle this

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




