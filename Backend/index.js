/**************************************************************************************************************
 * 
 * // REST
 * 
 * Representational State Transfer
 * 
 * REST is an architectural style that defines a set of constraints to be used for creating web services.
 * 
 *************************************************************************************************************/

/**************************************************************************************************************
 * 
 * // CRUD Operations
 * 
 * GET retrieves resources.
 * POST submits new data to the server
 * PUT updates existing data
 * PATCH update existing data partially
 * DELETE removes data
 * 
 *************************************************************************************************************/

/***************************************************************************************************************
 * 
 * // Creating RESTful APIs
 * 
 * GET      /posts      to get data for all posts    Index (main)
 * POST     /posts      to add a new post            Create
 * GET      /post/:id   to get one post (using id)   View
 * PATCH    /post/:id   to update specific post      Update
 * DELETE   /posts/:id  to delete specific post      Destroy
 * 
 ****************************************************************************************************************/

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override")

app.use(methodOverride('_method'))

const { v4: uuidv4 } = require("uuid");


app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));



app.listen(port, () => {
    console.log("Listening to port: 8080")
});

/************************************************************************************************
 * 
 * // Implement: GET/posts
 * 
 * Index Route
 * 
 * GET /posts to get data for all posts
 *****************************************************************************************************/

let posts = [
    {
        id : uuidv4(),
        username: "apnacollege",
        content : "I love coding!"
    }, {
        id : uuidv4(),
        username: "Ashok Paudel",
        content: "Hardwork is important"
    }, {
        id: uuidv4(),
        username: "Bhawana Pokhrel",
        content: "What do I say?"
    }

]
app.get("/posts", (request, response) => {
    response.render("index.ejs", {posts})
})

/******************************************************************************************************
 * 
 * // Implement: POST / posts
 * 
 * Create Route
 * 
 * POST /posts to add a new post
 * 
 * 2 routes
 * - Serve the form   Get  /posts/new 
 * - Add the new post POST /posts
 ********************************************************************************************************/


app.get("/posts/new", (request, response) => {
    response.render("new.ejs");
})

app.post("/posts", (request, response) => {
    let { username, content } = request.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    response.redirect("/posts");
})

/***************************************************************************************************
 * 
 * // Redirect
 * 
 * res.redirect(url)
 * 
 * 
 ****************************************************************************************************/


/************************************************************************************************
 * 
 * // Implement : GET/posts/:id
 * 
 * Show Route
 * 
 * Get /posts/:id to get one post (using id)
 ***************************************************************************************************/

app.get("/posts/:id", (request, response) => {
    let { id } = request.params;
    let post = posts.find((p) => id === p.id);
    response.render("show.ejs", {post})
    
})


/****************************************************************************************************
 * 
 * // Create id for Posts
 * UUID Package
 * 
 * Universally unique identifer
 * 
 * npm install uuid
 * 
 *******************************************************************************************************/

/****************************************************************************************************
 * 
 * // Implement : Patch/posts/:id
 * Update Route
 * 
 * PATCH /posts/:id to update specific post
 *******************************************************************************************************/

app.patch("/posts/:id", (request, response) => {
    let { id } = request.params;
    let newContent = request.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    response.redirect("/posts");

})

/****************************************************************************************************
 * 
 * // Create Form for Update
 * 
 * Edit Route
 * 
 * Serve the edit form   GET   /posts/:id/edit
 * 
 ***************************************************************************************************/

app.get("/posts/:id/edit", (request, response) => {
    let { id } = (request.params);
    let post = posts.find((p) => id === p.id);
    response.render("edit.ejs", { post })
})

/****************************************************************************************************
 * 
 * // Implement: /posts/:id
 * 
 * Destroy Route
 * 
 * DELETE /posts/:id  to delete specific post
 * 
 ***************************************************************************************************/

app.delete("/posts/:id", (request, response) => {
    let { id } = request.params;
    posts = posts.filter((p) => id !== p.id);
    response.redirect("/posts");
})