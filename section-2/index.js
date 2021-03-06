//////////////////////////////////////////// BIG PICTURE //////////////////////////////////

//React.js is a  JS library that is used to create UI. Working only with React, I am not able to excute logic in the server. 

//Server is created using Node.js and the node framework express.js, it is seperate from the client in the browser so any business logic can be ran here that I want to hide from the user. Node and Express can be used for file storage. 

//The server sends a response and the server sends back a response. The data is sent via JSON format, for both a request from the client and response from the server.

//In the MERN stack, there are two serves one for Node and one for MongoDB. Client side is React only. File storage is done by Node and MongoDB stores users, products, ect.

//Whos is talking to the DB server? That is the Node Express app. Node send DB queries. I never send request from the client to MongoDB, because to send those queries I need to send my credentials to login into my datebase. I only send request from Node to MongoDB.


//////////////////////////////////////////// DIVE TO THE FRONT- END //////////////////////////////

//React Router DOM - lets me render any component depending on the url path. So it will feel like the user has multiple pages 

//React State - influences what is shown in the screen. To manage state I can use React State in class based components, we can use hooks, and/or redux.

//Components + Styling - important parts of React


//////////////////////////////////////////// DIVE TO THE BACK-END ///////////////////////////////////

//Back-end is built as an API. I can build a rest API or a GraphQL API

//React talks to Node and Node talks to Mongo


//////////////////////////////////////////// REST vs GRAPHQL //////////////////////////////////

// REST - multiple endpoints,  REST API is completely seperate from the the front end
//GET - get resource from the server 
//POST - post data to a server(create resource)
//PUT - put a resources onto the server(overwrite a resource)
//PATCH - update parts of the existing resources on the server
//DELETE - delete a resource on the server 



// GRAPHQL - one endpoint(POST)
// POST request has a request body and that body has a query expression, then parsed by Node, and use that data to store or get data. 
// GRAPHQL API is completely seperate from the the front end


//////////////////////////////////////////// CONNECTING NODE + REACT ///////////////////////////////////

// HOST APP ON SAME SERVER 
//host both node API and react single page app under the same domain.
//node express handles API request 
//request not targeting API routes return React SPA
//data is still exchanged with the React App and Node API in JSON format

// HOST APP ON SEPERATE APPS 
//one server serves a single react.js application HTML page, and all JS files 
//the other server host our API 
//Node API handles incoming request 
//React SPA served from seperate static host 
//Date is exchnaged between the React App and Node API in JSON format 


//////////////////////////////////// DEVELOPMENT ENVIRONMENT AND SERVER //////////////////////////////

// FRONT_END
//cd into front end 
// npm install 
// npm start 


// BACK-END
//cd into back end
//npm install 
//nodemon server.js

//use npm install to install dependencies 


//////////////////////////////////// BACK-END //////////////////////////////

// server.js is the Node and Express server.
// app.listen(8000) --> this starts up my server on port 8000
// I will have abn app.get and app.post method and that registers some middleware for certain paths app.get('/path')


//////////////////////////////////// FRONT-END //////////////////////////////

//React is all about components, they can be functions or class 
//index.js is where I render my React App , which is imported from the app.js file.
//JSX is HTML inside JS, used in React.
//Hooks are special functions that help me manage state 
