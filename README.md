
# RESTful Blog Posts API

This project implements a RESTful API for managing blog posts using Node.js, Express.js, and EJS. It supports the full range of CRUD operations: Create, Read, Update, and Delete. The application follows RESTful conventions and uses a simple in-memory data structure to store posts.

## Features

- **Create Posts**: Users can create new blog posts via a form or an API request.
- **View All Posts**: The `/posts` route displays all posts in a list.
- **View Individual Posts**: Users can view the details of a specific post via `/posts/:id`.
- **Update Posts**: Posts can be edited partially or entirely using a form or an API request.
- **Delete Posts**: Posts can be deleted via a request or by clicking a button in the UI.

## Setup

### Prerequisites

Ensure that you have the following installed:

- Node.js (v16 or later)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/restful-blog-posts.git
cd restful-blog-posts
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

Open your browser and navigate to:

```bash
http://localhost:8080/posts
```

## Project Structure

```
.
├── views/
│   ├── index.ejs         # List all posts
│   ├── new.ejs           # Form to create a new post
│   ├── show.ejs          # View a specific post
│   └── edit.ejs          # Form to edit a post
├── public/               # Static assets (CSS, JS, etc.)
├── index.js              # Main application file
├── package.json          # Project dependencies and metadata
└── README.md             # Project documentation
```

## Routes

1. **Index Route**
   - `GET /posts`: Displays a list of all posts.

2. **Create Routes**
   - `GET /posts/new`: Displays a form to create a new post.
   - `POST /posts`: Handles form submission to create a new post.

3. **Show Route**
   - `GET /posts/:id`: Displays the details of a specific post.

4. **Edit Routes**
   - `GET /posts/:id/edit`: Displays a form to edit an existing post.
   - `PATCH /posts/:id`: Handles form submission to update a post.

5. **Destroy Route**
   - `DELETE /posts/:id`: Deletes a specific post.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Unique ID Generation**: UUID
- **HTTP Method Override**: method-override

## Usage

### Example Blog Post Object

```json
{
    "id": "1f8e9d3e-0d67-4c38-8e9d-3c18a09c2b1f",
    "username": "John Doe",
    "content": "Hello, world!"
}
```

### UUID for Unique IDs

Posts use UUIDs for unique identification.

Install UUID using npm:

```bash
npm install uuid
```

## Notes

- The application stores posts in an in-memory array. All data is reset when the server restarts.
- To make the application persistent, integrate a database such as MongoDB or PostgreSQL.
- Use method-override to enable PATCH and DELETE methods in forms.

## Future Enhancements

- Add user authentication and authorization.
- Persist data using a database.
- Add API validation for better error handling.
- Improve the UI with a modern frontend framework.

## License

This project is open-source and available under the MIT License.
```

Feel free to copy and paste this markdown code into your README file! If you need any more help, just let me know. 😊
```
