# Project 2:  Hotel California App  :star::star::star::star::star:


[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  
 ## Description
 
 
 Our group found a common interest in traveling, and so as a result, we decided to build an application that hotels can use to create the best guest experience.  With this application, users can find <list features here> , without having to use <add info>.





### User Story

```sh
As the hotel guest
I WANT to see and request all services that a hotel can provide in central web app
SO THAT I can save my time and enjoy the hotel experience
GIVEN a web application that allows to request hotel bookings
WHEN I start the application
THEN I’m presented with the homepage with the following links: Make a reservation, Check In/Out, leave comments/reviews, Food/entertainment suggestions
WHEN I select Make a Reservation
THEN I am presented with a reservation form and create a user account
WHEN I select Check In option
THEN I am presented with Check In page
WHEN I select Check Out option
THEN I am presented with a comments/reviews form and check out button
WHEN I select food/entertainment
THEN I am presented with restaurants, activities suggestions near-by



```






## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Credits](#credits)
- [Technology Used](#technology-used)
- [License](#license)

## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.




### Step 1:

```sh
git clone https://github.com/

git status 
```

### Step 2:

In the terminal run the command `npm init`

### Step 3:

To install the node libraries run this commands:
```sh
npm i sequelize
npm i connect-session-sequelize
npm i express-session
npm i bcrypt
npm i dotenv
npm i mysql2
npm i express-handlebars
npm i nodemon
```



### Step 4:
To create the database you must be on /db the you'll have to run the command `mysql -u root -p` then is going to ask you for your password.Then when you are connected to the database run the command `source schema.sql;`, to exit this terminal you must press`\q`.

### Step 5:

To seed the database go to the path /seed and run the command `node index.js`.

### Step 6:

Finally to run the server go to the path /Develop and then run the commant `node server.js` in the terminal.



## Usage


Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

















## Credits





## Technology Used

- Node.js : https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
- sequilize : https://sequelize.org/
- express : https://expressjs.com/
- Insomnia Core : https://insomnia.rest/products/insomnia
- connect-session-sequelize : https://www.npmjs.com/package/connect-session-sequelize
- express-session : https://www.npmjs.com/package/express-session
- node.bcrypt.js : https://www.npmjs.com/package/bcrypt
- dotenv : https://www.npmjs.com/package/dotenv  
- Node MySQL 2 : https://www.npmjs.com/package/mysql2
- Express Handlebars : https://www.npmjs.com/package/express-handlebars
- nodemon : https://www.npmjs.com/package/nodemon


## License

MIT


## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
