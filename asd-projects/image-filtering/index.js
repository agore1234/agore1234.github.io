// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify)
  applyFilterNoBackground(increaseGreenByBlue)
  applyFilterNoBackground(decreaseBlue)
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

function applyFilter(filterFunction) {
  for (var i = 0; i <= image.length -1; i++) {
    for (var o = 0; o <= image[i].length -1; o++) {
      rgbString = image[i][o]
      rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      image[i][o] = rgbString
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  for (var i = 0; i <= image.length -1; i++) {
    for (var o = 0; o <= image[i].length -1; o++) {
      rgbString = image[i][o]
      rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      if (image[i][o] !== image[0][0]) {
        image[i][o] = rgbString
      }
    }
  }
}

// TODO 5: Create the keepInBounds function

function keepInBounds(number) {
  return number < 0 ? 0: number > 255 ? 255: number
}


// TODO 3: Create reddify function

function reddify(array) {
  array[RED] = 200
}

// TODO 6: Create more filter functions

function decreaseBlue(array) {
  var bluValue = keepInBounds(array[BLUE] - 50)
  array[BLUE] = bluValue
}

function increaseGreenByBlue(array) {
  var greenValue =  keepInBounds(array[GREEN] + array[BLUE])
  array[GREEN] = greenValue
}


// CHALLENGE code goes below here