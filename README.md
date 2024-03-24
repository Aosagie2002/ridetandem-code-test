# Tandem Technical Test

## Run This Project

To run this project, follow these steps:

1. Make sure you are using Node.js version 20.9.0. You can manage Node.js versions using nvm:
   ```sh
   nvm use 20.9.0
# Navigate to the web directory
cd web
yarn install

# Navigate to the API directory
cd ../api
yarn install

# Run the web development server
cd ../web
yarn dev

# Run the API development server
cd ../api
yarn dev

Welcome!

In this test, you will be improving a web application that displays live arrival times for a bus stop. Read the requirements below and make changes to the front-end and back-end of the application that you feel best meet all the requirements. You should spend no more than 2-3 hours in total. Use any tools you need to complete the task (e.g. Google, StackOverflow, NPM packages).

Once you are finished working, please email tech@ridetandem.co with your finished project or a link to a Git repository where the code can be viewed.

**Project structure**

Web - React TypeScript application accessible at http://localhost:8080. Generated with Vite (similar to Create React App). In the web folder, install the packages and run `yarn dev`  to run this.

API - Node.js TypeScript application accessible at http://localhost:3000. Generated with Nest.JS framework (similar to Express.js). In the api folder, install the packages and run `yarn dev` to run this.

## Requirements

- The app should fetch and display bus times from the existing `\bus-times` API endpoint on page load
- The app should highlight when buses are due (1 minute or less til arrival)
- The app should automatically refetch the bus times every 10 seconds
- The user should only see routes that run on the current day of the week
- The app should match the design outlined in the mockup below

Additionally, what are some other ways you might want to improve or extend this application? This could include changes to the user experience, front-end and/or back-end. Feel free to leave comments or implement these changes if you have time.

# Bus Schedule Application Enhancements if I had more time

## Frontend:

### Unit Testing: 
- Add more comprehensive unit tests for both frontend and backend code. Test edge cases, error handling, and ensure that components and services behave as expected.

### Performance Optimization: 
- Analyze and optimize the performance of the application, both on the frontend and backend. This could include code optimizations, database indexing, or caching strategies.

### Responsive Design:
- Ensure that the frontend application is responsive and works well on different devices and screen sizes. Test on various devices and use CSS media queries to adjust layout and styling as needed.

### Replace 'Park Road' with Current Location:
- Utilize geolocation APIs to detect the user's current location.
- Update the UI to dynamically display the user's current location instead of 'Park Road'.

### Filter/Search for Particular Bus Service:
- Implement a search bar or filters in the UI to allow users to search for specific bus services by route number, destination, etc.
- Implement filtering logic on the frontend to filter the displayed bus services based on user input.

### Show User Error Message for Bad Requests:
- Implement error handling logic in API calls to display user-friendly error messages for bad requests.
- Update the UI to display error messages when API requests fail.

### Show 'No Services in Your Area' Message:
- Check if no bus services are returned for the user's current location.
- Display a message on the UI informing the user that no bus services are available in their area.

### Add Linting for 'Web':
- Set up linting tools (e.g., ESLint) for the frontend codebase to enforce coding standards and catch common errors.

### Map Showing Service Routes and Bus Location:
- Integrate mapping APIs (e.g., Google Maps) to display bus routes and real-time bus locations on a map.
- Implement UI components to visualize bus routes and bus locations on the map.

### Ability to Click into Bus for More Details:
- Implement a feature to allow users to click on a bus service to view more details, such as future stops, schedule, delays, etc.
- Design UI components to display detailed information about the selected bus service.

### Future Days Scheduling:
- Extend the backend API to support querying bus schedules for future dates.
- Update the frontend UI to allow users to view bus schedules for future days and select a specific date.

### Show Delays to User:
- Enhance the backend to track and provide information about delays in bus schedules.
- Update the frontend UI to display delays to users, possibly using colors to highlight delayed services.

### Use Colors to Highlight Key Info:
- Utilize color-coding in the UI to highlight important information such as delays (highlighted in red) and buses due (highlighted in a prominent color).

### Loading States and Stale Data Handling:
- Implement loading indicators in the UI to indicate when data is being fetched.
- Display stale data while new data is being fetched to provide a seamless user experience.

### Countdown for Due Times When Connection Lost:
- Implement logic to continue the countdown for due times even if the connection is lost, using client-side timers..

## Backend:

### Enhance Sorting on Departing Soonest:
- Ensure that the backend API returns bus services sorted by departure time, with the soonest departure first.

### Add Error Handling for Bad Requests:
- Implement error handling middleware to catch bad requests and return appropriate error responses to the frontend.

### Extend API for Future Days Scheduling:
- Extend the backend API to support querying bus schedules for future dates, allowing users to plan ahead.

### Provide Information About Delays:
- Enhance the backend to track and provide information about delays in bus schedules, which can be relayed to the frontend for display.

### Automated Testing:
- Increase test coverage by writing additional unit tests, integration tests, and end-to-end tests to ensure the reliability and correctness of your backend services.

### Monitoring and Logging
- Implement monitoring and logging solutions to track the performance and health of your backend services.

**Mockup**
![Mockup](./mockup.png "Mockup")
