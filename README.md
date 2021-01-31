# pxt-makerbit-maze
## Creating an interactive maze game for the BBC micro:bit.

Yes, the micro:bit can be an interactive game! Do you like mazes? Imagine exploring a maze hidden inside a micro:bit. With a little bit of DIY hardware and some available, custom MakeCode blocks, you can!

## The Concept of a micro:bit Maze

## Build a Game Console
A friend of mine served as Sea Bee in the U.S. Navy. He loves telling stories about a day when the admiral commanding his unit spoke to them.

"There are five ways to build anything!" the Admiral growled. "The right way. The wrong way. The Navy way. Your way. And MY WAY!" He went on, "Any questions how we're going to build things in this outfit?"

Well, when it comes to building your game console for your maze game, I hope you will build it YOUR WAY. Because that is what the Maker movement is all about.

But let me show you how I put one together, in case it might give you some ideas. I'm using the LED panel of the micro:bit as the game's display screen.

#### Gather the following materials:
* a micro:bit, version 1 or later
* a USB cable to connect with a computer
* a MakerBit by Roger Wagner
* an LED 
* seven earring backs from the craft store, with the little clips that hold them in place
* jumper wires for the LED and the pins
* a small box (I re-used an Amazon delivery box.)
* a label to keep things organized. Feel free to print a copy of my PDF, if you wish.

#### Mount the MakerBit and the micro:bit
I cut a slot under one of the box flaps. The micro:bit can stick out through this slot. The MakerBit is secured inside the box with some painter's tape.

#### Close the box top and label it.
I taped the box shut. A tidy label can make the game console look nice. I simply taped a printout of my PDF on top.

#### Install the pins and the LED
This was easy because my label had asterisks where I wanted the components to go. I poked small holes through the asterisks. Then I opened the bottom of the box to gain access to the inside. 

Push the LED -- from the inside! -- out through one of the asterisks labeled "Show Breadcrumbs". Try to size the hole for the LED so it goes in without much difficulty but remains tight enough to help hold the bulb in place. I picked the spot directly underneath the word, "Show". Bend the legs of the LED sideways and secure the component from underneath with tape. Then push the earring backs through the remaining asterisks -- from the outside! Secure those with the little clips. You want everything to be nice and solid where it goes through the box lid.

#### Connect jumper wires
Here's where the MakerBit really shines and makes everything easy. It has special-purpose pins that make magic happen. For example, you can connect an LED directly without needing to place a resistor, as you would otherwise have to do if you were using a regular breadboard. Let's do that part first.

Locate the black "header" that has pairs of pins inside, labeled P11 through P16. Find the pair labeled P16. If you look at the MakerBit with the micro:bit at the top, then the notch in the black header will be on its left side. The pin on that side is the electrical "ground" pin. Run a jumper from there to the short leg of the LED. Run another jumper from the other pin to the long leg of the LED. That's it, the LED is ready to work for you.

Now for some real magic. The gray header has 12 pins labeled T5 through T16. The "T" is for Touch. The magic is that if you connect one of those earring backs to one of those pins, the micro:bit can tell when you touch it! Roger Wagner, the designer of the MakerBit, likes to call them Touchpins, because that is how they work. As far as your code is concerned, they act like pushbuttons. But so much easier to hook up, because it takes only one wire to connect a touchpin.

Look closely at the gray header. Pin T5 is in the bottom-right corner. Start there, and run a jumper wire to the touchpin for Show Breadcrumbs. I ran jumpers to the other pins in this order:

6. Left
7. Up
8. Right
9. Down
10. Rows
11. Columns
12. Start New Game

You can organize those connections any way you want to. When we get to the code, you can see how to match up a touchpin with the action you want it to launch.

#### Supply power
The picture shown here is using the USB cable to bring power from a computer. The MakerBit gives you another way to power your game. It has a round socket the right size for connecting a battery or a "wall wart" charger. 6 volts and 9 volts are typical kinds of batteries you can use. The game will run with only a battery, after you load the code into the micro:bit one time. You'll figure it out.

## Grab the Essential Extensions
You can write the micro:bit code for your game using the popular MakeCode editor. There are two ways to do this: the easy way and the slightly-less-easy way.

The easy way is to simply load my code directly into the editor. Click the following link: xxx. Do this if you want to replicate my version of a game console and try it out. 

The slightly less easy way is what you will want to do when you begin to write your own game. It's still pretty easy. As in "1-2-3".
1. Start a new project in MakeCode
2. Import the maze extension for Makecode. 
* Click the Extensions icon (a little gear in the upper-right area of the editor window.) 
* Choose "Extensions"
* Copy this URL into the search box: https://github.com/iowadave/pxt-maze
* Click the message that appears.
3. Import the MakerBit extension for MakeCode. Basically repeat the steps above, but search for "MakerBit". Click the message labeled plain "MakerBit" to get the version having all of its features. 

If you followed the slightly-less-easy steps, you can easily import my game code in the next step.

#### Grab the code



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




