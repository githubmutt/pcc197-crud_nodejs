# pcc197-crud_nodejs
CRUD with React/client and Node.js/server - database/mysql

CRUD using React for the client and node.js for the server
and mysql for the database

Reference youtube.com

https://www.youtube.com/watch?v=T8mqZZ0r-RA

https://www.youtube.com/watch?v=3YrOOia3-mo

The above videos may be used as a guide. One can use this repository or
follow the directions below to create the Full Stack Application.
Some knowledge of React is suggested and also a bit of mysql.

Directions  <p>

Create directory crud <br>
inside crud, create the directories server and client 

create crud. 
create crud/server   
create crud/client 

Create a React initial application   
  
( cd into the client directory and issue the command )
  
npx create-react-app .  

In the client directory, install axios and cors 
  
npm install axios  
npm install cors


in the server directory, issue the command commands to install dependencies 
npm init (answer yes to all questions) 
npm install express 
npm install body-parser 
npm install nodemon  
npm install mysql

Create the database crud and member table   
mysql -uroot -ppassword           (your root password ) 
create database crud
use crud
source crud.sql   
(note the repository crud.sql file).   
OR. 
mysql -uroot -ppassword crud < crud.sql. 
(this assumes database crud exists). 
                                        
Substitue the repository App.js into your App.js  



to start React,   
from the client directory :  npm start 

from the server directory: npm run devStart. 
                                       
(look at package.json , npm run devSart is equivalent to nodemon index.js). 



