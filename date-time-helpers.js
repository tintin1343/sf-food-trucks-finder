// Imports
const moment = require('moment');
const {
  dateTimeFormat,
  timezoneOffset,
} = require('./constants');
  
/******************************************************************************/
/*  Date-ime variables */
/******************************************************************************/

// Stores the current date-time in San Fransisco as a Moment object
const currentDateTimeInSanFransisco = moment().utcOffset(timezoneOffset);

// Stores the current day as number. 0 for sunday, 1 for monday and so on
const day = currentDateTimeInSanFransisco.day();

// Stores the current time in `HH:mm` format
const formattedDateTime = currentDateTimeInSanFransisco.format(dateTimeFormat);

/******************************************************************************/
/* Date-time helper functions */
/******************************************************************************/

/* getTimeFormat:
 * Helper function which formats the number if its less than 10, otherwise return number
 */
const getTimeFormat = number => number < 10 ? `0${number}` : number;

/* getCurrentTime:
 * Returns the current time in `HH:mm` format
 */
const getCurrentTime = () => {
  // get formatted current hour and minutes 
  const hour = getTimeFormat(currentDateTimeInSanFransisco.hour());
  const minute = getTimeFormat(currentDateTimeInSanFransisco.minute());

  return `${hour}:${minute}`;
};

// Exports
exports.day = day;
exports.getCurrentTime = getCurrentTime;
exports.getTimeFormat = getTimeFormat;
exports.currentDateTimeInSanFransisco = currentDateTimeInSanFransisco;
exports.formattedDateTime = formattedDateTime;
  
