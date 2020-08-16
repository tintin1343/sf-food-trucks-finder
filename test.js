// Imports
const { 
  day,
  formattedDateTime,
  getCurrentTime,
  getTimeFormat,
} = require('./date-time-helpers');

const moment = require('moment');

const {
  dateTimeFormat,
  timezoneOffset,
} = require('./constants');

const timeInSF = moment().utcOffset(timezoneOffset);

/******************************************************************************/
/* Tests */
/******************************************************************************/
describe('Testing date-time-helpers', () => {

  test('Gets the right current day', () => {
    expect(day).toEqual(moment().day());
  });

  test('Gets the current time in right format in San Fransisco', () => {
    expect(getCurrentTime()).toEqual(`${getTimeFormat(timeInSF.hour())}:${getTimeFormat(timeInSF.minutes())}`);
  });

  test('Current DateTime in SF', () => {
    expect(formattedDateTime).toEqual(timeInSF.format(dateTimeFormat));
  });
});
