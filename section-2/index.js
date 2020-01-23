//////////////////////////////////////////// BIG PICTURE //////////////////////////////////

//React.js is a  JS library that is used to create UI. Working only with React, I am not able to excute logic in the server. 

//Server is created using Node.js and the node framework express.js, it is seperate from the client in the browser so any business logic can be ran here that I want to hide from the user. Node and Express can be used for file storage. 

//The server sends a response and the server sends back a response. The data is sent via JSON format, for both a request from the client and response from the server.

//In the MERN stack, there are two serves one for Node and one for MongoDB. Client side is React only. File storage is done by Node and MongoDB stores users, products, ect.

//Whos is talking to the DB server? That is the Node Express app. Node send DB queries. I never send request from the client to MongoDB, because to send those queries I need to send my credentials to login into my datebase. I only send request from Node to MongoDB.


//////////////////////////////////////////// DIVE TO THE FRONT- END //////////////////////////////////

//React Router DOM - lets me render any component depending on the url path. So it will feel like the user has multiple pages 

//React State - influences what is shown in the screen. To manage state I can use React State in class based components, we can use hooks, and/or redux.

//Components + Styling - important parts of React


//////////////////////////////////////////// DIVE TO THE BACK-END //////////////////////////////////

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





