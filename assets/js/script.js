// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// refactor after testing
var reformatDate = dayjs('2020-11-03 5:00:00 AM').format('dddd, MMMM D YYYY, h:mm:ss a');
$('#currentDay').text(reformatDate);

// test button
$("#button9").click(function(){
  $("#box9").css("background-color", "green");
})



// Get the button element by its id
const buttonNine = $('#button9');
const buttonTen = $('#button10');
const buttonEleven = $('#button11');
const buttonTweleve = $('#button12');
const buttonOne = $('#button1');
const buttonTwo = $('#button2');
const buttonThree = $('#button3');
const buttonFour = $('#button4');
const buttonFive = $('#button5');

$(document).ready(function() {

  // Add an event listener to the button for the click event
  buttonNine.on('click', function() {
    // Retrieve the value from the element with the specified id
    const value = $('#box9').val();

    // Store the value in local storage
    localStorage.setItem('nineAM', value);
  });
    // Add an event listener to the button for the click event
  buttonTen.on('click', function() {
    // Retrieve the value from the element with the specified id
    const value = $('#box10').val();

    // Store the value in local storage
    localStorage.setItem('tenAM', value);
  });
    // Add an event listener to the button for the click event
    buttonEleven.on('click', function() {
      // Retrieve the value from the element with the specified id
      const value = $('#box11').val();
  
      // Store the value in local storage
      localStorage.setItem('elevenAM', value);
    });
    // Add an event listener to the button for the click event
    buttonTweleve.on('click', function() {
      // Retrieve the value from the element with the specified id
      const value = $('#box12').val();
  
      // Store the value in local storage
      localStorage.setItem('twelvePM', value);
    });
    // Add an event listener to the button for the click event
    buttonOne.on('click', function() {
      // Retrieve the value from the element with the specified id
      const value = $('#box1').val();
  
      // Store the value in local storage
      localStorage.setItem('onePM', value);
    });
    // Add an event listener to the button for the click event
    buttonTwo.on('click', function() {
      // Retrieve the value from the element with the specified id
      const value = $('#box2').val();
  
      // Store the value in local storage
      localStorage.setItem('twoPM', value);
    });
    // Add an event listener to the button for the click event
    buttonThree.on('click', function() {
      // Retrieve the value from the element with the specified id
      const value = $('#box3').val();
  
      // Store the value in local storage
      localStorage.setItem('threePM', value);
    });
    // Add an event listener to the button for the click event
    buttonFour.on('click', function() {
      // Retrieve the value from the element with the specified id
      const value = $('#box4').val();
  
      // Store the value in local storage
      localStorage.setItem('fourPM', value);
    });
    // Add an event listener to the button for the click event
    buttonFive.on('click', function() {
      // Retrieve the value from the element with the specified id
      const value = $('#box5').val();
  
      // Store the value in local storage
      localStorage.setItem('fivePM', value);
    });
  // Retrieve the stored value from localStorage
  var storedNine = localStorage.getItem('nineAM');

  // Check if the stored value exists
  if (storedNine) {
    // Populate the element with the stored value
    $('#box9').val(storedNine);
  }
    // Retrieve the stored value from localStorage
  var storedTen = localStorage.getItem('tenAM');

    // Check if the stored value exists
  if (storedTen) {
      // Populate the element with the stored value
    $('#box10').val(storedTen);
  }
    // Retrieve the stored value from localStorage
    var storedEleven = localStorage.getItem('elevenAM');

    // Check if the stored value exists
  if (storedEleven) {
      // Populate the element with the stored value
    $('#box11').val(storedEleven);
  }
    // Retrieve the stored value from localStorage
  var storedTwelve = localStorage.getItem('twelvePM');

    // Check if the stored value exists
  if (storedTwelve) {
      // Populate the element with the stored value
    $('#box12').val(storedTwelve);
  }
    // Retrieve the stored value from localStorage
    var storedOne = localStorage.getItem('onePM');

    // Check if the stored value exists
  if (storedOne) {
      // Populate the element with the stored value
    $('#box1').val(storedOne);
  }
    // Retrieve the stored value from localStorage
    var storedTwo = localStorage.getItem('twoPM');

    // Check if the stored value exists
  if (storedTwo) {
      // Populate the element with the stored value
    $('#box2').val(storedTwo);
  }
      // Retrieve the stored value from localStorage
      var storedThree = localStorage.getItem('threePM');

      // Check if the stored value exists
    if (storedThree) {
        // Populate the element with the stored value
      $('#box3').val(storedThree);
    }
        // Retrieve the stored value from localStorage
  var storedFour = localStorage.getItem('fourPM');

  // Check if the stored value exists
if (storedFour) {
    // Populate the element with the stored value
  $('#box4').val(storedFour);
      // Retrieve the stored value from localStorage
      var storedFive = localStorage.getItem('fivePM');

      // Check if the stored value exists
    if (storedFive) {
        // Populate the element with the stored value
      $('#box12').val(storedFive);
    }
}
});