Please Include the .env file values as they are not uploaded here 
strucuture of .env 

DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database_name>?schema=<schema_name>"

JWT_SECRET=""

SUPER_ADMIN_PASSWORD=""

POSTGRES_USER= ""  

POSTGRES_PASSWORD = ""

POSTGRES_DB= ""



1. Login Endpoint
2. 
URL: /api/users/login

Method: POST

Description: Authenticates a user using the provided credentials and returns a JWT access token upon successful login.


Headers:

Content-Type: application/json


Request Body:
{
  "username": "string",
  
  "password": "string"
}


404 Not Found
Description: The username was not found in the database.

Example:

{
  "statusCode": 404,
  
  "message": "username was not found"
}



401 Unauthorized

Description: Incorrect password.




2. Create a Comment for a Post
3. 
URL: /api/posts/:postId/comments


Method: POST

Description: Creates a comment associated with a specific post.

Headers:

Content-Type: application/json

Path Parameters:


postId (integer): The ID of the post to associate the comment with.


Request Body:


{
  "content": "string"
}


Responses:

201 Created

Description: Returns the created comment.

Example:


{
  "id": 1,
  
  "content": "This is a comment",
  
  "postId": 123,
  
  "createdAt": "2024-01-03T12:34:56.789Z"
  
}


404 Not Found

Description: The specified post was not found.

Example:

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

200 OK
Description: Returns a list of comments associated with the specified post.
Example:

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



404 Not Found
Description: The specified post was not found or there are no comments for this post.
Examples:
{
  "statusCode": 404,
  "message": "Post was not found"
}


{
  "statusCode": 404,
  "message": "There are not comments for this post"
}



4. Get User Profile
URL: /api/users/profile
Method: GET
Description: Retrieves the authenticated user's profile information.

Headers:
- Authorization: Bearer <JWT_TOKEN>

Responses:
200 OK
Description: Returns the user profile data.
Example:
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
- Authorization: Bearer <JWT_TOKEN>
- Content-Type: application/json

Request Body:
{
  "username": "string",
  "password": "string"
}

6. Create Post
URL: /api/posts
Method: POST
Description: Creates a new post.

Headers:
- Content-Type: application/json

Request Body:
{
  "title": "string",
  "description": "string"
}

7. Get All Posts
URL: /api/posts
Method: GET
Description: Retrieves all posts with their comments.

Response:
200 OK
Example:
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
- id (integer): The ID of the post

9. Get All Comments for a Post
URL: /api/posts/:postId/comments
Method: GET
Description: Retrieves all comments for a specific post.

Path Parameters:
- postId (integer): The ID of the post

10. Upload File
URL: /api/posts/upload
Method: POST
Description: Uploads an image file (jpg, jpeg, or png).

Headers:
- Content-Type: multipart/form-data

Form Data:
- file: Image file (max size defined in configuration)

Response:
201 Created
422 Unprocessable Entity (if file type is invalid)
