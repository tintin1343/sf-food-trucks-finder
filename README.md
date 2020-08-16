# San Fransisco Food Truck Finder

### Project Description

A command line based Node.js program that prints out a list of food trucks that are open at the current date and current time, when the program is being run. So if you run the program at noon on a Friday, it will list all the food trucks that are open then.

It display's results in pages with 10 trucks per page. That is: if there are more than 10 food trucks open, the program will display the first 10, then wait for input from the user before displaying the next 10 (or fewer if there are fewer than 10 remaining), and so on until there are no more food trucks to display. 

It displays name and address of the trucks and sort the output alphabetically
by name.

### Example output:
```
| Name                             	| Address            	|
|----------------------------------	|--------------------	|
| San Francisco Street Foods, Inc. 	| 701 HOWARD ST      	|
| San Francisco Street Foods, Inc. 	| 100 POST ST        	|
| San Francisco Street Foods, Inc. 	| 2 MONTGOMERY ST    	|
| San Francisco Street Foods, Inc. 	| 5 THE EMBARCADERO  	|
| San Francisco Street Foods, Inc. 	| 1 THE EMBARCADERO  	|
| San Pancho's Tacos               	| 491 BAY SHORE BLVD 	|
| San Pancho's Tacos               	| 3119 ALEMANY BLVD  	|
| Santana ESG, Inc.                	| 200 SHOTWELL ST    	|
| Santana ESG, Inc.                	| 2598 HARRISON ST   	|
| Tacos El Flaco                   	| 2901 03RD ST       	|
```

### Running The Program
- Install the latest version of [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (This program was developed on node v2.18.3). Anything above Node version 8 should be fine.
- Run `npm install`
- Run the program `node index.js`
- Follow the instructions on the console/ prompt:
  1. Press `Enter` to load more data.
  2. Press `Esc` or `Ctrl+c` to stop the program.
  3. The program will stop running once you the last page or there is no more data to load.

### About The Code
- `index.js`: Starts the program. Listen's to the key press events and waits on the user.
- `get-food-trucks.js`: Business logic to get the food truck data from the `Socrata` API.
- `date-time-helpers.js`: Helper fucntions to calculate date and time information.
- `constants.js`: Constants used across the app.
- `writeup.md`: A write up detailing how this app can be converted into a web based application that scales to millions of users.

### Libraries Used
- Moment.js
- Jest

### Future Changes
- User can enter `start` and `endtime` and show food trucks open between those times.
- User enters the `day` and show food trucks open on a certain day.
- Combine the above two use cases to make it more flexible.
- User gets to select a certain the food truck from the resultto view more data about that food truck. e.g: `description`, `starttime`, `endtime` etc

### Testing
- `test.js` contains some basic unit tests for date-time-helpers
- To run the tests use `npm run test` command
- API call can be tested by calling `getData(day, time, offset)`. e.g: `getDate(6, "13.00", 0)` will get the food truck info for all foodtrucks open on Saturday, at 1:00 PM.

### San Fransisco Food Truck Finder Web App

The write up for this can be found in [here](./writeup.md)








