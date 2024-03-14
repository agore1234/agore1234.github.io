/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 39,
    RIGHT: 37,
    UP: 38,
    DOWN: 40
  }
  var positionX = 0
  var speedX = 0
  var positionY = 0
  var speedY = 0
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
  
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
      console.log("left pressed")
    }
    else if (event.which === KEY.RIGHT) {
      walker.speedX = +5;
      console.log("right pressed")
    }
    else if (event.which === KEY.UP) {
      walker.speedY = +5;
      console.log("up pressed")
    }
    else if (event.which === KEY.DOWN) {
      walker.speedY = -5;
      console.log("down pressed")
    }
    console.log(event.key)
  }
  function handleKeyUp(event){
    if (event.which !== KEY.LEFT) {
      walker.speedX = 0;
      console.log("left pressed")
    }
    else if (event.which !== KEY.RIGHT) {
      walker.speedX = 0;
      console.log("right pressed")
    }
    else if (event.which !== KEY.UP) {
      walker.speedY = 0;
      console.log("up pressed")
    }
    else if (event.which !== KEY.DOWN) {
      walker.speedY = 0;
      console.log("down pressed")
    }
    console.log(event.key)
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
  }

  function redrawGameItem(){
    $("#walker").css("top", positionY);
    $("#walker").css("left", positionX);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
