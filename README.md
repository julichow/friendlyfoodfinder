# Full Stack Friendly Food Finder App

In this repository, you will build a full stack Allgergen-friendly Food App app using React, Node/Express, and mySQL.

## Objectives

- Build a database.
- Build an API server.
- Create front-end.

## Setup

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm run dev` install dependencies related to React (the client).

### Database Prep

Create `.env` file in project directory and add

```
DB_HOST=localhost
DB_USER=root
DB_PASS=YOUR_PASSWORD
DB_NAME=foodfinder
```

(replace `YOUR_PASSWORD` with your actual password)

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

In the MySQL CLI, type `create database employees;` to create a database in MySQL.

Run `npm run migrate` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'work_info' and 'personal_info' in your database.

### Run Your Development Servers

- Run `npm install`, `npm run migrate` and `npm start` in project directory to retrive data from foodfinder database and start the Express server on port 4000
- `cd client`, `npm install vite` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.
- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:5173`
- You can test your API in `http://localhost:4000/api`

## Basic Requirements

Create a webpage with the following functionality:

- [ ] A homepage that allows you to search for a selected list of cities in different countries based on allergen-friendly groups (e.g., dairy-free, gluten-free, vegetarian, vegan).
- [ ] Each restaurant card displays the rating, address, phone number, and menu. You can also click on the map icon to get directions from your current location to the selected restaurant. Moreover, signing up as a member of the Friendly Food Finder App enables you to add restaurants to your favorites.
- [ ] At the page's bottom, display a map showcasing markers for all restaurants in the searched city. Clicking on a marker provides an image, name, and address of the restaurant.
- [ ] Within the favorites page, you also have the option to download a PDF containing your list of favorite restaurants. This PDF can be saved offline on your computer or printed out.
- [ ] The "About Us" section introduces you to the team behind the creation of the app. Additionally, you can subscribe to our newsletter to stay updated.

## Tips

Suggested Process:

1. Try and get the data for foodfinder database in `mysql`.
2. Test your endpoints using Postman.

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://react.dev/)
- [React Email Documentation](https://react.email/docs/introduction)