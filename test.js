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

   // Make a HTTPS GET request
    // https.get(URL, (res) => {
    //   // Event Listener on fetch of data
    //   res.on('data', (d) => {
    //     // Parse the incoming date
    //     const foodTrucks = JSON.parse(d);
    //     count = foodTrucks.length;

    //     // Handle case when there are no open foodtrucks at current time
    //     if(count===0) {
    //       console.log("No food trucks are open currently");
    //       process.exit();
    //     } else {
    //       console.log("----------------------------------------------------------------------------------------------");
    //       console.log("Name".padEnd(75).concat("Address"));
    //       console.log("----------------------------------------------------------------------------------------------");

    //       // Handle the case when there are food trucks open 
    //       foodTrucks.map((truck) => {
    //         console.log(truck.applicant.padEnd(75).concat((truck.location).padEnd(30))
    //           .concat((truck.start24).concat("-").concat(truck.end24).padEnd(20)).concat(truck.dayofweekstr));
    //       });
    //       console.log("----------------------------------------------------------------------------------------------");
          
    //       // Increment page number after the API response
    //       page++;

    //       // print instructions to fetch the next page
    //       showNextOptions(page);
    //     }
    //   });

    // }).on('error', (e) => {
    //   // Handle error during API fetch
    //   console.log("==============================================================================================")
    //   console.log();
    //   console.log("Uh Oh..Something went wrong. We encountered the following error.")
    //   console.log();
    //   console.error(e);
    //   console.log();
    //   console.log("==============================================================================================")
    //   process.exit();
    // });