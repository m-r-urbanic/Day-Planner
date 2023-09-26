// set up constants to be used for recoloring boxes
const future = "#77dd77";
const present = "#ff6961";
const past = "#d3d3d3";

// display current date and time
var reformatDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
$('#currentDay').text(reformatDate);

// get current time
let date = dayjs();
now = date.format("HH");
console.log(now);

// change color for each section based on the current time, start at 9am and go to 5pm
// 9am
if (now == 9)
{
// Array of ids greater than 9
const futureIds = ['hour-10', 'hour-11','hour-12','hour-1','hour-2', 'hour-3','hour-4','hour-5'];

//current hour
const currentId = document.getElementById('hour-9')

// Change the color
currentId.style.backgroundColor = present;

// Loop through the IDs
futureIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = future;
});
}

// 10am
if (now == 10)
{
// Array of ids greater than 10
const futureIds = ['hour-11','hour-12','hour-1','hour-2', 'hour-3','hour-4','hour-5'];
// Array of ids less than 10
const pastIds = ['hour-9']

//current hour
const currentId = document.getElementById('hour-10')

// Change the color
currentId.style.backgroundColor = present;

// Loop through the IDs
futureIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = future;
});

// Loop through the IDs
pastIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = past;
});
}

// 11am
if (now == 11)
{
// Array of ids greater than 10
const futureIds = ['hour-12','hour-1','hour-2', 'hour-3','hour-4','hour-5'];
// Array of ids less than 10
const pastIds = ['hour-9', 'hour-10']

//current hour
const currentId = document.getElementById('hour-11')

// Change the color
currentId.style.backgroundColor = present;

// Loop through the IDs
futureIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = future;
});

// Loop through the IDs
pastIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = past;
});
}

// 12pm
if (now == 12)
{
// Array of ids greater than 10
const futureIds = ['hour-1','hour-2', 'hour-3','hour-4','hour-5'];
// Array of ids less than 10
const pastIds = ['hour-9','hour-10','hour-11']

//current hour
const currentId = document.getElementById('hour-12')

// Change the color
currentId.style.backgroundColor = present;

// Loop through the IDs
futureIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = future;
});

// Loop through the IDs
pastIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = past;
});
}

// 1pm
if (now == 13)
{
// Array of ids greater than 10
const futureIds = ['hour-2', 'hour-3','hour-4','hour-5'];
// Array of ids less than 10
const pastIds = ['hour-9','hour-10','hour-11','hour-12']

//current hour
const currentId = document.getElementById('hour-1')

// Change the color
currentId.style.backgroundColor = present;

// Loop through the IDs
futureIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = future;
});

// Loop through the IDs
pastIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = past;
});
}

// 2pm
if (now == 14)
{
// Array of ids greater than 10
const futureIds = ['hour-3','hour-4','hour-5'];
// Array of ids less than 10
const pastIds = ['hour-9','hour-10','hour-11','hour-12','hour-1']

//current hour
const currentId = document.getElementById('hour-2')

// Change the color
currentId.style.backgroundColor = present;

// Loop through the IDs
futureIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = future;
});

// Loop through the IDs
pastIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = past;
});
}

// 3pm
if (now == 15)
{
// Array of ids greater than 10
const futureIds = ['hour-4','hour-5'];
// Array of ids less than 10
const pastIds = ['hour-9','hour-10','hour-11','hour-12','hour-1','hour-2']

//current hour
const currentId = document.getElementById('hour-3')

// Change the color
currentId.style.backgroundColor = present;

// Loop through the IDs
futureIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = future;
});

// Loop through the IDs
pastIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = past;
});
}

// 4pm
if (now == 16)
{
// Array of ids greater than 10
const futureIds = ['hour-5'];
// Array of ids less than 10
const pastIds = ['hour-9','hour-10','hour-11','hour-12','hour-1','hour-2','hour-3']

//current hour
const currentId = document.getElementById('hour-4')

// Change the color
currentId.style.backgroundColor = present;

// Loop through the IDs
futureIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = future;
});

// Loop through the IDs
pastIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = past;
});
}

// 5pm
if (now == 17)
{
// Array of ids greater than 10
const futureIds = ['hour-9','hour-10','hour-11','hour-12','hour-1','hour-2', 'hour-3','hour-4'];
// Array of ids less than 10
const pastIds = []

//current hour
const currentId = document.getElementById('hour-5')

// Change the color
currentId.style.backgroundColor = present;

// Loop through the IDs
pastIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = past;
});
}

// after 6pm
if (now > 17)
{
// Array of ids greater than 10
const pastIds = ['hour-9','hour-10','hour-11','hour-12','hour-1','hour-2', 'hour-3','hour-4','hour-5'];

// Loop through the IDs
pastIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = past;
});
}

// before 9am
if (now < 9)
{
// Array of ids greater than 10
const futureIds = ['hour-9','hour-10','hour-11','hour-12','hour-1','hour-2', 'hour-3','hour-4','hour-5'];

// Loop through the IDs
futureIds.forEach((id) => {
  // Get the element by ID
  const element = document.getElementById(id);
  
  // Change the color
  element.style.backgroundColor = future;
});
}

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


// Store and retrive local variables from local storage
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
        $('#box5').val(storedFive);
    }
    }
});

