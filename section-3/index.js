///////////////////////////////////////////////// PLANNING THE APP ///////////////////////////////////////////////////

// Think of idea
// Sketch the design 
// CRUD, mutilple data models, image upload, and input validation, authentication and authorization required 

// DATA
//Users && Places

// USER - all users can create mupltiple places 
// 1. Name 
// 2. E-mail
// 3. Password
// 4. Image 

// PLACES - every places belong to exactly one user 
// 1. Title 
// 2. Description 
// 3. Address 
// 4. Location (Lat & Long)
// 5. Image of place visited


// API ENDPOINTS
// USERS
// 1. GET(view a list of all user) -> /api/users
// 2. POST(create new user and login user) -> /api/users/signup
// 3. POST(logs user in) -> /api/login
// PLACES 
// 1. GET(view list of all places for a given user) -> /api/places/user/:uid
// 2. GET(view specific place by place) -> /api/places/:pid
// 3. POST(create a new place) -> /api/places
// 4. PATCH(update the place) -> /api/places/:pid
// 5. DELETE(delete the place) -> /api/places/:pid

// REACT FRONT END 
// 1. / (list of users) -> always reachable
// 2. /:uid/places (list of places for selected user) -> always reachable 
// 3. /authenticate (signup & login form) -> only authenticated
// 4. /places/new (new place form) -> only authenticated
// 5. /places/:pid (update place form) -> only authenticated

