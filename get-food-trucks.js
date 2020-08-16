// Imports
const https = require('https');
const {
  host,
  initialOffset,
  initialPage,
  limit,
  path,
} = require('./constants');

/******************************************************************************/
/* Variables */
/******************************************************************************/

// Set up and initialize page number, offset and count
let page = initialPage;
let pageOffset = initialOffset;
let count=0;

/******************************************************************************/
/* Function definitions */
/******************************************************************************/

/* getData:
 * Makes a HTTPS GET call to the Socrata API and fetches data for the foodtrucks
 * open at a current time and date
 */
const getData = (day, time, offset) => {
  // queryParameters for the API Call: includes SoQl query and filters to fetch only the needed data
  // const queryParamters = `?dayorder=${day}&$select=applicant,location,start24,end24,dayofweekstr&$where=
  // "${time}" between start24 and end24&$order=applicant ASC&$limit=${limit}&$offset=${offset}`;
  const queryParamters = `?dayorder=${day}&$select=applicant,location,start24,end24,dayofweekstr&$where=
  start24 <= "${time}" and end24>"${time}"&$order=applicant ASC&$limit=${limit}&$offset=${offset}`;
    
  // URL for the GET request
  const URL = host.concat(path).concat(queryParamters);

  return new Promise((resolve, reject) => {
    // Make a HTTPS GET request
    https.get(URL, (res) => {
      var body = [];

      res.on('data', d => body.push(d))
      res.on('end', () => {
        try { body = JSON.parse(Buffer.concat(body).toString()); }
        catch(e) { reject(e); }
        resolve(body);
      })

      // return data
      return res;
    }).on('error', (e) => { 
      // handle error in HTTPS GET
      reject(e); 
    });
  });
}

/* getFoodTrucks:
 * Gets all open food trucks at current time and date
 */
const getFoodTrucks = (day, time) => {
  // Calculate the page offset for the data fetch
  pageOffset = limit * page;

  // call getData to make HTTPS GET call to the Socrata API
  getData(day, time, pageOffset)
    .then(res => {
      const foodTrucks = res;
      count = foodTrucks.length;

        if(count===0) {
          // If no more food truck info found
          showNextOptions(page);
          process.exit();
        } else {
          // Display food trucks if they are open
          console.log("----------------------------------------------------------------------------------------------");
          console.log(("Name".padEnd(75)).concat("Address"));
          console.log("----------------------------------------------------------------------------------------------");
    
          // Handle the case when there are food trucks open 
          foodTrucks.map((truck) => {
            console.log(truck.applicant.padEnd(75).concat((truck.location).padEnd(30))
              .concat((truck.start24).concat("-").concat(truck.end24).padEnd(20)).concat(truck.dayofweekstr));
          });
          console.log("----------------------------------------------------------------------------------------------");
          
          // Increment page number after the API response
          page++;
    
          // print instructions to fetch the next page
          showNextOptions(page);
        }
    })
    .catch(error => {
      // Handle error during API fetch
      console.log("==============================================================================================")
      console.log();
      console.log("Uh Oh..Something went wrong. We encountered the following error.")
      console.log();
      console.error(error);
      console.log();
      console.log("==============================================================================================");
      process.exit();
    });
  };


/* showNextOptions: 
 * Prints out the page number to the console and formats the output after one API fetch.
 * Ends the program if we have fetched all the results.
 */
showNextOptions = (page) => {
  if (page ===0) {
    // If no food trucks are open, display this message.
    console.log();
    console.log("==============================================================================================");
    console.log("No food trucks are open currently. Try again later....");
    console.log("==============================================================================================");
    console.log();
    process.exit();
  }
  // If we get 10 results, provide options to load the next page
  if(count === limit) {
    console.log();
    console.log('============================= End of page ', page, '=============================');
    console.log();
    console.log('Press esc to exit. Press enter to load the next page.');
    console.log('');
  } else {
    // If we get less than 10 results, display the results and end the program
    console.log();
    console.log("==============================================================================================");
    console.log("That's all the open food trucks for now. Ending program....");
    console.log("==============================================================================================");
    console.log();
    process.exit();
  }
};

// Exports
exports.getFoodTrucks = getFoodTrucks;
exports.getData = getData;
