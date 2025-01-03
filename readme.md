
Markdown
<p align="center"> <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" /> </p>
<h1 align="center">NestJS Application</h1>
<p align="center"> A progressive <a href="http://nodejs.org">Node.js</a> framework for building efficient, reliable, and scalable server-side applications. </p>

## .env File Structure

Please include the `.env` file values as they are not uploaded here.
DATABASE_URL="postgresql://:@:/?schema="
JWT_SECRET=""
SUPER_ADMIN_PASSWORD=""
POSTGRES_USER=""
POSTGRES_PASSWORD=""
POSTGRES_DB=""

Code
## Endpoints

### 1. **Login Endpoint**

- **URL:** `/api/users/login`
- **Method:** `POST`
- **Description:** Authenticates a user using the provided credentials and returns a JWT access token upon successful login.

**Headers:**
- `Content-Type: application/json`

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
3 vulnerabilities detected
404 Not Found: The username was not found in the database.

Example:

JSON
{
  "statusCode": 404,
  "message": "username was not found"
}
401 Unauthorized: Incorrect password.

2. Create a Comment for a Post
URL: /api/posts/:postId/comments
Method: POST
Description: Creates a comment associated with a specific post.
Headers:

Content-Type: application/json
Path Parameters:

postId (integer): The ID of the post to associate the comment with.
Request Body:

JSON
{
  "content": "string"
}
Responses:

201 Created: Returns the created comment.

Example:

JSON
{
  "id": 1,
  "content": "This is a comment",
  "postId": 123,
  "createdAt": "2024-01-03T12:34:56.789Z"
}
404 Not Found: The specified post was not found.

Example:

JSON
{
  "statusCode": 404,
  "message": "Post was not found"
}
3. Get All Comments for a Post
URL: /api/posts/:postId/comments
Method: GET
Description: Retrieves all comments associated with a specific post.
Path Parameters:

postId (integer): The ID of the post to fetch comments for.
Responses:

200 OK: Returns a list of comments associated with the specified post.

Example:

JSON
[
  {
    "id": 1,
    "content": "This is a comment",
    "postId": 123,
    "createdAt": "2024-01-03T12:34:56.789Z"
  },
  {
    "id": 2,
    "content": "Another comment",
    "postId": 123,
    "createdAt": "2024-01-03T13:45:56.789Z"
  }
]
404 Not Found: The specified post was not found.

Example:

JSON
{
  "statusCode": 404,
  "message": "Post was not found"
}
404 Not Found: There are no comments for this post.

Example:

JSON
{
  "statusCode": 404,
  "message": "There are no comments for this post"
}
4. Get User Profile
URL: /api/users/profile
Method: GET
Description: Retrieves the authenticated user's profile information.
Headers:

Authorization: Bearer <JWT_TOKEN>
Responses:

200 OK: Returns the user profile data.

Example:

JSON
{
  "id": 1,
  "username": "string",
  "role": "USER"
}
5. Update User Profile
URL: /api/users/profile
Method: PATCH
Description: Updates the authenticated user's profile information.
Headers:

Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
Request Body:

JSON
{
  "username": "string",
  "password": "string"
}
6. Create Post
URL: /api/posts
Method: POST
Description: Creates a new post.
Headers:

Content-Type: application/json
Request Body:

JSON
{
  "title": "string",
  "description": "string"
}
7. Get All Posts
URL: /api/posts
Method: GET
Description: Retrieves all posts with their comments.
Response:

200 OK:

Example:

JSON
[
  {
    "id": 1,
    "title": "string",
    "description": "string",
    "createdAt": "2024-01-03T12:34:56.789Z",
    "comment": []
  }
]
8. Get Post by ID
URL: /api/posts/:id
Method: GET
Description: Retrieves a specific post by its ID.
Path Parameters:

id (integer): The ID of the post
9. Get All Comments for a Post
URL: /api/posts/:postId/comments
Method: GET
Description: Retrieves all comments for a specific post.
Path Parameters:

postId (integer): The ID of the post
10. Upload File
URL: /api/posts/upload
Method: POST
Description: Uploads an image file (jpg, jpeg, or png).
Headers:

Content-Type: multipart/form-data
Form Data:

file: Image file (max size defined in configuration)
Response:

201 Created

422 Unprocessable Entity: If file type is invalid.

Code
3. Save the changes to the `readme.md` file.

These changes will improve the readability and formatting of 
