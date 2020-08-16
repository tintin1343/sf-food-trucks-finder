// Imports
const { formattedDateTime } = require('./date-time-helpers');
const { 
  day,
  getCurrentTime 
} = require('./date-time-helpers');
const { getFoodTrucks } = require('./get-food-trucks');
const readline = require('readline');

// Setup Readline
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

/******************************************************************************/
/* Function Definition */
/******************************************************************************/
/* startProgram: 
 * Loads the program instructions, displays current time in San Fransisco
 * and prints them to the console
 */
const startProgram = () => {
  console.log("==============================================================================================");
  console.log("Current Time in San Fransisco ", formattedDateTime);
  console.log("==============================================================================================");
  console.log();
  console.log("Press enter to start the program...");
}

/* Listener for Keypress */
/* Fetch data on return (or) enter  button press.
 * Stop the program execution when the escape (or) Ctrl+C key is pressed
 */
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name==='c' || key.name === 'escape') {
      process.exit();
    } else if (key.name === 'return') {
      console.log();
      getFoodTrucks(day, getCurrentTime());
    } else return;
});

/* Program starts here.
 * This program displays the Name and address of food trucks open currently 
 * in San Fransisco and provides options to load more
 */
startProgram();




