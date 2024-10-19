
# API with JWT Authentication

This project demonstrates how to build a Node.js REST API with JWT (JSON Web Token) authentication using Express.js and MongoDB. The API allows users to register, log in, and access protected routes, ensuring secure communication between the client and server through JWT.

## Features

- User registration with hashed passwords
- User login with JWT issuance
- Middleware for protecting routes with JWT
- MongoDB for data storage

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## Getting Started

Follow these steps to set up the project and run it locally.

### 1. Clone the Repository

```bash
git clone https://github.com/mursidx/API-with-JWT-Authentication.git
cd API-with-JWT-Authentication
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the project root and copy the contents from `.env.example`. Modify the values as needed:

```bash
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000
```

### 4. Run the Application

```bash
npm start
```

The API will be running on `http://localhost:5000`.

## API Endpoints

### 1. Register a User

**Endpoint:** `POST /api/auth/register`

Registers a new user.

#### Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Response:

```json
{
  "message": "User registered successfully"
}
```

### 2. Login a User

**Endpoint:** `POST /api/auth/login`

Logs in a user and returns a JWT.

#### Request Body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Response:

```json
{
  "token": "jwt-token-here"
}
```

### 3. Access Protected Route

**Endpoint:** `GET /api/protected`

Requires a valid JWT.

#### Request Header:

```bash
Authorization: Bearer <jwt-token>
```

#### Response:

```json
{
  "message": "Access granted to protected route"
}
```

## Folder Structure

- `config/`: Database connection setup
- `controllers/`: Functions handling API requests
- `middlewares/`: JWT validation middleware
- `models/`: Mongoose models
- `routes/`: API route definitions
- `utils/`: Helper functions

## Running Tests

No tests included yet. Future updates may include test cases for API endpoints.

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE).

---
