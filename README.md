# Friend-Finder
Full stack web application that allows users to find friends based on a personality test taken on the site.

## Live Link
 - https://stormy-shore-61531.herokuapp.com/

## Usage

To use this application, go to the survey and fill out all the required fields. Immediately after submitting the survey, the server-side code will compare your results to what currently resides in the database and return the best compatible friend. I also have provided an API that shows details on users and their personalized information.

## Must have Requirements
- Modularity in the form of separate files for server logic, storing of friends, views, and routing
- 10-question survey to assess uniqueness of users
- Use `express`, `body-parser`, and `path` npm packages in the `server.js` file
- Separate JavaScript files for routing (`htmlRoutes.js` and `apiRoutes.js`)
- Appropriate GET and POST routes for serving HTML pages and API callshttps://murmuring-island-94264.herokuapp.com/
- Separate file for storing friends (`friends.js`)
- Calculate best match for user once survey is completed and return that match to the user

## Nice to Have Requirements
- Data is stored in MySQL db (querying and inserts)

## Technologies Used

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap
- MySql

## Code Explanation
- The `server.js` file sets up the Express server, specifying the port number, the npm packages that need to be loaded, and also the routes, which I have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of my code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- The 2 routing files (`htmlRoutes.js` and `apiRoutes.js`) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in the server-side data or add new friends
- Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then toggled, displaying the the best match to the person who just took the survey
- In essense, this will also be a form of notes that you may later reference weeks later
- Friends are stored as such:

```js
{
"friend_id": 1,
"name": "Sarneet",
"photo": "https://drive.google.com/open?id=1U3dbxHx-9LHAG4tgNMZzpPN2wq_T47_3",
"score": [
"1",
"2",
"3",
"4",
"1",
"2",
"3",
"3",
"2",
"4"
]
},
```
