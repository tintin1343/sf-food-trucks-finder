### San Fransisco Food Truck Finder Web App

To convert this command-line program into a web-based application. I would simply write a `React` based web application to display the food-trucks either as a list or a map. I created a quick prototype that can be found here: [SF food trucks finder](https://food-truck-finder-sf.herokuapp.com/). The code for this demo web app is on [Github](https://github.com/tintin1343/food-truck-finder/)

#### Features
The current prototype has a two views: `list` and `map`. You can toggle betweeen the two views to get all food trucks open currently. You can also select a certain day and it will show all food-trucks open at this time during a certain day.
> List view: You can click on one of the `cards` to get more details about the food truck and locate it on a map. 

> Map view: You can click on one of the `markers` to get more information about the foodtruck and clicking on the info-window of the marker will take you the same ful-page dialog to view more info about the food truck.

#### Technology Stack
As mentioned before, I would use ReactJS for building this web app. I am using React here because I can see create re-usable components. Along with React I am using `Material-UI` library and `React-Google-Maps` library to show the map view. For state management, I am using React's internal state since the scope & funcaionality of this web-app is really small and specific but if were to make this web-app more functional. I would prefer either using Context or Redux for state management. Future enhancements would include providing time-based filtering and improving the lay-out to categorize the food trucks if the API provides that flexibility. The current prototype also uses `React Hooks`.

#### Architecture

Currently the web-app is hosted on a free dyno on `Heroku`. If I simply have to scale this application as-is with no new fucntionality, I would set it up on Auto-scaling in Heroku on a performance tier so it scales to handle increasing load. 

However if I have to future proof this ans scale it to millions of users, I would change the architecture slightly and move to `AWS` and follow the serverless microservices architecture. The architecture will mainly consists of three parts:

> User Interface: The code would be uploaded to S3 and will be served through the cloud front CDN (OR) if we want dedicated instances I would select Elastic Beanstalk to delploy the code and have a load balancer in place. The User interface will call the middleware when the user loads the application or selects any filters.

> Middleware/ API: This is where the business logic (i.e the API calls to the Socrata API) resides. We can achieve this using: Using API gateway, Cloudwatch, AWS lambda functions etc. By separating the business logic into a lambda function, we can use this middleware service to handle API requests coming from not only the web app but also from a React native mobile App or other native apps etc.

> Data Store (optional): Since we are retrieving data from the Socrata API directly this part is optional. But if we need to store some user data we can use RDS or DynamoDB and cache common searches, filters and the API response using ElasticCache.

This way this simple web-app scales easily without much work and should be able to handle millions of user requests.
