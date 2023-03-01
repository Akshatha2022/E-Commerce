User Story

AS A manager at an internet retail company

I WANT a back end for my e-commerce website that uses the latest technologies

SO THAT my company can compete with other e-commerce companies





Acceptance Criteria

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete data in my database



Installation Steps:

1. Installing Seed `npm i seed`
2. Installing Sequilize `npm i sequelize`
3. Installing Express `npm i express`
4. Installing mysql `npm i mysql2`
5. Installing dotenv `npm i dotenv`
6. Running the seed `npm run seed`
7. Starting the app `npm start`



<br>






Video/GIF Walkthrough:

GET ALL 

Video Link: Here is a <a href="https://drive.google.com/file/d/1v5t8v50NHPXGXxkdSndy9VW1e0d3Nulh/view" target="_blank">Link</a> to a video walkthrough that demonstrates the functionality of "GET ALL" function in my application.



GETONE Category

Video Link: Here is a <a href="https://drive.google.com/file/d/1B8dLJiiJYcEm_xY7bnH-0rPZQ2mAqoe6/view" target="_blank">Link</a> to a video walkthrough that demonstrates the functionality of "GET ONE" function in my application.



POST


Video Link: Here is a <a href="https://drive.google.com/file/d/1-EpxBuEmHofxcV4k1GvnkjgWOzNz7rrC/view" target="_blank">Link</a> to a video walkthrough that demonstrates the functionality of "POST" function in my application.

PUT

Video Link: Here is a <a href="https://drive.google.com/file/d/1nSQ-agTlozF6_O6jRnRdj4aFHFGVhzpH/view" target="_blank">Link</a> to a video walkthrough that demonstrates the functionality of "PUT" function in my application.


DELETE

Video Link: Here is a <a href="https://drive.google.com/file/d/1MLSXKH4GQvFpfNmnvic5fisxUSbQdUxm/view" target="_blank">Link</a> to a video walkthrough that demonstrates the functionality of "DELETE" function in my application.










Resources:

https://www.npmjs.com/package/mysql2

https://www.npmjs.com/package/sequelize

https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

https://www.ibm.com/docs/en/odm/8.8.1?topic=ssuyd-creating-database-schema-by-running-sql-scripts

https://learn.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-database-schema?view=sql-server-ver16

https://www.npmjs.com/package/seed-js

https://www.ibm.com/docs/en/datapower-gateway/10.0.1?topic=c-api-routing-commands