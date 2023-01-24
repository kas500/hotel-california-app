# Project 2:  Hotel California App  :star::star::star::star::star:


[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  
 ## Description
 
 
Our group found a common interest in traveling, and so as a result we created The Hotel California website that provides hotel guests with a quick and easy way to create reservations and an easy  check in and out of their rooms. The website also provides guest reviews as well as information about nearby activities.

Link to deployed app: https://hotel-california-app.herokuapp.com/



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
- [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technology Used](#technology-used)
- [Credits](#credits)
- [License](#license)

## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.




### Step 1:

```sh
git clone https://github.com/kas500/hotel-california-app.git

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

To seed the database go to the path /seeds and run the command `node seed.js`.

### Step 6:

Finally to run the server go to the path /Develop and then run the commant `npm start` in the terminal.



## Usage


### Homepage

The user is presented to a home page.

![Screenshot 2023-01-23 at 8 26 33 PM](https://user-images.githubusercontent.com/111031708/214212372-6e40f33b-6d59-445a-b592-b3b1a8417138.png)


### Sign In / Login page 

In this view the user needs to login or sing up, to have acces to the features.

![Screenshot 2023-01-23 at 8 34 31 PM](https://user-images.githubusercontent.com/111031708/214213005-583e6b0f-46b7-446e-bd88-0324632bee82.png)


### Create a reservation

The user must input a guest number, choose a check-in and check-out date, and in wich room do they want to stay.

![Screenshot 2023-01-23 at 8 27 32 PM](https://user-images.githubusercontent.com/111031708/214212567-357d802d-cff6-4699-9364-0aba87f18fb2.png)


### Check-in

If the user is logged in, is going to be presented with their reserved room. To check-in just needs to click the check-in button. 

![Screenshot 2023-01-23 at 8 28 30 PM](https://user-images.githubusercontent.com/111031708/214212624-568441fd-5975-4b04-817f-a473dfa81255.png)


### Check-out 

If the user is logged in, is going to be presented with their reserved room. To check-out  in just needs to click the check-out button. 

![Screenshot 2023-01-23 at 8 29 00 PM](https://user-images.githubusercontent.com/111031708/214212696-8c2a55f3-7fe2-4c80-9219-2bf5862c0291.png)


### Entertainment

When the user clicks on the carrosel image, is goin to be presented with options of near by entertaiment such as coffe, restaurants, spa.

![Screenshot 2023-01-23 at 8 27 49 PM](https://user-images.githubusercontent.com/111031708/214213312-93ee5698-eb5a-47e6-af76-b2188660527f.png)


### Reviews

Every user can leave a review of their stay.

![Screenshot 2023-01-23 at 8 29 15 PM](https://user-images.githubusercontent.com/111031708/214213783-7cdf5ab4-3f0b-463b-9e19-f803c50bfe5d.png)

### Admin view

In the admin view allows the hotel to delete reservations and see what rooms are checked in.  

![Screenshot 2023-01-23 at 9 52 31 PM](https://user-images.githubusercontent.com/111031708/214221634-aec2c35e-7344-4103-8593-0c6f2bdec03e.png)





## Features

- Make Reservation w/ user name and password
- Check In/Out 
- Comments/Reviews (create database)
- Food/Entertainment Suggestions (static page)





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
- bootstran-icons : https://icons.getbootstrap.com/






## Credits

- Carrie Young: https://github.com/carrieky04
- Anton Krasnikov: https://github.com/kas500
- Spencer Rye: https://github.com/Syre11
- Edna Gonzalez: https://github.com/enanesh



## License

MIT

