# Social Media Full Stack Application

## Folder Structure
![Folder-Structure](./public/images/folder_structure.JPG)

## Brief Explaination of Dependency
1. **express**: A web framework for handling HTTP requests and routing.
2. **mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
3. **jsonwebtoken**: Used for generating and verifying JSON Web Tokens (JWT) for authentication.
4. **bcrypt**: A library for hashing passwords securely.
5. **body-parser**: Middleware to parse incoming request bodies.
6. **cors**: Middleware for enabling Cross-Origin Resource Sharing.
7. **dotenv**: Loads environment variables from a .env file.
8. **helmet**: Adds security headers to HTTP responses.
9. **morgan**: HTTP request logger middleware.
10. **validator**: A library for input validation.


### User Registration

1. Endpoint: /api/users/signup
2. Method: POST
3. Description: Register a new account.
4. Request Body:
    - username: User's username
    - email: User's email
    - password: User's password
5. Response:
    - user: Registered user details (excluding password)
    - token: JWT token for authentication


### User Login

1. Endpoint: /api/users/signin
2. Method: POST
3. Description: Login as a user.
4. Request Body:
    - email: User's email
    - password: User's password
5. Response:
    - user: Logged in user details (excluding password)
    - token: JWT token for authentication


### User Logout

1. Endpoint: /api/users/logout
2. Method: POST
3. Description: Logout the currently logged-in user.
4. Request Headers:
    - Authorization: Bearer token obtained during login
5. Response:
    - message: Logout successful


### Logout from All Devices

1. Endpoint: /api/users/logout-all-devices
2. Method: POST
3. Description: Logout the user from all devices.
4. Request Headers:
    - Authorization: Bearer token obtained during login
5. Response:
    - message: Logout from all devices successful